console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var displayCityEl = document.getElementById("city");
function getApi(city){
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b9f6c58391da8f005bd41c6735238193";
    console.log(city);
    console.log(requestUrl);
    displayCityEl.value=requestUrl.html_main_name;
    console.log(displayCityEl);
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

searchButtonEl.addEventListener("click",function(){
    console.log("search");
    var cityName = citySearchEl.value;
    console.log(cityName);
    getApi(cityName);
})