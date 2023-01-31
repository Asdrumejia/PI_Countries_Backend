const { Router } = require('express');
const { deleteActivity } = require('../../controllers/delete/deleteActivity');


const router = Router();


router.delete('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const deleted = await deleteActivity(id)
     res.status(200).send("Activity successfully deleted")
    } catch (error) {
        res.status(404).send(error.message)
    }
});


module.exports = router;