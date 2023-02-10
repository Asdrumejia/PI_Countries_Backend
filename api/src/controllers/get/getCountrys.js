const axios = require("axios");
const { Country, Activity  } = require("../../db");


const getAllCountriesDb = async () => {
  const saveDb = await Country.findAll({
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
      },
    ],
  });
  
  if (!saveDb.length) {
    const apiInfo = await axios.get("https://restcountries.com/v3/all");
    const data = await apiInfo.data.map((el) => {
      return {
        id: el.cca3,
        name: el.name.common,
        continent: el.region,
        capital: el.capital ? el.capital[0] : "This country has no capital",
        subregion: el.subregion ? el.subregion : "This country has no subregion",
        area: el.area,
        population: el.population,
        flags: el.flags[1],
      };
    });
    const countriesCreate = await Country.bulkCreate(data);
    return countriesCreate;
  }if (saveDb.length) {
    return saveDb;
  }
};


const getCountryById = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase());
     return filterCountry;
};


module.exports = {
   getAllCountriesDb,
   getCountryById
}



