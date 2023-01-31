const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetCountries = require('./get/routesGetCountries')
const routesGetActivities = require('./get/routesGetActivitys') 
const routesPostActivity = require('./post/postActivity')
const routersPutActivity = require('./put/routesPutActivity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', routesGetCountries);

router.use('/activities', routesGetActivities);

router.use('/activiti', routesPostActivity);

router.use('/activiti', routersPutActivity);







module.exports = router;
