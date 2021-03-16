const express = require('express')
const router = express.Router()
const Product = require('../model/user')


router.post('/login', function(req, res){
  // Product.find({},function(err, foundProducts){
  //   return res.json(foundProducts)
  // })
})

router.post('/register', function(req, res){
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  // Product.findById(productId,function(err, foundProduct){
  //   if(err){
  //     return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
  //   }
  //   return res.json(foundProduct)
  return res.json({username, email , password})
  // })
})

module.exports = router
