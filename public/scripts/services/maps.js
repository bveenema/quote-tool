// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('quotingToolApp')
  .service('mapService', function(){

  this.getRoute = function(destination){
    var DRO = 
            {
              origin: "2 Gilson Farm Ln Hartland VT",
              destination: destination,
              travelMode: "DRIVING"
            };
    return calculateRoute(DRO);
  }

  function calculateRoute(directionsRequestObject) {
    var route = {};
    var directionsService = new google.maps.DirectionsService;
    directionsService.route(directionsRequestObject, function(response, status) {
      if (status === 'OK') {
        route.roundTripTime = response.routes[0].legs[0].duration.value*2+3600;
        route.directions = response.routes[0].legs[0].steps;
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    return route;
  }
});
