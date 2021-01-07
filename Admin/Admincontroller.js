const Maincategory=require('../Model/Homepage/Main-catogery')
const DealSchema=require('../Model/Homepage/Homepage-Deals')
const HomeImagecarousel=require('../Model/Homepage/CorouselImage')
const RestaurantImageCarousel=require('../Model/Restaurant/CorouselImage')
const ShopSchema=require('../Model/Restaurant/Shop')
const RestaurantProduct = require('../Model/Restaurant/RestaurantProduct')
const GroceryProducts = require('../Model/Grocery/GroceryProducts')
const Orders=require('../Model/Profile/Order')
const ProfileSchema=require('../Model/Profile/Profile')
const CartSchema =require('../Model/CartScreen/Cart')
const DeliverySchema =require('../Model/CartScreen/DeliverCharge')
const TaxSchema =require('../Model/CartScreen/Taxrate')


module.exports={

    /*=============================Homepage Controllers=================================*/
// ==========================main category operations starts================================= 
     /* geting categories
     in home page */
    async getMainCategory(req,res)
    {
        let categories=await Maincategory.find() 
        console.log(categories)
        res.status(200).json({messages:categories})
    },
  
    /*Admin adding 
    main category to 
    home page */
    async addMainCategory(req,res)
    {
        let{Title,Image_Url}=req.body
        let data={Title,Image_Url}
        await Maincategory(data).save()
        res.status(200).json({messages:"ok"})
    },
    
    
    
    /*
    admin
    editing Maincategory
    in the homepage
    */
    async editMainCategory(req,res)
    {   
            
            let{Title,Image_Url}=req.body
           
            let updatingCategory=await Maincategory.findOne({_id:req.params.id})
            if(updatingCategory)
           {
                // updatingCategory.Category_id=Category_id;
                updatingCategory.Title=Title;
                updatingCategory.Image_Url=Image_Url;
                let updatedCategory=await updatingCategory.save()
                if(updatedCategory)
                {
                    res.status(200).json({messages:"updated succesfully"})
                }
           }
        //    try
        //    {
        //     let updatingCategory=await Maincategory.findOne({_id:req.params.id})
        //         updatingCategory.Category_id=Category_id;
        //         updatingCategory.Title=Title;
        //         updatingCategory.Image_Url=Image_Url;
        //         let updatedCategory=await updatingCategory.save()
        //         console.log(updatedCategory)
        //    }
        //    catch(err)
        //    {
        //        console.log(err)
        //    }
    },

   /* admin
    deleting Maincategory
    in the homepage*/
    async  deleteMainCategory(req,res)
    {
        let deletingCategory=await Maincategory.findOne({_id:req.params.id})
        let success=await deletingCategory.deleteOne()
        if(success)
        {
            res.status(200).json({messages:"deleted succesfully"})
        }


    },

// ==========================main category operations ends================================= 



// ==========================Deals operations starts================================= 
/*   Deals
     in home page */
     async getDeals(req,res)
     {
         let deals=await DealSchema.find() 
         console.log(deals)
         res.status(200).json({messages:deals})
     },
   
     /*Admin adding 
      Deals  */
     async addDeal(req,res)
     {
         let{Category_id,Title,Price,Quantity,Seller,Image_url}=req.body
         let data={Category_id,Title,Price,Quantity,Seller,Image_url}
         await DealSchema(data).save()
         res.status(200).json({messages:"added succesfully"})
     },
     
     
     
     /*
     admin
     editing Deals
     */
     async editDeal(req,res)
     {   
             
        let{Category_id,Title,Price,Quantity,Seller,Image_url}=req.body
            
             let updatingDeal=await DealSchema.findOne({_id:req.params.id})
             if(updatingDeal)
            {
                 updatingDeal.Category_id=Category_id;
                 updatingDeal.Title=Title;
                 updatingDeal.Price=Price;
                 updatingDeal.Quantity=Quantity;
                 updatingDeal.Seller=Seller;
                 updatingDeal.Image_url=Image_url;
                 let updatedDeal=await updatingDeal.save()
                 if(updatedDeal)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting Deals
     */
     async  deleteDeal(req,res)
     {
         let deletingDeal=await DealSchema.findOne({_id:req.params.id})
         let success=await deletingDeal.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"deleted succesfully"})
         }
 
 
     },

// ==========================Deals operations ends================================= 



