const{Schema,model}=require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const OrderSchema=new Schema({
    Product_id:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    }
})
OrderSchema.plugin(AutoIncrement, {inc_field: 'Order_id'})
module.exports=model("OrderSchema",OrderSchema)