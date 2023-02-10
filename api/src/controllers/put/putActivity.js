const { Activity } = require("../../db");


const putActivity = async (id, name, difficulty, duration, season, countries) => {
    const activityDb = await Activity.findByPk(id);
 
   activityDb?.update({
    name: name, 
    difficulty: difficulty, 
    duration: duration, 
    season: season, 
    countries: countries
   
    }) 
   return activityDb
   
 };
 
 
 module.exports = {
    putActivity
 }