// ==========================ImageCarousel operations starts================================= 
/*   ImageCarousel
     in home page */
     async getImageCarousel(req,res)
     {
         let ImageCarousel=await HomeImagecarousel.find() 
         res.status(200).json({ImageUrls:ImageCarousel.map(obj => obj.ImageUrl)})
     },
   
     /*Admin adding 
      ImageCarousel  */
     async addImage(req,res)
     {
         let{Order,ImageUrl}=req.body
         let data={Order,ImageUrl}
         await HomeImagecarousel(data).save()
         res.status(200).json({messages:"Image added succesfully"})
     },
     
     
     
     /*
     admin
     editing ImageCarousel
     */
     async editImage(req,res)
     {   
             
        let{Order,ImageUrl}=req.body
            
             let updatingImage=await HomeImagecarousel.findOne({_id:req.params.id})  // _id can be changed to order ,change_id to order ,in route also
             if(updatingImage)
            {
                 updatingImage.Order=order;
                 updatingImage.ImageUrl=ImageUrl;
                 let updatedImage=await updatingImage.save()
                 if(updatedImage)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting ImageCarousel
     image
     */
     async  deleteImage(req,res)
     {
         let deletingImage=await HomeImagecarousel.findOne({_id:req.params.id})
         let success=await deletingImage.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"deleted succesfully"})
         }
     },

// ========================== image carousel operations ends================================= 
     /*=============================Hoempage Controllers ens=================================*/
        
    /*=============================Restaurant Controllers=================================*/

// ==========================ImageCarousel operations starts=================================
/*   ImageCarousel
     in Restaurant */
     async getRestImageCarousel(req,res)
     {
         let ImageCarousel=await RestaurantImageCarousel.find() 
         res.status(200).json({ImageUrls:ImageCarousel.map(obj => obj.ImageUrl)})
     },
   
     /*Admin adding 
      ImageCarousel  */
     async addResImage(req,res)
     {
         let{Order,ImageUrl}=req.body
         let data={Order,ImageUrl}
         await RestaurantImageCarousel(data).save()
         res.status(200).json({messages:"Image added succesfully"})
     },
     
     
     
     /*
     admin
     editing ImageCarousel
     */
     async editResImage(req,res)
     {   
             
        let{Order,ImageUrl}=req.body
            
             let updatingImage=await RestaurantImageCarousel.findOne({_id:req.params.id})  // _id can be changed to order ,change_id to order ,in route also
             if(updatingImage)
            {
                 updatingImage.Order=order;
                 updatingImage.ImageUrl=ImageUrl;
                 let updatedImage=await updatingImage.save()
                 if(updatedImage)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting ImageCarousel
     image
     */
     async  deleteResImage(req,res)
     {
         let deletingImage=await RestaurantImageCarousel.findOne({_id:req.params.id})
         let success=await deletingImage.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"deleted succesfully"})
         }
 
 
     },
// ==========================ImageCarousel operations ends================================= 

