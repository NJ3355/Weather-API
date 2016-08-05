//Weather API

      var icons = new Skycons(),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;
      for(i = list.length; i--; )
        icons.set(list[i], list[i]);
      icons.play();

var weather;

var text = document.getElementById("zipcode");
var button = document.getElementById("submit");
button.addEventListener("click", gettingJSON);

var api = 'https://api.forecast.io/forecast/';
var apiKey = '1e64d3848db562fa6695bffbc65fc1ef/';
var zipcode; 
var urlGeo, urlFore;
var lon = 0;
var lat = 0;

//Geocoding API

/*var geoAPI = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
var geoKey = 'AIzaSyBngpUQb0BvvotBHJ3eLG7ldtnXxlsapaY';
var geoURL = geoAPI + geoKey;*/




   
function gettingJSON(){
    zipcode = text.value;
    
    

  urlGeo = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode;

 $.ajax({
     url: urlGeo,
     dataType: "json",
     success: function(data){
      lat = data.results[0].geometry.bounds.northeast.lat;
      lon = data.results[0].geometry.bounds.northeast.lng;


           urlFore = api + apiKey + lat + ',' + lon;

           $.ajax({
                url: urlFore,
                dataType: "jsonp",
                success: function(data2){
                  
                var image = data2.currently.icon;
                var temp = data2.currently.temperature;
                var summary = data2.currently.summary;

                  
                }
              });

        
      }
    });




  
    

     /* $.getJSON(url, function(json){
console.log(json);
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

          $('#credentials').hide();*/
          
       //});

 }








