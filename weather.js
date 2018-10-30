class Weather {
  constructor(zip) {
    this.apiKey = "4d2996605aacb6960a95f294a02ed197";
    this.zip = zip;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();

    return responseData;
    // return responseData.main.temp;
  }

  // Change weather location
  changeLocation(zip) {
    this.zip = zip;
  }
}