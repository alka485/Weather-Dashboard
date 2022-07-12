//console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var displayCityEl = document.getElementById("city");
var displayTempEl = document.getElementById("temp");
var displayHumidEl = document.getElementById("humidity");
function getApi(city){
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b9f6c58391da8f005bd41c6735238193";
    console.log(city);
    console.log(requestUrl);
    //console.log(requestUrl_name);
    //displayCityEl.innerHTML=requestUrl_main;
    //console.log(displayCityEl);
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log(data.name);
    displayCityEl.innerHTML=data.name;
    console.log(data.main.temp);
    displayTempEl.innerHTML=data.main.temp;
    displayHumidEl.innerHTML=data.main.humidity;

    })
}

searchButtonEl.addEventListener("click",function(){
    //console.log("search");
    var cityName = citySearchEl.value;
    //console.log(cityName);
    getApi(cityName);
})