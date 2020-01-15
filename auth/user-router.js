const express = require('express');

const router = express.Router();
const {findUsers} = require('./../helper/userHelper');

router.get('/users', async (req, res, next)=>{
    const users = await findUsers();
    res.status(200).json({
        message: 'Successful',
        users: users
    })
})



module.exports = router;