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
var cityListEl = document.getElementById("city-list");
//Day One//
var displayOneTempEl = document.getElementById("dayonetemp");
var displayOneHumidEl = document.getElementById("dayonehumid");
var displayOneDateEl= document.getElementById("dayonedate");
var displayOneIcon = document.getElementById("dayoneicon");

//Day Two//
var displayTwoTempEl = document.getElementById("daytwotemp");
var displayTwoHumidEl = document.getElementById("daytwohumid");
var displayTwoDateEl= document.getElementById("daytwodate");
var displayTwoIcon = document.getElementById("daytwoicon");
//Day Three//
var displayThreeTempEl = document.getElementById("daythreetemp");
var displayThreeHumidEl = document.getElementById("daythreehumid");
var displayThreeDateEl= document.getElementById("daythreedate");
var displayThreeIcon = document.getElementById("daythreeicon");
//Day Four//
var displayFourTempEl = document.getElementById("dayfourtemp");
var displayFourHumidEl = document.getElementById("dayfourhumid");
var displayFourDateEl= document.getElementById("dayfourdate");
var displayFourIcon = document.getElementById("dayfouricon");
//Day Five//
var displayFiveTempEl = document.getElementById("dayfivetemp");
var displayFiveHumidEl = document.getElementById("dayfivehumid");
var displayFiveDateEl= document.getElementById("dayfivedate");
var displayFiveIcon = document.getElementById("dayfiveicon");

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

    localStorage.setItem("storedcity", cityName);
    var storedcity = localStorage.getItem("storedcity");
    renderCityName(storedcity);
       
})

//var cityList = [];

function renderCityName(city){
   

    //console.log(city.length);
    
    for (var i = 0; i < city.length; i++) {
        
        console.log("loop");
        var showCity = city[i];
        console.log(showCity);
        var li = document.createElement("li");
        li.textContent = showCity;
        li.setAttribute("data-index", i);
        cityListEl.appendChild(li);
      }
}


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
                displayOneTempEl.innerHTML= "Temperature : " + data.list[1].main.temp + "°F" ;
                displayOneHumidEl.innerHTML= "Humidity : " + data.list[1].main.humidity + "%";
                var dayOneIcon = data.list[1].weather[0].icon;
                var imgOne =document.createElement("img");
                imgOne.src = "http://openweathermap.org/img/wn/" +dayOneIcon+".png";
                displayOneIcon.appendChild(imgOne);

                //Day Two//
                var dayTwo = moment().add(2, "days").format("M/D/YYYY");
                displayTwoDateEl.innerHTML= dayTwo;               
                displayTwoTempEl.innerHTML= "Temperature : " + data.list[8].main.temp + "°F";
                displayTwoHumidEl.innerHTML= "Humidity : " + data.list[8].main.humidity + "%";
                var dayTwoIcon = data.list[8].weather[0].icon;
                var imgTwo =document.createElement("img");
                imgTwo.src = "http://openweathermap.org/img/wn/" +dayTwoIcon+".png";
                displayTwoIcon.appendChild(imgTwo);
                //Day Three//
                var dayThree = moment().add(3, "days").format("M/D/YYYY");
                displayThreeDateEl.innerHTML= dayThree;
                displayThreeTempEl.innerHTML= "Temperature : " + data.list[16].main.temp + "°F";
                displayThreeHumidEl.innerHTML= "Humidity : " + data.list[16].main.humidity + "%";
                var dayThreeIcon = data.list[16].weather[0].icon;
                var imgThree =document.createElement("img");
                imgThree.src = "http://openweathermap.org/img/wn/" +dayThreeIcon+".png";
                displayThreeIcon.appendChild(imgThree);
                //Day Four//
                var dayFour = moment().add(4, "days").format("M/D/YYYY");
                displayFourDateEl.innerHTML= dayFour;
                displayFourTempEl.innerHTML= "Temperature : " + data.list[24].main.temp + "°F";
                displayFourHumidEl.innerHTML= "Humidity : " + data.list[24].main.humidity + "%";
                var dayFourIcon = data.list[24].weather[0].icon;
                var imgFour =document.createElement("img");
                imgFour.src = "http://openweathermap.org/img/wn/" +dayFourIcon+".png";
                displayFourIcon.appendChild(imgFour);
                //Day Five//
                var dayFive = moment().add(5, "days").format("M/D/YYYY");
                displayFiveDateEl.innerHTML= dayFive;
                displayFiveTempEl.innerHTML= "Temperature : " + data.list[24].main.temp + "°F";
                displayFiveHumidEl.innerHTML= "Humidity : " + data.list[24].main.humidity + "%";    
                var dayFiveIcon = data.list[1].weather[0].icon;
                var imgFive =document.createElement("img");
                imgFive.src = "http://openweathermap.org/img/wn/" +dayFiveIcon+".png";
                displayFiveIcon.appendChild(imgFive);
            })
        }

        localStorage.setItem("storedcity", citySearchEl);
        var storedcity = localStorage.getItem("storedcity");
        console.log(storedcity);

        //$("#hour-9").val(localStorage.getItem("9AM"));.value

       //citySearchEl.val(localStorage.getItem('cityName'));


        
    // var cityList =[];

    // function showCity(){

    //     console.log("Hello");
    //     // cityList.innerHTML = " ";
    //     //console.log(cityList);
    //     var cityList= JSON.parse(localStorage.getItem('cityBox'));
    //     console.log(cityList);

    //     for (var i = 0; i < cityList.length; i++) {
    //         console.log(i);
    //         var cityNameList = cityList[i];
    //         console.log(cityNameList);
    //         var li =document.createElement("li");
    //         li.textContent=cityNameList;
    //         li.setAttribute("cityList",i);
    //         var button = document.createElement("button");
    //         li.appendChild(button);
    //         cityList.appendChild(li);
    //     }
    // }

    // function init(){
    //     var storedCityList = JSON.parse(localStorage.getItem("citlist"));
    //     if(storedCityList!==null){
    //         cityList = storedCityList;
    //     }
    //     showCity();
    // }

    // function storeCityList() {
    //     localStorage.setItem("CityList",JSON.stringify(cityList));
    // }

    // init();



    
        


            
        

        



