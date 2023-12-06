const dishesController = require("../controllers/dishesController");
  
const router = require("express").Router();

router.post("/addDish", dishesController.addDish);
router.get("/getAll", dishesController.getAllDishes);
router.get("/getDish/:dishename", dishesController.getDishByName);
router.put("/updateDish/:id", dishesController.updateDish);
router.delete("/deleteDish/:id", dishesController.deleteDish);
// router.get("/getDish/:id", dishesController.getDish);

// make this file so i can use it with authRoutes(router) in index.js
const dishRoutes = (mainrouter) => {
    mainrouter.use('/dish', router);
};

module.exports = dishRoutes;
  