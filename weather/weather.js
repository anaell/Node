require("dotenv").config();
const axios = require("axios");

const city = process.argv[2];

if (!city) {
  console.error("Please provide a city name");
  process.exit(1);
}

const apikey = process.env.OPENWEATHER_API_KEY;

const url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

axios
  .get(url)
  .then((res) => {
    const weather = res.data;
    console.log(`${weather.main.temp}C in ${weather.name}`);
  })
  .catch((err) => {
    console.log(
      `Could not fetch weather: ${err.response?.data?.message || err.message}`
    );
  });
