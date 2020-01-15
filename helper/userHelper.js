const db = require('./../data/dbConfig');

function findUsers(){
    return db('users')
}

function findUserById(id){
    return db('users').where('id', id).first()
}
async function addUser(user){
    const [id] = await db('users').insert(user);
    return findUserById(id)
}

module.exports = {
    findUsers,
    findUserById,
    addUser
}