const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  date_of_reservation: {
    type: Date,
    required: true,
  },
  dishes :{
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  dishStatus: [
      {
        type: String,
        enum: ['', 'En cours de préparation', 'Prête'],
      },
    ],
  
  
});

module.exports = mongoose.model("Orders", ordersSchema);