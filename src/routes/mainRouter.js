// Acá nos falta express y el router
var express = require('express');
var router = express.Router(); 

// Aća nos falta traer el controller
const mainController = require('../controllers/mainController');


// Acá definimos las rutas
router.get('/home', mainController.index); /* GET - home page  */

router.get('/detalles/:idPlato', mainController.mostrarDetalle); /* GET - detalle page  */




// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
