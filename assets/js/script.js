

console.log("hello");
var citySearchEl = document.getElementById("cityBox");
var searchButtonEl = document.getElementById ("search");
var cityName = citySearchEl.value;
console.log(citySearchEl);
console.log(cityName);

function getApi(){
    //var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
}

searchButtonEl.addEventListener("click",function(){
    console.log("search");
})