app.service('TicketService',['$q','$http', function($q, $http) {
    
    this.get_estados = function(){
        var def      = $q.defer();
        var prom     = def.promise;
        $http({
            method : 'GET',
            url    : '/api/estados',
            // params : params,
            // data    : data,
            // headers : { 'Content-Type': 'application/x-www-form-urlencoded'}
            // headers : { 'Content-Type': 'application/json' }
        }).then(function (response) {
            def.resolve(response.data);
        }, function (response) {
            def.reject(response.statusText);
        });
        return prom;
    }

    this.save_ticket = function(data){
        var def      = $q.defer();
        var prom     = def.promise;
        $http({
            method : 'POST',
            url    : '/api/tickets/',
            data    : data,
            headers : { 'Content-Type': 'application/json' }
        }).then(function (response) {
            def.resolve(response.data);
        }, function (response) {
            def.reject(response.statusText);
        });
        return prom;
    }
}]);