// ==========================Shop operations starts================================= 
/*   geting data 
    of Shops */
     async getShop(req,res)
     {
         let Shop=await ShopSchema.find() 
         console.log(Shop)
         res.status(200).json({messages:Shop})
     },
   
     /*Admin adding 
      shop  */
     async addShop(req,res)
     {
         let{Title,Category_id,Sub_Category_id,ImageUrl,latitude,longitude,Mobile_no,isVeg}=req.body
         let data={Category_id,Title,Sub_Category_id,ImageUrl,latitude,longitude,Mobile_no,isVeg}
         await ShopSchema(data).save()
         res.status(200).json({messages:"added succesfully"})
     },
     
     
     
     /*
     admin
     editing shop
     */
     async editShop(req,res)
     {   
             
        let{Title,ImageUrl,latitude,longitude,Mobile_no,isVeg}=req.body
             let updatingShop=await ShopSchema.findOne({_id:req.params.id})


             if(updatingShop)
            {
                 updatingShop.Title=Title;
                 updatingShop.ImageUrl=ImageUrl;
                 updatingShop.latitude=latitude;
                 updatingShop.longitude=longitude;
                 updatingShop.Mobile_no=Mobile_no;
                 updatingShop.isVeg=isVeg;
                 let updatedshop=await updatingShop.save()
                if(updatedshop)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting Shop
     */
     async  deleteShop(req,res)
     {
         let deletingShop=await ShopSchema.findOne({_id:req.params.id})
         let success=await deletingShop.deleteOne()
         if(success)
         {
            res.status(200).json({messages:"deleted succesfully"})
         }
     },

// ==========================Shop operations ends================================= 


// ==========================RestaurantProduct operations starts================================= 
/*   geting data 
    of Product */
    async getProducts(req,res)
    {
        let Product=await RestaurantProduct.find() 
        console.log(Product)
        res.status(200).json({messages:Product})
    },
  
    /*Admin adding 
     Product  */
    async addProduct(req,res)
    {
        let{Title,Category_id,Sub_category_id,ImageUrl,Quantity,Price,Type,isVeg}=req.body
        let RestaurantId=req.params.id
        let data={Title,Category_id,Sub_category_id,ImageUrl,Quantity,Price,Type,isVeg,RestaurantId}
        await RestaurantProduct(data).save()
        res.status(200).json({messages:"added succesfully"})
    },
    
    
    
    /*
    admin
    editing Product
    */
    async editProduct(req,res)
    {   
            
        let{Title,Category_id,Sub_category_id,ImageUrl,Quantity,Price,Type,isVeg,RestaurantId}=req.body
            let updatingProduct=await RestaurantProduct.findOne({_id:req.params.id})


            if(updatingProduct)
           {
            updatingProduct.Title=Title;
            updatingProduct.ImageUrl=ImageUrl;
            updatingProduct.Category_id=Category_id;
            updatingProduct.Sub_category_id=Sub_category_id;
            updatingProduct.Mobile_no=Mobile_no;
            updatingProduct.isVeg=isVeg;
            updatingProduct.Quantity=Quantity;
            updatingProduct.Price=Price;
            updatingProduct.Type=Type;
            updatingProduct.RestaurantId=RestaurantId;
                let updatedProduct=await updatingProduct.save()
               if(updatedProduct)
                {
                    res.status(200).json({messages:"updated succesfully"})
                }
           }
    },

   /* admin
    deleting product
    */
    async  deleteProduct(req,res)
    {
        let deletingProduct=await RestaurantProduct.findOne({_id:req.params.id})
        let success=await deletingProduct.deleteOne()
        if(success)
        {
           res.status(200).json({messages:"deleted succesfully"})
        }
    },

// ==========================Resturantproduct operations ends================================= 
    /*===========================Restaurant page ends==============================*/

    /*===========================grocery page start==============================*/
// ==========================GroceryProduct operations starts================================= 
/*   geting data 
    of GroceryProduct */
    async getGroceryProducts(req,res)
    {
        let Product=await RestaurantProduct.find() 
        console.log(Product)
        res.status(200).json({messages:Product})
    },
  
    /*Admin adding 
     GroceryProduct  */
    async addGroceryProduct(req,res)
    {
        let{Title,Best_seller,Category_id,ImageUrl,Quantity,Price}=req.body
        let Shopid=req.params.id
        let data={Title,Best_seller,Category_id,ImageUrl,Quantity,Price,Shopid}
        await GroceryProducts(data).save()
        res.status(200).json({messages:"added succesfully"})
    },
    
    
    
    /*
    admin
    editing Grocery Product
    */
    async editGroceryProduct(req,res)
    {   
            
        let{Title,Best_seller,Category_id,ImageUrl,Quantity,Price}=req.body
            let updatingProduct=await GroceryProducts.findOne({_id:req.params.id})


            if(updatingProduct)
           {
            updatingProduct.Title=Title;
            updatingProduct.Best_seller=Best_seller;
            updatingProduct.Category_id=Category_id;
            updatingProduct.Sub_category_id=Sub_category_id;
            updatingProduct.ImageUrl=ImageUrl;
            updatingProduct.Price=Price;
            updatingProduct.Quantity=Quantity;
            updatingProduct.Shopid=Shopid;
                let updatedProduct=await updatingProduct.save()
               if(updatedProduct)
                {
                    res.status(200).json({messages:"updated succesfully"})
                }
           }
    },

   /* admin
    deleting Grocery product
    */
    async  deleteGroceryProduct(req,res)
    {
        let deletingProduct=await GroceryProducts.findOne({_id:req.params.id})
        let success=await deletingProduct.deleteOne()
        if(success)
        {
           res.status(200).json({messages:"deleted succesfully"})
        }
    },
// ==========================GroceryProduct operations ends================================= 
    /*===========================Grocery page ends==============================*/

    /*===========================Profile page start==============================*/
// ==========================order operations starts================================= 
/*   geting
     order infos*/
     async getOrders(req,res)
     {
         let orders=await Orders.find() 
         console.log(orders)
         res.status(200).json({messages:orders})
     },
   
     /*Admin  
      ordering  */
     async addOrder(req,res)
     {
         let{Quantity}=req.body
         let Product_id=req.params.id
         let data={Product_id,Quantity}
         await Orders(data).save()
         res.status(200).json({messages:"added succesfully"})
     },
     
     
     
     /*
     admin
     editing orders
     */
     async editOrder(req,res)
     {   
             
        let{Product_id,Quantity}=req.body
            
             let updatingOrder=await Orders.findOne({_id:req.params.id})
             if(updatingOrder)
            {
               
                 updatingOrder.Product_id=Product_id;
                 updatingOrder.Quantity=Quantity;
                 let updatedOrder=await updatingOrder.save()
                 if(updatedOrder)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting order
     */
     async  deleteOrder(req,res)
     {
         let deletingOrder=await Orders.findOne({_id:req.params.id})
         let success=await deletingOrder.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"order deleted succesfully"})
         }
 
 
     },
// ==========================order operations ends================================= 


// ==========================Profile operations starts================================= 
/*   geting
     profile infos*/
     async getProfiles(req,res)
     {
         let profile=await ProfileSchema.find() 
         console.log(profile)
         res.status(200).json({messages:profile})
     },
   
     /*Admin  
      adding profile  */
     async addProfile(req,res)
     {
         let{Phone}=req.body
         let data={Phone}
         await ProfileSchema(data).save()
         res.status(200).json({messages:"added succesfully"})
     },
     
     
     
     /*
     admin
     editing profile
     */
     async editProfile(req,res)
     {   
             
        
             let Phone=req.params.id
             let updatingProfile=await ProfileSchema.findOne({Phone:Phone})
             if(updatingProfile)
            {
               
                 updatingProfile.Name=Name;
                 updatingProfile.Email=Email;
                 let updatedProfile=await updatingProfile.save()
                 if(updatedProfile)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting order
     */
     async  deleteProfile(req,res)
     {
         let deletingProfile=await ProfileSchema.findOne({_id:req.params.id})
         let success=await deletingProfile.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"order deleted succesfully"})
         }
 
 
     },
