const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, "public/")
const home = path.join(__dirname, 'views/home.html')
const login = path.join(__dirname, 'views/login.html') 
const register = path.join(__dirname, 'views/register.html')
// http routes
const httpRaiz = '/'
const httpHome = '/home'
const httpFlexBox = 'flexbox'
const httpRegister= "/register"
const httpLogin = "/login"
const httpHomeLogin = "/homelogin"
// html

const flexboxHtml = "flexbox.html"

const LoginHtml = "login.html"




// define como static file path a public
app.use( express.static(__dirname + '/public/'))

app.get(httpRaiz,(req, res) => {
    res.sendFile(home)
})

app.get(httpHome,(req, res) => {
    res.sendFile(home)
})

app.get(httpFlexBox, (req, res) =>{
    res.sendFile(path.join(views, flexboxHtml))
})

app.get(httpRegister, (req, res) =>{
    res.sendFile(register)
})

app.get(httpHomeLogin, (req, res) =>{
    res.sendFile(login)
})

app.post(httpLogin, (req, res) =>{
    res.sendFile(login)
})

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

