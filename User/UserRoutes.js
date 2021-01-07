const express=require('express')
const router=express.Router()
const Controller=require('./UserController')

router.get('/user/category',Controller.getMainCategory) //

module.exports=router