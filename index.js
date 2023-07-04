const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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

app.get('/login/:nombre', (req,res)=>{
    res.send(`Hola, bienvenido/a, ${req.params.nombre}. Inicie sesión.`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})