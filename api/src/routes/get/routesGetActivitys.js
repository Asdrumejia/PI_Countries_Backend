const { Router } = require("express");
const { getActivities } = require("../../controllers/get/getActivitys");


const router = Router();


router.get("/", async(req, res)=>{
     const {name} = req.query;
     const activities = await getActivities();
  try {
       if(name){
       let activity = activities?.filter(p => p.name?.toLowerCase() === name?.toLowerCase());
        activity?.length !==0 ? res.status(200).send(activity) : res.status(404).send("Activity not found");
      }else{
        res.status(200).send(activities);
      }
  } catch (error) {
      res.status(404).send(error);
  }
});


module.exports = router;
