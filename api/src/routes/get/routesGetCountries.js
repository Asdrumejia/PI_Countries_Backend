const {Router} = require('express');
const { getCountries, getCountryId } = require('../../controllers/get/getCountry');


const router = Router();


router.get('/', async (req, res) => {
    const {name} = req.query;
    const countries = await getCountries();
    try {
        if(name){
        let count = countries?.filter(p => p.name?.toLowerCase() === name?.toLowerCase());
            count?.length !==0 ? res.status(200).send(count) : res.status(404).send('Country not found')
        }else{
            res.status(200).send(countries);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});


router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const allCountries = await getCountries();
      const filterCountries = await getCountryId(id, allCountries);
      filterCountries ? res.status(200).send(filterCountries) : res.status(404).send("Country not found by ID");
    } catch (error) {
        res.status(404).send(error.message);
    }
  });

module.exports = router;

