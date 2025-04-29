const apiKey = "b9451a8d24cd881c4e570a0d711f2e9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=b9451a8d24cd881c4e570a0d711f2e9c&units=metric

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        var data = await response.json();
        console.log(data); //just for our ref.
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        //for updating the mainimg
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

//code for searchbutton to be clicked, after pressing keyboard ki "Enter" key...

const input = document.getElementById("search-input");
const button = document.getElementById("search-btn");   

input.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        // e.preventDefault();  //for preventing form submission or refresh- but isnt required here
        button.click();
    }
})
