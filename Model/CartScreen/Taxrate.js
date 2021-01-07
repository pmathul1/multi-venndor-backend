const{Schema,model}=require('mongoose')
const TaxSchema=new Schema({
    GstRate:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    }
})
module.exports=model("TaxSchema",TaxSchema)