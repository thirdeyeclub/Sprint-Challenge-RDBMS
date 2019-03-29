const db = require('./config00');


module.exports = {
insertAction,
getActions,
getAction
}

function insertAction(action) {
return db('actions')
    .insert(action)
}

function getActions() {
return db('actions')
}

function getAction(id) {
return db('actions').where('act_id', '=', id)
}