const{Schema,model}=require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const GroceryproductSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    Best_seller:{
        type:Boolean,
    },
    ImageUrl:{
        type:String
    },
    Quantity:{
        type:String,
    },
    Price:{
        type:String,
        required:true
    },
    Category_id:
    {
        type:String,
        required:true,
    },
    Shopid:{
        type:String
    },
})
GroceryproductSchema.plugin(AutoIncrement, {inc_field: 'GroceryProduct_id'})
module.exports=model("GroceryProductSchema",GroceryproductSchema)




