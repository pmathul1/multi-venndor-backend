const{Schema,model}=require('mongoose')
const CartSchema=new Schema({
    Product_id:{type:String},
    Quantity:{
        type:String,
        required:true
    },
    User_id:{
        type:String
    }

})
module.exports=model("CartSchema",CartSchema)