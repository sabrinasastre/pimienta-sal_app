// Módulos
const express = require('express');
const app = express();
const path = require("path")
// Acá falta uno... 😇
const  rutas = require ("./routes/mainRouter")

// Configuración
app.use(express.static(path.join(__dirname, '../public')));


// Acá falta el template engine

app.set('views', path.join(__dirname, './views')) 
app.set('view engine', 'ejs')


// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS

/** app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
}); **/

app.use('/', rutas)
app.use('/detalles', rutas)

app.get('*', (req, res) => {
    res.send('not found')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})