const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})



module.exports = mongoose.model('thisUpload', uploadSchema)