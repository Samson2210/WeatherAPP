import API_KEY from "./apiKey";
const getWeather = async (city) => {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (response.status == 200) {
            temp.innerHTML = result.temp
            humidity.innerHTML = result.humidity
            wind_speed.innerHTML = result.wind_speed
            city = city.charAt(0).toUpperCase() + city.slice(1);
            cityName.innerHTML = city;
        }
        else {
            alert("No region found, please enter some other place");
        }
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!city.value) {
        alert("Please enter the city")
    }
    else {
        getWeather(city.value);
        search.reset();
    }
})

getWeather('Delhi')