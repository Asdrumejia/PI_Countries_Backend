const axios = require("axios");
const { Country, Activity  } = require("../../db");


const getCountries = async () => {
  const saveDb = await Country.findAll({
    include: [
      { model: Activity, attributes: ["name", "difficulty", "duration", "season"], through: { attributes: [] } },
    ],
  });
  if(!saveDb.length){
    const API = await axios.get("https://restcountries.com/v3/all");
    const apiCountries = await API.data.map((ct) => {
      return {
        id: ct.cca3,
        name: ct.name.common,
        flagImg: ct.flags[1],
        continent: ct.continents.toString(),
        capital: ct.capital?.toString(),
        subregion: ct.subregion,
        area: ct.area,
        population: ct.population,
      };
    });
    const countriesCreate = await Country.bulkCreate(apiCountries);
    return countriesCreate;
  } if (saveDb?.length) {
    return saveDb;
  }
};


const getCountryId = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase());
     return filterCountry;
};


module.exports = {
   getCountries,
   getCountryId
}



