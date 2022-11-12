const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true,unique:true },
    total:{type:Number,default:0},
    totalQuanlity:{type:Number,default:0},
    products: [
      {
        id:{
          type: String,
         
        },
        name:{
          type:String,
        
        },
        price:{
          type:Number,
         
        },
        size:{
          type:String,
         
        },
        color:{
          type:String,
        
        },
        quanlity: {
          type: Number,
          default: 1,
        },
        img:{
          type:String,
        
        }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);