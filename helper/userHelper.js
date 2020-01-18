const db = require('./../data/dbConfig');
const bcrypt = require('bcryptjs');

function findUsers(){
    return db('users')
}

function findUserById(id){
    return db('users').where('id', id).first()
}
function findUserByUsername(username){
    return db('users').where('username', username).first();
}
async function addUser(user){
   const hash = await bcrypt.hash(user.password, 10);
   user.password = hash;
   console.log(hash)
    const [id] = await db('users').insert(user);
    return findUserById(id)
}

module.exports = {
    findUsers,
    findUserById,
    addUser,
    findUserByUsername
}