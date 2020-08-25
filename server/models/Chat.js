const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    id: Number,
    name: String,
    message: String
})

module.exports = mongoose.model('Chat', chatSchema)