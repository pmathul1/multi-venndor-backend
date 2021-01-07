const express=require("express")
const router=express.Router()
const adminController=require('../Admin/Admincontroller')

// =====================Homepage Routes==============================
/*crud operation in main category*/
router.get('/vendor/category',adminController.getMainCategory)
/* crud operation in homecategory Deals*/
router.get('/vendor/deals',adminController.getDeals)
 /* crud operation in homecategory ImageCarousel*/
 router.get('/vendor/homeimgcarousel',adminController.getImageCarousel)

// =====================Restaurant Routes==================================
 /* crud operation in Restaurant ImageCarousel*/
 router.get('/vendor/restimgcarousel',adminController.getRestImageCarousel)
 /* crud operation in Restaurant Shop*/
 router.get('/vendor/shop',adminController.getShop)
 /* crud operation in Restaurant Product*/
 router.get('/vendor/products',adminController.getProducts)


// =====================Grocery Routes==================================
/* crud operation in Grocery Product*/
router.get('/vendor/groceryproducts',adminController.getGroceryProducts)

// =====================Profile Routes==================================
/* crud operation in order*/
router.get('/vendor/orders',adminController.getOrders)
/* crud operation in Profile*/
router.get('/vendor/profiles',adminController.getProfiles)


// =====================Cart Screen Routes==================================
/* crud operation in cart*/
router.get('/vendor/cart',adminController.getCart)
router.get('/vendor/cart',adminController.getUserCart)

module.exports=router;