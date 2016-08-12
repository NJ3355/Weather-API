//Weather API


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
var loc;
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
      loc = data.results[0].formatted_address;

     

           urlFore = api + apiKey + lat + ',' + lon;

           $.ajax({
                url: urlFore,
                dataType: "jsonp",
                success: function(data2){
                  
                var image = data2.currently.icon;
                var temp = data2.currently.temperature;
                var summary = data2.currently.summary;
                var daily = data2.daily.data;
                console.log(daily.length);

                $('#title').html(loc);
                $('#info').append("<p>" + temp + "<span>&deg;</span></p>");
                $('#info').append("<p id='summary'>" + summary + "</p>");
                $('#futureDays').prepend("<h2>5-Day Forecast</h2>");
                $('#futureDays').prepend("<hr/>");

                for(var i = 0; i < daily.length - 3; i++){
                  $('#weekly').append("<li><canvas class=" + daily[i].icon + " width='132' height='132'></canvas></li>");

                }

                $('.img').attr('class', image);
                skyIcons();

                $('#credentials').hide();

                }
              });

        
      }
    });





 }







function skyIcons() {
      var icons = new Skycons(),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;
     /* for(i = list.length; i--; )
        icons.set(list[i], list[i]);
      icons.play();*/
      for(i = list.length; i--; ) {
    var weatherType = list[i],
        elements = document.getElementsByClassName( weatherType );
    for (e = elements.length; e--;){
        icons.set( elements[e], weatherType );
        icons.play();
    }
}
  }