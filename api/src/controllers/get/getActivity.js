const { Country, Activity } = require("../../db.js");


const getActivities = async () => {
    const data = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: {
            attributes: {
              exclude: ["createdAt", "updateAt"],
            },
          },
        },
      ],
    });
    return data;
  };

  
module.exports = {
    getActivities
 }





