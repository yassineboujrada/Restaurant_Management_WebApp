const Dishes = require("../models/dishesModel");

module.exports.getAllDishes = async (req, res, next) => {
    try {
        const dishes = await Dishes.find({});

        if (dishes === null) {
            return res.json({ msg: "No dishes found" });
        } else {
            return res.json(dishes);
        }
    } catch (err) {
        next(err);
    }
};

module.exports.getDish = async (req, res, next) => {
    try {
        const id = req.body.id;
        const dish_by_id = await Dishes.findById({_id : id});
        if(dish_by_id === null) res.json({msg:`The dish ${id} doesn't exist`})
        return res.json(dish_by_id)
    } catch (err) {
        next(err)
    }
}

module.exports.addDish = async (req, res, next) => {
    try {
        const dish = await Dishes.create(req.body);
        return res.json({msg:"Dish was added successfully"});
    } catch (err) {
        next(err);
    }
}

module.exports.updateDish = async (req, res, next) => {
    try{
        const id = req.body.id;
        const Dish_to_update = await User.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                image_url : req.body.image_url,
                category: req.body.category,
                price: req.body.price
            },
            { new: true }
          );
        return res.json({msg:`Dish N : ${id} was updated successfully`});
    } catch(err){
        next(err);
    }
}

module.exports.deleteDish = async (req, res, next) => {
    try {
        const id = req.body.id;
        const Dish_to_delete = await Orders.findOneAndDelete({_id:id});
        return res.json({msg:"Dish was deleted successfully"});
    } catch (err) {
        next(err)
    }
}

module.exports.getDishByName = async (req, res, next) => {
    try {
        const dishename = req.body.dishename;
        const dish_by_name = await Dishes.findById({dishename : dishename});
        if(dish_by_name === null) res.json({msg:`${dishename} Not Found`})
        return res.json(dish_by_name)
    } catch (err) {
        next(err)
    }
}