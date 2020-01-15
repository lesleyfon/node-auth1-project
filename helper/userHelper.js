const db = require('./../data/dbConfig');

function findUsers(){
    return db('users')
}


module.exports = {
    findUsers
}