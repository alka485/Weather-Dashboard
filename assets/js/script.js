//console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var displayCityEl = document.getElementById("city");
var displayTempEl = document.getElementById("temp");
var displayHumidEl = document.getElementById("humidity");
var displayWindEl = document.getElementById("speed");
var displayDescEl = document.getElementById("description");
var displayIconEl = document.getElementById("icon");
var today = moment().format("MM/DD/YY");
var currentDateE1 = document.getElementById("date");
//Day One//
var displayOneTempEl = document.getElementById("dayonetemp");
var displayOneHumidEl = document.getElementById("dayonehumid");
var displayOneDateEl= document.getElementById("dayonedate");
//Day Two//
var displayTwoTempEl = document.getElementById("daytwotemp");
var displayTwoHumidEl = document.getElementById("daytwohumid");
var displayTwoDateEl= document.getElementById("daytwodate");
//Day Three//
var displayThreeTempEl = document.getElementById("daythreetemp");
var displayThreeHumidEl = document.getElementById("daythreehumid");
var displayThreeDateEl= document.getElementById("daythreedate");
//Day Four//
var displayFourTempEl = document.getElementById("dayfourtemp");
var displayFourHumidEl = document.getElementById("dayfourhumid");
var displayFourDateEl= document.getElementById("dayfourdate");
//Day Five//
var displayFiveTempEl = document.getElementById("dayfivetemp");
var displayFiveHumidEl = document.getElementById("dayfivehumid");
var displayFiveDateEl= document.getElementById("dayfivedate");

function getApi(city){
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b9f6c58391da8f005bd41c6735238193";
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    displayCityEl.innerHTML=data.name;
    currentDateE1.innerHTML=today;
    displayDescEl.innerHTML= "Description : " + data.weather[0].description;
    var currentday = data.weather[0].icon;
    var img =document.createElement("img");
    img.src = "http://openweathermap.org/img/wn/" +currentday +".png";
    displayIconEl.appendChild(img);
    displayTempEl.innerHTML= "Temperature : " + data.main.temp + "°F"
    displayHumidEl.innerHTML= "Humidity   : " + data.main.humidity + "%";
    displayWindEl.innerHTML= "Wind_Speed  : " + data.wind.speed + "mph";
    })

    }

searchButtonEl.addEventListener("click",function(){
       var cityName = citySearchEl.value;
       getApi(cityName);
       getforecast(cityName);
})

// adding variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity

        function getforecast(city){
            var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+city+" &units=imperial&appid=b9f6c58391da8f005bd41c6735238193";
            fetch(requestUrl)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);

                //Day One//
                var dayOne = moment().add(1, "days").format("M/D/YYYY");
                displayOneDateEl.innerHTML= dayOne;
                displayOneTempEl.innerHTML= "Temperature : " + data.list[0].main.temp + "°F" ;
                displayOneHumidEl.innerHTML= "Humidity : " + data.list[0].main.humidity + "%";

                //Day Two//
                var dayTwo = moment().add(2, "days").format("M/D/YYYY");
                displayTwoDateEl.innerHTML= dayTwo;
                displayTwoTempEl.innerHTML= "Temperature : " + data.list[8].main.temp + "°F";
                displayTwoHumidEl.innerHTML= "Humidity : " + data.list[8].main.humidity + "%";

                //Day Three//
                var dayThree = moment().add(3, "days").format("M/D/YYYY");
                displayThreeDateEl.innerHTML= dayThree;
                displayThreeTempEl.innerHTML= "Temperature : " + data.list[16].main.temp + "°F";
                displayThreeHumidEl.innerHTML= "Humidity : " + data.list[16].main.humidity + "%";

                //Day Four//
                var dayFour = moment().add(4, "days").format("M/D/YYYY");
                displayFourDateEl.innerHTML= dayFour;
                displayFourTempEl.innerHTML= "Temperature : " + data.list[24].main.temp + "°F";
                displayFourHumidEl.innerHTML= "Humidity : " + data.list[24].main.humidity + "%";

                //Day Five//
                var dayFive = moment().add(5, "days").format("M/D/YYYY");
                displayFiveDateEl.innerHTML= dayFive;
                displayFiveTempEl.innerHTML= "Temperature : " + data.list[24].main.temp + "°F";
                displayFiveHumidEl.innerHTML= "Humidity : " + data.list[24].main.humidity + "%";       
            })
        }


