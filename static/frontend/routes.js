/**
 * Controlador principal
 **/
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
        templateUrl : '/static/frontend/index.html',
        controller  : 'TicketsController'
    });

}]);