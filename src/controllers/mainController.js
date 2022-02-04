// Acá nos falta nuestra fuente de datos
const path = require("path")


// Acá nos falta un objeto literal con las acciones para cada ruta

const platos = [
    {
        id: 1,
        nombre: "Carpacio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "U$S 65.50",
        imagen: "/images/menu.jpg"
    },

    {
        id: 2,
        nombre: "Risotto",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00",
        imagen: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        nombre: "Mousse",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50",
        imagen: "/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: 4,
        nombre: "Espárragos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico ",
        precio: "U$S 37.50",
        imagen: "/images/esparragos.png"
    },
]



const main = {
    index: (req,res) => {
        // res.sendFile(path.resolve(__dirname, '../views/index.html'));
        res.render('index', {dato: "soy un dato", platosEnviados: platos})
    },
    mostrarDetalle: (req,res) => {
        const parametro = req.params.idPlato
        const platoParaEnviar = platos.find( plato => plato.id == parametro)
        res.render('detalleMenu', {plato: platoParaEnviar})
    }
}



// Acá exportamos el resultado
module.exports = main