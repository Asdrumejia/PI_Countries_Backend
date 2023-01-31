const axios = require("axios");
const { Country, Activity  } = require("../../db");


// const getCountries = async () => {
//   const apiInfo = await axios.get("https://restcountries.com/v3/all");
//   const data = await apiInfo.data.map((el) => {
//     return {
//       id: el.cca3,
//       name: el.name.common,
//       continent: el.region,
//       capital: el.capital ? el.capital[0] : "x",
//       subregion: el.subregion ? el.subregion : "x",
//       area: el.area,
//       population: el.population,
//       flags: el.flags[1],
//     };
//   });
 
// data.forEach((country) => {
//   Country.findOrCreate({
//     where: {
//       id: country.id,
//       name: country.name,
//       continent: country.continent,
//       capital: country.capital,
//       subregion: country.subregion,
//       area: country.area,
//       population: country.population,
//       flags: country.flags,
//     },
//     default:{

//          }
//    });
//   });
// };

// const getAllCountriesDb = async () => {
//   const allCountries = await Country.findAll({
//     include: [
//       {
//         model: Activity,
//         attributes: ["name", "difficulty", "duration", "season"],
//       },
//     ],
//   });
//   return allCountries;
// };

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
        capital: el.capital ? el.capital[0] : "x",
        subregion: el.subregion ? el.subregion : "x",
        area: el.area,
        population: el.population,
        flags: el.flags[1],
      };
    });
    const countriesCreate = await Country.bulkCreate(data);
    return countriesCreate;
  }if (saveDb.length) {
    return saveDb;
  };
};


const getCountryId = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase());
     return filterCountry;
};


module.exports = {
   getAllCountriesDb,
   getCountryId
}



