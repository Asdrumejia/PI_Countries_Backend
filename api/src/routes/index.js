const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountries = require("./get/routesGetCountries");
const getActivities = require("./get/routesGetActivitys"); 
const postActivity = require("./post/postActivity");
const putActivity = require("./put/routesPutActivity");
const deleteActivity = require("./delete/routesDeleteActivity"); 


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", getCountries);

router.use("/activities", getActivities);

router.use("/activiti", postActivity);

router.use("/activiti", putActivity);

router.use("/activiti", deleteActivity);







module.exports = router;
