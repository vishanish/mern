const mongoose = require ('mongoose');

const ManagerSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true})

module.exports.Manager = mongoose.model("Manager", ManagerSchema);