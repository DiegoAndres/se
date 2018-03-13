app.service('TicketService',['$q','$http', function($q, $http) {
    
    // this.setConsolidados = function($scope){
    //     $scope.consolidados__consolidados = { 
    //         items: [],
    //         filters: {},
    //         paginate: {},
    //         lookup: null,
    //         selected: {
    //             pedidos: [],
    //             cantidad_total: 0,
    //             valor_total: 0
    //         },
    //     };
    // };

    // this.getConsolidados = function($scope){
    //     DataService.listData($scope, 'consolidados__consolidados').then(function(response){
    //     	// if ($scope['productos__productos'].filters.talla__in.length > 0){
    //     	// 	$scope['productos__productos'].filters.talla__in = $scope.productos__productos.filters.talla__in.split(',');
    //     	// }
    //     });
    // };

    // this.saveConsolidado = function($scope){
    //     DataService.postData($scope, 'consolidados__consolidados');
    // }
}]);