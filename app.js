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
          var image =  weather.weather[0].icon;
          var temp = weather.main.temp;
          var highLow = [weather.main.temp_min, weather.main.temp_max];
          var location = weather.name;
          var description = weather.weather[0].description;

     
     




          $('#title').html(location);
          $('#image').append("<img src=" + 'http://openweathermap.org/img/w/'  + image + '.png' + " />");
          $('#info').prepend("<h2>" + temp + "</h2>")
          for(var i = 0; i < highLow.length; i++){
          	$('#temps').append("<li>" + highLow[i] + "</li>");
          }
          $('#info').append("<p>" + description + "</p>")

          $('#credentials').hide();
          
       });

 }








