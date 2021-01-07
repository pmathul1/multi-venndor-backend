const{Schema,model}=require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const deals=new Schema(
    {
        Category_id:{
            type:String,
            required:true
        },
        Title:{
            type:String,
            required:true
        },
        Price:{
            type:String,
            required:true
        },
        Quantity:{
            type:String,
            required:true
        },
        Seller:{
            type:String,
            required:true
        },
        Image_url:{
            type:String,
            required:true
        }
    }
)
deals.plugin(AutoIncrement, {inc_field: 'id'})
module.exports=model("DealSchema",deals)