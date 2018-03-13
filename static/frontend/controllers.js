var app = angularConfig(angular.module('se',['ngRoute', 'ui.bootstrap', 'ui.select']));


app.controller('TicketsController',['$scope', '$filter', 'TicketService', '$uibModal', function($scope, $filter, TicketService, $uibModal){
    y = $scope;

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
    	console.log('vamos a crear')
    }

//     ConsolidadosService.setConsolidados($scope);

//     ConsolidadosService.getConsolidados($scope);

//     // $scope.options = {
//     //     singleDatePicker: false,
        
//     //     autoUpdateInput: false,
//     //     applyClass: 'btn-green',
//     //     locale: {
//     //         applyLabel: "Aplicar",
//     //         fromLabel: "Desde",
//     //         format: "DD-MM-YYYY",
//     //         toLabel: "Hasta",
//     //         cancelLabel: 'Cancelar',
//     //         customRangeLabel: 'Rango'
//     //     },
//     //     eventHandlers: {'apply.daterangepicker': function(ev, picker) {
//     //             console.log(ev);
//     //             $scope.pedidos__pedidos.filters.fecha_entrega_desde = moment($scope.pedidos__pedidos.filters.rango_fechas.startDate._d).format('YYYY-MM-DD');
//     //             $scope.pedidos__pedidos.filters.fecha_entrega_hasta = moment($scope.pedidos__pedidos.filters.rango_fechas.endDate._d).format('YYYY-MM-DD');
//     //             $scope.pedidos__pedidos.filters.rango_fechas = {startDate: null};
//     //             $scope.loadPedidos(1);
//     //         }
//     //     },
//     // }

    
//     // PedidosService.getEstadoPedidos($scope);
//     // PedidosService.getPedidos($scope);

//     // $scope.pedidos__pedidos.filters = {rango_fechas: {startDate: null}};

//     // $scope.loadPedidos = function(page){

//     //     console.log('loadPedidos');
//     //     console.log($scope.pedidos__pedidos.filters);
//     //     if (page){
//     //         $scope.pedidos__pedidos.paginate.page = page;
//     //     };
//     //     delete $scope.pedidos__pedidos.filters.rango_fechas;
//     //     delete $scope.pedidos__pedidos.filters.rango_fechas;
//     //     //     if ($scope.productos__productos.filters.talla__in.length > 0 ){
//     //     //         if (angular.isArray($scope.productos__productos.filters.talla__in)){
//     //     //             var string = $scope.productos__productos.filters.talla__in.join(',');
//     //     //             $scope.productos__productos.filters.talla__in = string;
//     //     //         }
//     //     //     }else{
//     //     //         delete $scope.productos__productos.filters.talla__in;
//     //     //     }
//     //     // };

//     //     PedidosService.getPedidos($scope);
//     // };

//     // $scope.limpiarFechas = function(){
//     //     delete $scope.pedidos__pedidos.filters.fecha_entrega_desde;
//     //     delete $scope.pedidos__pedidos.filters.fecha_entrega_hasta;
//     //     $scope.pedidos__pedidos.filters.rango_fechas = {startDate: null};
//     //     $scope.loadPedidos(1);
//     // }

//     $scope.openModalVerDetalles = function (consolidado) {
//         $scope.consolidado           = consolidado;
//         $scope.modalVerDetalles = $uibModal.open({
//                 animation   :     true,
//                 templateUrl : 'ModalVerDetalles.html',
//                 scope       : $scope,
//                 size        : 'lg',
//                 backdrop    : 'static',
//         });

//     };
// }]);

// app.controller('nuevoConsolidadoController',['$scope', '$filter', 'PedidosService', 'ClientesService', 'ConsolidadosService', '$uibModal', function($scope, $filter, PedidosService, ClientesService, ConsolidadosService, $uibModal){
    
//     y = $scope;
    
//     $scope.selection=1;

//     PedidosService.setPedidos($scope);
//     ConsolidadosService.setConsolidados($scope);
//     ClientesService.setInstituciones($scope);

//     $scope.consolidados__detalles = {filters: null};

//     $scope.options = {
//         singleDatePicker: false,
        
//         autoUpdateInput: false,
//         applyClass: 'btn-green',
//         locale: {
//             applyLabel: "Aplicar",
//             fromLabel: "Desde",
//             format: "DD-MM-YYYY",
//             toLabel: "Hasta",
//             cancelLabel: 'Cancelar',
//             customRangeLabel: 'Rango'
//         },
//         eventHandlers: {'apply.daterangepicker': function(ev, picker) {
//                 console.log(ev);
//                 $scope.pedidos__pedidos.filters.fecha_entrega_desde = moment($scope.pedidos__pedidos.filters.rango_fechas.startDate._d).format('YYYY-MM-DD');
//                 $scope.pedidos__pedidos.filters.fecha_entrega_hasta = moment($scope.pedidos__pedidos.filters.rango_fechas.endDate._d).format('YYYY-MM-DD');
//                 $scope.pedidos__pedidos.filters.rango_fechas = {startDate: ""};
//                 $scope.loadPedidos(1);
//             }
//         },
//     }

//     $scope.pedidos__pedidos.filters.rango_fechas= {startDate: ""};
//     $scope.pedidos__pedidos.filters.estado = 2;
    

//     PedidosService.getPedidos($scope);


//     $scope.loadPedidos = function(page){

//         console.log('loadPedidos');
//         console.log($scope.pedidos__pedidos.filters);
//         if (page){
//             $scope.pedidos__pedidos.paginate.page = page;
//         };
//         delete $scope.pedidos__pedidos.filters.rango_fechas;
//         delete $scope.pedidos__pedidos.filters.rango_fechas;

//         PedidosService.getPedidos($scope);
//     };

//     $scope.limpiarFechas = function(){
//         delete $scope.pedidos__pedidos.filters.fecha_entrega_desde;
//         delete $scope.pedidos__pedidos.filters.fecha_entrega_hasta;
//         $scope.pedidos__pedidos.filters.rango_fechas = {startDate: null};
//         $scope.loadPedidos(1);
//     }

//     $scope.openModalVerDetalles = function (pedido) {
//         $scope.pedido           = pedido;
//         $scope.modalVerDetalles = $uibModal.open({
//                 animation   :     true,
//                 templateUrl : 'ModalVerDetalles.html',
//                 scope       : $scope,
//                 size        : 'lg',
//                 backdrop    : 'static',
//         });

//     };

//     $scope.agregarPedido = function(pedido){
//         var index = $scope.pedidos__pedidos.items.indexOf(pedido);
//         if (index > -1) {
//             $scope.consolidados__consolidados.selected.pedidos.push(pedido);
//             $scope.consolidados__consolidados.selected.cantidad_total += pedido.cantidad_total;
//             $scope.consolidados__consolidados.selected.valor_total += pedido.valor_total;
//             $scope.pedidos__pedidos.items.splice(index, 1);
//         }
//     };

//     $scope.removerPedido = function(pedido){
//         var index = $scope.consolidados__consolidados.selected.pedidos.indexOf(pedido);
//         if (index > -1) {
//             $scope.pedidos__pedidos.items.push(pedido);
//             $scope.consolidados__consolidados.selected.cantidad_total -= pedido.cantidad_total;
//             $scope.consolidados__consolidados.selected.valor_total -= pedido.valor_total;
//             $scope.pedidos__pedidos.items = $filter('orderBy')($scope.pedidos__pedidos.items, 'fecha_entrega');
//             $scope.consolidados__consolidados.selected.pedidos.splice(index, 1);
//         }
//     };

//     $scope.preConsolidar = function(){
//         var crear_detalle = true;
//         var detalles = [];
        
//         for (let pedido of $scope.consolidados__consolidados.selected.pedidos){
//             for (let detalle_pedido of $filter('filter')(pedido.detalles, {confeccion: true})){
//                 crear_detalle = true;
//                 for (let detalle_consolidado of detalles){
//                     if (detalle_consolidado.producto == detalle_pedido.producto){
//                         detalle_consolidado.cantidad += detalle_pedido.cantidad;
//                         if (detalle_consolidado.pedidos.indexOf(detalle_pedido.pedido) < 0){
//                             detalle_consolidado.pedidos.push(detalle_pedido.pedido);
//                         }
//                         crear_detalle = false;
//                         break;
//                     }
//                 }

//                 if (crear_detalle){
//                     var detalle = {
//                         pedidos: [detalle_pedido.pedido],
//                         cantidad: detalle_pedido.cantidad,
//                         producto: detalle_pedido.producto, 
//                         productoObj: detalle_pedido.productoObj
//                     };
//                     detalles.push(detalle);
//                 } 
//             }    
//         }
//         $scope.consolidados__consolidados.selected.detalles = detalles;

//         var aux_instituciones = detalles.map(function(obj){ return obj.productoObj.institucion; });
//         var aux               = [];
//         var instituciones     = [];
//         for (let institucion of aux_instituciones){
//             if (aux.indexOf(institucion.id) < 0){
//                 aux.push(institucion.id)
//                 instituciones.push(institucion);
//             }
//         }
        
//         $scope.clientes__instituciones.items = instituciones;
//         $scope.selection=2;
//     }

//     $scope.volver = function(){
//         $scope.selection = 1;
//     };

//     $scope.nuevoConsolidado = function(){
//         ConsolidadosService.saveConsolidado($scope);
//     };

//     $scope.totalVentaPedido = function(pedido){
//         var total = 0;
//         for (let d of $filter('filter')(pedido.detalles, {confeccion: false})){
//             total += d.productoObj.valor * d.cantidad;
//         }
//         return total;
//     };

//     $scope.totalConfeccionPedido = function(pedido){
//         var total = 0;
//         for (let d of $filter('filter')(pedido.detalles, {confeccion: true})){
//             total += d.productoObj.valor * d.cantidad;
//         }
//         return total;
//     };

//     $scope.totalPedido = function(pedido){
//         var total = 0;
//         total = $scope.totalConfeccionPedido(pedido) + $scope.totalVentaPedido(pedido);
        
//         if (!pedido.descuento){
//             return total;
//         }

//         return (total)*(100- pedido.descuento)/100;
//     };

}]);