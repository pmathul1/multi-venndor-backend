const{Schema,model}=require('mongoose')
const ImageCarousel=new Schema({
    ImageUrl:{
        type:String
    },
    Order:{
        type:Number,
        required:false
    }
})
module.exports=model("HomepageImageCarousel",ImageCarousel)