const{Schema,model}=require('mongoose')
const Delivery=new Schema({
    Delivery_Charge:{
        type:String,
        required:true
    },
    Distance:{
        type:String,
        required:true
    }
})
module.exports=model("DeliveryChargeSchema",Delivery)