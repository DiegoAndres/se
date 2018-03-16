var app = angularConfig(angular.module('se',['ngRoute', 'ui.bootstrap', 'ngNotify']));


app.controller('TicketsController',['$scope', '$filter', 'TicketService', '$uibModal', 'ngNotify', function($scope, $filter, TicketService, $uibModal, ngNotify){
    y             = $scope;
    $scope.ticket = {};
    $scope.filter = {};

    TicketService.get_permisos().then(function(response){
    	$scope.permisos = response.permisos;
    });

    TicketService.get_estados().then(function(response){
    	$scope.estados = response;
    });

    TicketService.get_tickets().then(function(response){
    	$scope.tickets  = response;
    	// $scope.paginate = response.paginate;
    });

    $scope.modal_ticket = function(){
    	$scope.modalTicket = $uibModal.open({
                animation   :     true,
                templateUrl : 'modal.html',
                scope       : $scope,
                size        : 'lg',
                backdrop    : 'static',
        });
    }

    $scope.nuevo_ticket = function(){
    	var ticket    = $scope.ticket;
    	TicketService.save_ticket(ticket).then(function(response){
    		console.log(response);
    		$scope.ticket = {};
    		TicketService.get_tickets().then(function(response){
		    	$scope.tickets  = response;
		    	// $scope.paginate = response.paginate;
		    });
    		$scope.modalTicket.close();
    		ngNotify.set('Ticket creado con correctamente', 'success');
    	});
    }

}]);