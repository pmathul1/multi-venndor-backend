const{Schema,model}=require('mongoose')
const ProfileSchema=new Schema({
    Phone:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        Required:true
    }
})
module.exports=model("ProfileSchema",ProfileSchema)