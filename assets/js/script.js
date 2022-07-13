//console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var displayCityEl = document.getElementById("city");
var displayTempEl = document.getElementById("temp");
var displayHumidEl = document.getElementById("humidity");
var displayWindEl = document.getElementById("speed");
var displayDescEl = document.getElementById("description");
var displayIconEl = document.getElementById("icon");
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


function getApi(city){
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b9f6c58391da8f005bd41c6735238193";
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    displayCityEl.innerHTML=data.name;
    displayDescEl.innerHTML= "Description : " + data.weather[0].description;
    displayTempEl.innerHTML= "Temperature : " + data.main.temp;
    displayHumidEl.innerHTML= "Humidity   : " + data.main.humidity;
    displayWindEl.innerHTML= "Wind_Speed  : " + data.wind.speed;
    })

    }

searchButtonEl.addEventListener("click",function(){
       var cityName = citySearchEl.value;
       getApi(cityName);
       getforecast(cityName);
})

/* adding variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity 
        Day one*/

        function getforecast(city){
            var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=b9f6c58391da8f005bd41c6735238193";
            fetch(requestUrl)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);

                //Day One//
                var dayOne = moment().add(1, "days").format("M/D/YYYY");
                displayOneDateEl.innerHTML= dayOne;
                displayOneTempEl.innerHTML= "Temperature : " + data.list[0].main.temp;
                displayOneHumidEl.innerHTML= "Humidity : " + data.list[0].main.humidity;

                //Day Two//
                var dayTwo = moment().add(2, "days").format("M/D/YYYY");
                displayTwoDateEl.innerHTML= dayTwo;
                displayTwoTempEl.innerHTML= "Temperature : " + data.list[8].main.temp;
                displayTwoHumidEl.innerHTML= "Humidity : " + data.list[8].main.humidity;

                //Day Three//
                var dayThree = moment().add(3, "days").format("M/D/YYYY");
                displayThreeDateEl.innerHTML= dayThree;
                displayThreeTempEl.innerHTML= "Temperature : " + data.list[16].main.temp;
                displayThreeHumidEl.innerHTML= "Humidity : " + data.list[16].main.humidity;

                //Day Four//
                var dayFour = moment().add(4, "days").format("M/D/YYYY");
                displayFourDateEl.innerHTML= dayFour;
                displayFourTempEl.innerHTML= "Temperature : " + data.list[24].main.temp;
                displayFourHumidEl.innerHTML= "Humidity : " + data.list[24].main.humidity;


                
       
            })
        }


