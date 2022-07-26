const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
const multer = require('multer')
const parser = require('body-parser')
const app = express()


mongoose.connect('mongodb://localhost:27017/uploads')


app.use('/' , express.static(path.join(__dirname,'Frontend')))
app.use(parser.json())
// const storage = multer.diskStorage({
//     destination: (req , file, cb)=>{
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb)=>{
//         console.log(file)
//         cb('null', Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage: storage})

app.get('/' , (req , res)=>{
    res.sendFile(path.join( __dirname ,'Frontend' , 'fileUp.html'))
})

app.use('/routes' , routes)



const PORT = '3000'
app.listen(PORT , ()=>{
    console.log('Server is listening at port 3000')
})

