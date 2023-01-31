const { Router } = require ("express");
const { postActivity } = require("../../controllers/post/postActivity");



const router = Router();


router.post('/', async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
    try {
        const newAvtivity = await postActivity(name, difficulty, duration, season, countries);
        res.status(200).send(newAvtivity);
    } catch (error) {
        res.status(404).send(error.message);
    }
});



module.exports = router;