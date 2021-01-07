const {Schema,model}=require("mongoose")
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);


const ProductSchema=new Schema({
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
    }
    
})

const subCategoryschema=new Schema({
    Subcategoryname:String,
    Products:ProductSchema
})

const RestaurantItemSchema=new Schema({
    ShopName:String,
    Categories:{Categoryname:String,
        Subcategories:subCategoryschema}
})
// RestaurantItemSchema.plugin(AutoIncrement, {inc_field: 'shop_id'})
// subCategoryschema.plugin(AutoIncrement, {inc_field: 'category_id'})
// ProductSchema.plugin(AutoIncrement, {inc_field: 'Product_id'})
module.exports=model("RestaurantSchematry",RestaurantItemSchema)