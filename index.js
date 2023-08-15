const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

var comentarios = []

app.get('/', (req, res) => {
    console.log('entró a /')
    res.send('Hola, mundo!')
})

app.get('/comentarios', (req, res) => {
    console.log('entró a /')
    res.render("comment",{comments: comentarios})
})

app.post('/crear',(req,res)=>{
    console.log(req.body);

    res.send(req.body); 
});

app.post('/comentario',(req,res)=>{
    console.log(req.body);
    comentarios.push({nombre: req.body.nombre,comentario: req.body.comentario})
    res.json({"comentario":{nombre: req.body.nombre,comentario: req.body.comentario}})
});



app.get('/productos', (req,res)=>{
    res.json([
        {
            nombre: 'teclado',
            precio: 6800
        },
        {
            nombre: 'remera',
            precio: 7500
        }
    ])
})

app.get('/bruno', (req,res)=>{
    res.send('Hola, mi nombre es Bruno')
})

app.get('/fatima', (req,res)=>{
    res.send('hola soy fatima')
})

app.get('/Ariel', (req,res)=>{
    res.send('Perro')
})

app.get('/suma', (req, res) => {
    console.log('Entró a la función SUMA!');
    let miVariable = parseInt(req.query.pepito)
    let otraVariable = parseInt(req.query.pepe)
    console.log('la variable es:', miVariable);
    console.log('otra variable es:', otraVariable);

    let resultado = miVariable + otraVariable;

    res.send(`El resultado es: ${resultado}!!!`)
})

app.get('/login/:nombre', (req,res)=>{
    res.render("test",{nombre: req.params.nombre})
    // res.send(`Hola, bienvenido/a, ${req.params.nombre}. Inicie sesión.`)
})

//////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
