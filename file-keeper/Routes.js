const express = require('express')
const route = express.Router()
const multer = require('multer')
const thisUpload = require('./Models')
const fs = require('fs')
const path = require('path')
const { send } = require('process')
const upload = multer({dest: './file-keeper/Images'})


route.post('/create', upload.single("image") , async(req , res)=>{
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/Images/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    await thisUpload.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/');
        }
    });

    
    
})

route.post('/read' , (req , res)=>{

})

route.post('/modify' , (req , res)=>{

})

route.post('/delete' , (req , res)=>{

})

module.exports = route;