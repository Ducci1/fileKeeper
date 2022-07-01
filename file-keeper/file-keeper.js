const express = require('express')
const mongoose = require('mongoose')
const routes = require('./Routes')

const app = express()
const PORT = '3000'

app.get('/' , (req , res)=>{
    
})

app.post('/' , (req , res)=>{
    const records = req.params
    console.log(records)
})



app.listen(PORT , ()=>{
    console.log('Server is listening at port 3000')
})

