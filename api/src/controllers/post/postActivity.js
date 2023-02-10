const { Country, Activity  } = require("../../db");


const postActivity = async(name, difficulty, duration, season, countries) => {
        const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season
       });

        let countriesDb = await Country.findAll({
        where: { name: countries }
        });

        await newActivity.addCountry(countriesDb);
        return newActivity;    
   };


module.exports = {
    postActivity
}