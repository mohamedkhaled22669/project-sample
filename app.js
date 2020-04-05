const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'))
app.use(express.static('node_modules'))
app.set('view engine', 'ejs');


app.get('/', (req,res) => res.send("hellp"))


const user = require('./routes/login-register')
app.use('/login-and-register',user)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))