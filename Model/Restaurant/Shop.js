const {Schema,model}=require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const ShopSchema=new Schema({
Title:{
    type:String,
   required:true
},
Category_id:[{
    type:String,
    default:[]
}],
Sub_Category_id:[{type:String,default:[]}],
ImageUrl:
{
    type:String,
    required:true

},
latitude:{
    type:String,

},
longitude:{
    type:String,

},
Mobile_no:{
    type:String,
    required:true
},
isVeg:{
    type:Boolean,
    default:false
}
})
ShopSchema.plugin(AutoIncrement, {inc_field: 'Shop_id'})
module.exports=model("ShopSchema",ShopSchema)

