const {Schema,model}=require("mongoose")
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const RestaurantItemSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    isVeg:{
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
    },
    Sub_category_id:{
        type:String,
    },
    Type:{
        type:String,
    },
    RestaurantId:{
        type:String
    }
})
RestaurantItemSchema.plugin(AutoIncrement, {inc_field: 'Product_id'})
module.exports=model("RestaurantproductSchema",RestaurantItemSchema)