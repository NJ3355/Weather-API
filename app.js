var weather;

var text = document.getElementById("zipcode");
var button = document.getElementById("submit");
button.addEventListener("click", gettingJSON);

var api = 'http://api.openweathermap.org/data/2.5/weather?';
var apiKey = '&appid=5ffa7f2c54d5a1333c53aa49a830fa30';
var zipcode; 
var units = '&units=imperial'
var url;



   
function gettingJSON(){
    zipcode = 'zip=' + text.value + ',us';
    url = api + zipcode + apiKey + units;
    console.log(url);

      $.getJSON(url, function(json){
          weather = json;
          console.log(weather.main.temp);
          
       });

 }





