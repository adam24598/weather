
const axios = require('axios')
const requestOne = axios.get("https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=439d4b804bc8187953eb36d2a8c26a02");
const requestTwo = axios.get("https://samples.openweathermap.org/data/2.5/weather?q=PAris,fr&appid=439d4b804bc8187953eb36d2a8c26a02");
axios
  .all([requestOne, requestTwo])
  .then(axios.spread((firstResponse, secondResponse) => {
      console.log(firstResponse.data,secondResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });