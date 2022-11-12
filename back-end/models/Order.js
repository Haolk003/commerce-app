const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema(
    {
        userId:{type:String,required:true},
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
        amount:{type:Number,required:true},
        address:{type:Object,required:true},
        name:{type:String},
        img:{type:String},
        status:{type:String,default:"pending"}
    }, {timestamps:true}
);
module.exports=mongoose.model("Order",OrderSchema);