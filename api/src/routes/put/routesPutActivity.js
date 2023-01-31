const { Router } = require('express');
const { putActivity } = require('../../controllers/put/putActivity');


const router = Router();


router.put('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const {name, difficulty, duration, season, countries} = req.body 
       if(!name || !difficulty || !duration || !season || !countries){
          res.status(404).send("Missing data to modify this activity")
       }else{
          const activityUpdated = await putActivity(id, name, difficulty, duration, season, countries)
          res.status(200).send("Successfully modified activity")
       }
    } catch (error) {
        res.status(404).send(error.message)
    }
});


module.exports = router;