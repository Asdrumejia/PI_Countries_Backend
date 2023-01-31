const { Router } = require("express");
const { getActivities } = require("../../controllers/get/getActivitys");


const router = Router();


router.get("/", async(req, res)=>{
  try {
      const activities = await getActivities()
      res.status(200).send(activities)
  } catch (error) {
      res.status(404).send(error)
  }
});


module.exports = router;