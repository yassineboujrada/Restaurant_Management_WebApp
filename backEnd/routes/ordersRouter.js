const ordersController = require("../controllers/ordersController");
  
const router = require("express").Router();

router.post("/addOrder", ordersController.addOrder);
router.get("/getAll", ordersController.getAllOrders);
router.put("/updateOrder/:id", ordersController.updateOrder);
router.delete("/deleteOrder/:id", ordersController.deleteOrder);
router.get("/getOrder/:id", ordersController.getOrderById);

// make this file so i can use it with authRoutes(router) in index.js
const orderRoutes = (mainrouter) => {
    mainrouter.use('/order', router);
};

module.exports = orderRoutes;