// ==========================Profile operations ends================================= 
   /*===========================profile page ends==============================*/

   /*===========================cartscreen  starts==============================*/
// ==========================cart operations starts================================= 
/*   geting all
     cart infos*/
     async getCart(req,res)
     {
         let Carts=await CartSchema.find() 
         console.log(carts)
         res.status(200).json({messages:profile})
     },

 /*    geting specific
     cart infos*/
     async getUserCart(req,res)
     {
         let Carts=await CartSchema.findOne({User_id:req.params.id}) 
         console.log(Carts)
         res.status(200).json({messages:Carts})
     },
   
     /*Admin  
      adding to cart  */
     async addCart(req,res)
     {
         let{Product_id,Quantity}=req.body
         let User_id=req.params.id
         let data={Product_id,Quantity,User_id}
         await CartSchema(data).save()
         res.status(200).json({messages:"added succesfully"})
     },
     
     
     
     /*
     admin
     editing cart
     */
     async editCart(req,res)
     {   
             
        
            let User_id=req.params.id
            let Product_id=req.body
            let Carts=await CartSchema.find({User_id:User_id})
            let updatingCart=Carts.findOne({Product_id:Product_id})
             if(updatingCart)
            {
               
                 updatingCart.Quantity=Quantity;
                 let updatedcart=await updatingCart.save()
                 if(updatedcart)
                 {
                     res.status(200).json({messages:"updated succesfully"})
                 }
            }
     },
 
    /* admin
     deleting cart item
     */
     async  deleteCart(req,res)
     {

        
        let User_id=req.params.id
        let Product_id=req.body
        let Carts=await CartSchema.find({User_id:User_id})
         let deletingCart=await Carts.findOne({Product_id:Product_id})
         let success=await deletingCart.deleteOne()
         if(success)
         {
             res.status(200).json({messages:"order deleted succesfully"})
         }
 
 
     },
// ==========================cart operations ends================================= 
}





