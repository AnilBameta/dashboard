const express = require('express');
const router = express.Router();
const data = require('../dummyData');
const UserRows = require('../dummyData2')

router.get('/users',(req,res) =>{
    res.json({
        data
    })
})

router.get('/userRows',(req,res) => {
    res.json({
        UserRows
    })
})
module.exports = router;