const {Schema,model}=require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Maincategory=new Schema(
    {
        Title:{
            type:String,
            required:true
        },
        Image_Url:{
            type:String,
            required:true
        }
    }
)
Maincategory.plugin(AutoIncrement, {id:'Category',inc_field: 'Category_id'})
module.exports=model("MainCategorySchema",Maincategory)