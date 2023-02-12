const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const home = path.join(__dirname,'./views/home.html');
const form = path.join(__dirname,'./views/form.html');
const login = path.join(__dirname, './views/login.html');
const register = path.join(__dirname, './views/register.html')
const publicPath = path.join(__dirname, './public')

app.use(express.static(publicPath));
// mediante app y el método get enviaré el archivo home cuando el usuario lo requiera

app.get('/', (req, res) =>{
    res.sendFile(home);
});
app.get('/home', (req, res) =>{
    res.sendFile(home);
});
app.post('/home', (req, res)=> {
    res.sendFile(home);
})
app.get('/form', (req, res) => {
    res.sendFile(form);
})
app.get('/login', (req, res) => {
    res.sendFile(login);
})
app.post('/login', (req, res) => {
    res.sendFile(login)
})
app.get('/register', (req, res) => {
    res.sendFile(register);
})



// con el método listen de la constante app pongo a escuchar el puerto 3030
app.listen(port, () => 
    console.log(`Servidor corriendo en puerto ${port}`)
    );



