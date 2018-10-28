// Init weather object
const weather = new Weather(55109);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation(55427);

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
