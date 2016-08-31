// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('quotingToolApp')
  .service('mapService', function($q){

  this.getRoute = function(destination, callback) {
    var DRO = {
                origin: "2 Gilson Farm Ln Hartland VT",
                destination: destination,
                travelMode: "DRIVING"
              };
    calculateRoute(DRO).then(callback);
  }

  function calculateRoute(directionsRequestObject) {
    var deferred = $q.defer();
    var route = {};
    var directionsService = new google.maps.DirectionsService;
    directionsService.route(directionsRequestObject, function(response, status) {
      if (status === 'OK') {
        route.oneWayTime = response.routes[0].legs[0].duration.value;
        if(route.oneWayTime < 3600){
          route.roundTripTime = 3600*3;
        }else{
          route.roundTripTime = response.routes[0].legs[0].duration.value*2+3600;
        }
        route.directions = response.routes[0].legs[0].steps;
        deferred.resolve(route);
      } else {
        deferred.reject('Directions request failed due to ' + status);
      }
    });

    return deferred.promise;
  }
});
