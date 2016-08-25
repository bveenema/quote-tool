// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('quotingToolApp')
  .factory('mapService', function($http){

  // Initialize Variables
  // -------------------------------------------------------------
  // Service our factory will return
  var googleMapService = {};



  var directionsRequestObject = 
              {
                origin: "2 Gilson Farm Ln Hartland VT",
                destination: "grand rapids mi",
                travelMode: "DRIVING"
              };


  googleMapService.refresh = function(){
    calculateRoute();
  }

  function calculateRoute() {
    var directionsService = new google.maps.DirectionsService;
    directionsService.route(directionsRequestObject, function(response, status) {
      if (status === 'OK') {
        var travelTime = response.routes[0].legs[0].duration.value;
        var directions = response.routes[0].legs[0].steps
        console.log(response)
        console.log(travelTime/60 +' minutes');
        console.log(travelTime/60/60 +' hours');
        for(var i=0; i<directions.length; i++){
          console.log(directions[i].instructions);
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

// Refresh the page upon window load. Use the initial latitude and longitude
google.maps.event.addDomListener(window, 'load',
    googleMapService.refresh());

return googleMapService;
});
