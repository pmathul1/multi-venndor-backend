const Maincategory=require('../Model/Homepage/Main-catogery')
module.exports={
    async getMainCategory(req,res)
    {
        
        let categories=await Maincategory.find() 
        console.log(categories)
        res.status(200).json({messages:categories})
    }
}