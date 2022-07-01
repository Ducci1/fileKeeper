const mongoose = require('mongoose')
const mongoSchema = new mongoose.Schema({
    record: {} ,
    date: {type: number , default: Date.now}
})