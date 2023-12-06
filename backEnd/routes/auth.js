const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

// make this file so i can use it with authRoutes(router) in index.js
const authRoutes = (mainrouter) => {
  mainrouter.use('/auth', router);
};

module.exports = authRoutes;
