const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    console.log('entró a /')
    res.send('Hola, mundo!')
  })

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

app.get('/login/:nombre', (req,res)=>{
    res.render("test",{nombre: req.params.nombre})
    // res.send(`Hola, bienvenido/a, ${req.params.nombre}. Inicie sesión.`)
})

//////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})