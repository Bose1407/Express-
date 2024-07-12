const express = require('express')
const app = express()

const router = require('./routes/people')

app.use('/api/person',router)
app.use(express.static('./z'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.listen(5000,()=>{
    console.log("The server is running at port 5000")
})