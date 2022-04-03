const { Manager } = require('../models/manager.models');

module.exports.index =(request, response) => {
    response.json({
        message: "Hello Manager"
    })
}

module.exports.createManager = (request, response) =>{
    const {title, price, description} = request.body;
    Manager.create({
        title,
        price,
        description
    })
    .then(managercreate => response.json(managercreate))
    .catch(err => response.json(err))
}

module.exports.getAllManagers = (request, response) => {
    Manager.find({})
    .then(managers => response.json(managers))
    .catch(err => response.json(err))
}

module.exports.getOneManager = (request, response) => {
    Manager.findOne({_id:request.params.id})
    .then(manager => response.json(manager))
    .catch(err => response.json(err))
}

module.exports.updateManager =(request, response) => {
    Manager.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedmanager => response.json(updatedmanager))
        .catch(err => response.json(err))
}
module.exports.deleteManager =(request, response) => {
    Manager.deleteOne({_id:request.params.id})
        .then(deletedmanager => response.json(deletedmanager))
        .catch(err => response.json(err))
}