//AS A traveler
//I WANT to see the weather outlook for multiple cities
//SO THAT I can plan a trip accordingly

//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={88d08a61960348ae04eeaf8d62dc284c}
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={88d08a61960348ae04eeaf8d62dc284c}



//GIVEN a weather dashboard with form inputs

//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history

//pseudo code
//User enter term in search bar
//User clicks search button
//User is presented with current and future conditions for that city - 5 day forecast
//City is added to search history - local storage


//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

//pseudo code
//API call to openweather and returns the following
//User is presented with the city name
//User is presented with the date
//User is presented with an icon representation of weather conditions
//User is presented with the temperature
//User is presented with the humidity
//User is presented with the wind speed



//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//pseudo code
//API call to openweather and returns the following
//User is presented with the date
//User is presented with an icon representation of weather conditions
//User is presented with the temperature
//User is presented with the humidity
//User is presented with the wind speed
//For the next 5 days


//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city

//pseudo code
//User clicks on city in search history
//User is presented with current and future conditions for that city