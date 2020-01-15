const express = require('express');

const router = express.Router();
const {
    findUsers,
    addUser
    } = require('./../helper/userHelper');


router.post('/register', async (req, res, next) => {
    const {username, password } = req.body;
    if(!username || !password){
        res.json({
            message: 'username or password is undefined'
        })
    } else{
        const user = await addUser({username, password });
        res.status(200).json({
            message:'Post successful',
            user: user
        })
    }
})

router.get('/users', async (req, res, next)=>{
    const users = await findUsers();
    res.status(200).json({
        message: 'Successful',
        users: users
    })
})



module.exports = router;