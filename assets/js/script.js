//console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var displayCityEl = document.getElementById("city");
var displayTempEl = document.getElementById("temp");
var displayHumidEl = document.getElementById("humidity");
var displayWindEl = document.getElementById("speed");
var displayDescEl = document.getElementById("description");
var displayIconEl = document.getElementById("icon");
var displayOneTempEl = document.getElementById("dayonetemp");
var displayOneHumidEl = document.getElementById("dayonehumid");
var displayOneDateEl= document.getElementById("dayonedate");


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

    // var dayOne = moment().format("MM/DD/YYYY");
    //     var dayOneTempEl = data.main.temp;
    //     console.log(dayOneTempEl);
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
                var dayOne = moment().format("MM/DD/YYYY");
                displayOneDateEl.innerHTML= dayOne;
                displayOneTempEl.innerHTML= "Temperature : " + data.list[0].main.temp;
                displayOneHumidEl.innerHTML= "Humidity : " + data.list[0].main.humidity;
        // console.log(dayOne);
        // var dayOneTempEl = data.list[0].main.temp;
        // console.log(dayOneTempEl);
        // var dayOneHumidEl = data.list[0].main.humidity;
        // console.log(dayOneHumidEl);
        

            })
        }


