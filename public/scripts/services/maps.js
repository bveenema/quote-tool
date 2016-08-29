// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('quotingToolApp')
  .service('mapService', function($q){

  this.getRoute = function(destination){
    var DRO = 
            {
              origin: "2 Gilson Farm Ln Hartland VT",
              destination: destination,
              travelMode: "DRIVING"
            };
    //return calculateRoute(DRO);


    calculateRoute(DRO)
      .then(function(routeResponse){
        console.log("Success:");
        console.log(routeResponse);
      }, function(reason){
        console.log("Failed: " + reason);
      }, function(update){
        console.log("Got Notification: " + update);
      });

    var route = { 
                  roundTripTime: 2000,
                  directions: [1,2,3,4,5]
                };
    
    return route;
  }

  this.getterRoute = function(destination, callback) {
    var DRO = {
                origin: "2 Gilson Farm Ln Hartland VT",
                destination: destination,
                travelMode: "DRIVING"
              };
    calculateRoute(DRO).then(callback);
  }

  function calculateRoute(directionsRequestObject) {
    var fleck = $q.defer();
    var route = {};
    var directionsService = new google.maps.DirectionsService;
    directionsService.route(directionsRequestObject, function(response, status) {
      debugger;
      if (status === 'OK') {
        route.roundTripTime = response.routes[0].legs[0].duration.value*2+3600;
        route.directions = response.routes[0].legs[0].steps;
        fleck.resolve(route);
      } else {
        window.alert('Directions request failed due to ' + status);
        fleck.reject("error")
      }
    });

    return fleck.promise;
  }
});
