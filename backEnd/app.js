// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// // const authRoutes = require("./routes/auth");
// // const messageRoutes = require("./routes/messages");
// const app = express();
// // const socket = require("socket.io");
// require("dotenv").config();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // app.use("/api/auth", authRoutes);
// // app.use("/api/messages", messageRoutes);

// const server = app.listen(process.env.PORT, () =>
//   console.log(`Server started on ${process.env.PORT}`)
// );
// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// });

// global.onlineUsers = new Map();
// io.on("connection", (socket) => {
//   global.chatSocket = socket;
//   socket.on("add-user", (userId) => {
//     onlineUsers.set(userId, socket.id);
//   });

//   socket.on("send-msg", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//     }
//   });
// });


const globalErrHandler = require('./middlewares/error_handler_api');
const AppError = require('./utils/app_error.js');
const express = require('express');
const limiter = require('./middlewares/api_limiter');
const compression = require('compression');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const morgan = require('./middlewares/morgan');
// const swaggerDocs = require('./utils/swagger');
const { CURRENT_ENV, API_VERSION } = require('./config/app_config');

const app = express();

// configure swagger docs
// swaggerDocs(app);

// use json as default format
app.use(express.json());

// use morgan for logging
app.use(morgan);

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API

// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: '15kb',
  })
);

// Data sanitization against Nosql query injection
app.use(
  mongoSanitize({
    replaceWith: '_',
  })
);

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Compress all responses
app.use(compression());

//Limiting request form same IP
if (CURRENT_ENV.toLocaleLowerCase() === 'production') {
  app.use('/api',limiter);
}

// routes
app.use(`/api/${API_VERSION}`, require('./routes/index'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Our backend app Side 😒',
    env: CURRENT_ENV,
  });
});

// handle undefined Routes
app.use('*', (req, res, next) => {
  const err = new AppError(404, 'fail', 'Route Not Found', req.originalUrl);
  next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
