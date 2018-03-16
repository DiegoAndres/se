app.service('TicketService',['$q','$http', function($q, $http) {
    
    this.get_permisos = function(){
        var def      = $q.defer();
        var prom     = def.promise;
        $http({
            method : 'GET',
            url    : '/api/permisos',
        }).then(function (response) {
            def.resolve(response.data);
        }, function (response) {
            def.reject(response.statusText);
        });
        return prom;
    }

    this.get_estados = function(){
        var def      = $q.defer();
        var prom     = def.promise;
        $http({
            method : 'GET',
            url    : '/api/estados',
        }).then(function (response) {
            def.resolve(response.data);
        }, function (response) {
            def.reject(response.statusText);
        });
        return prom;
    }

    this.get_tickets = function(){
        var def      = $q.defer();
        var prom     = def.promise;
        $http({
            method : 'GET',
            url    : '/api/tickets',
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