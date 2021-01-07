const express=require('express')
const router=express.Router()
const Controller=require('./Admincontroller')


// =====================Homepage Routes==============================

    /*crud operation in main category*/
router.get('/admin/category',Controller.getMainCategory)
router.post('/admin/add-category',Controller.addMainCategory)
router.put('/admin/edit-category/:id',Controller.editMainCategory)
router.delete('/admin/delete-category/:id',Controller.deleteMainCategory)

    /* crud operation in homecategory Deals*/
 router.get('/admin/deals',Controller.getDeals)
 router.post('/admin/add-deal',Controller.addDeal)
 router.put('/admin/edit-deal/:id',Controller.editDeal)
 router.delete('/admin/delete-deal/:id',Controller.deleteDeal)

    /* crud operation in homecategory ImageCarousel*/
 router.get('/admin/homeimgcarousel',Controller.getImageCarousel)
 router.post('/admin/add-homeimgcarousel',Controller.addImage)
 router.put('/admin/edit-homeimgcarousel/:id',Controller.editImage)
 router.delete('/admin/delete-homeimgcarousel/:id',Controller.deleteImage)
 // =====================Homepage Routes ends ==============================


 // =====================Restaurant Routes==================================

     /* crud operation in Restaurant ImageCarousel*/
     router.get('/admin/restimgcarousel',Controller.getRestImageCarousel)
     router.post('/admin/add-restimgcarousel',Controller.addResImage)
     router.put('/admin/edit-restimgcarousel/:id',Controller.editResImage)
     router.delete('/admin/delete-restimgcarousel/:id',Controller.deleteResImage)

     /* crud operation in Restaurant Shop*/
     router.get('/admin/shop',Controller.getShop)
     router.post('/admin/add-shop',Controller.addShop)
     router.put('/admin/edit-shop/:id',Controller.editShop)
     router.delete('/admin/delete-shop/:id',Controller.deleteShop)

     /* crud operation in Restaurant Product*/
     router.get('/admin/products',Controller.getProducts)
     router.post('/admin/add-product/:id',Controller.addProduct)
     router.put('/admin/edit-product/:id',Controller.editProduct)
     router.delete('/admin/delete-product/:id',Controller.deleteProduct)
 // =====================Restaurant Routes ends ============================


 
 // =====================Grocery Routes==================================

     /* crud operation in Grocery Product*/
     router.get('/admin/groceryproducts',Controller.getGroceryProducts)
     router.post('/admin/add-groceryproduct/:id',Controller.addGroceryProduct)
     router.put('/admin/edit-groceryproduct/:id',Controller.editGroceryProduct)
     router.delete('/admin/delete-groceryproduct/:id',Controller.deleteGroceryProduct)
 // =====================Grocery Routes ends ============================

  // =====================Profile Routes==================================

     /* crud operation in order*/
     router.get('/admin/orders',Controller.getOrders)
     router.post('/admin/order/:id',Controller.addOrder)
     router.put('/admin/edit-order/:id',Controller.editOrder)
     router.delete('/admin/delete-order/:id',Controller.deleteOrder)

     /* crud operation in Profile*/
     router.get('/admin/profiles',Controller.getProfiles)
     router.post('/admin/add-profile',Controller.addProfile)
     router.put('/admin/edit-profile/:id',Controller.editProfile)
     router.delete('/admin/delete-profile/:id',Controller.deleteProfile)
 // =====================Profile Routes ends ============================

 // =====================Cart Screen Routes==================================
     /* crud operation in cart*/
    router.get('/admin/cart',Controller.getCart)
    router.get('/admin/cart',Controller.getUserCart)
    router.post('/admin/addto-cart',Controller.addCart)
    router.put('/admin/edit-cart/:id',Controller.editCart)
    router.delete('/admin/delete-cart/:id',Controller.deleteCart)

    /* crud operation in delivery*/
    router.get('/admin/delivery',Controller.getProfiles)
    router.post('/admin/add-deliverycharge',Controller.addProfile)
    router.put('/admin/edit-deliverycharge/:id',Controller.editProfile)
    router.delete('/admin/delete-deliverycharge/:id',Controller.deleteProfile)

    /* crud operation in tax-rate*/
    router.get('/admin/tax',Controller.getProfiles)
    router.post('/admin/add-tax',Controller.addProfile)
    router.put('/admin/edit-tax/:id',Controller.editProfile)
    router.delete('/admin/delete-tax/:id',Controller.deleteProfile)
  // =====================Cart Screen Routes ends ============================


module.exports=router