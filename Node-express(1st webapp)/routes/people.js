const express = require('express')
const router = express.Router()
const logger = require('../logger')
const {getPeople,postPeople,putPeople,deletePeople} = require('../controller/people')

router.get('/about',logger,(req,res)=>{
    res.send("<h1>Welcome to about page")
})

router.get('/',getPeople)

router.post('/',postPeople)

router.put('/:id',putPeople)

router.delete('/:id',deletePeople)

module.exports=router