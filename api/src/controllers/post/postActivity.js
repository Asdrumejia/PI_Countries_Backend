const { Country, Activity  } = require("../../db");

const postActivity = async(name, difficulty, duration, season, countries) => {
     if(!name || !difficulty || !duration || !season || !countries){
         throw('Missing data to create activity')
     }else {
        const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season
     })

        let countriesDb = await Country.findAll({
            where: {name: countries}
        })

        await newActivity.addCountry(countriesDb);
        return newActivity;

     }
};



module.exports = {
    postActivity
}