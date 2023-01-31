const { Activity } = require("../../db");

const deleteActivity = async function (id){
    const deleteDb = await Activity.findByPk(id)
 
    const destroyActivity = deleteDb?.destroy() 
 
    return destroyActivity;
 };
 
 
 module.exports = {
     deleteActivity
 }