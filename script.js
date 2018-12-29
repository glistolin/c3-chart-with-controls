var myApp = angular.module('myApp', ['ngMaterial']);

myApp.controller('myCtrl', function ($scope) {
    $scope.data = {
        data1: true,
        data2: true
    }
    
   $scope.chart_grid_lines = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [
                ['data1', 30,200,100,400,150,250],
                ['data2', 50,20,10,40,15,25]
            ]
        },
        color: {
            pattern: ['rgb(255,64,129)', 'rgb(63,81,181)']
        },
        legend: {
           show: false
       }
    });
    
    $scope.$watch('data', function() {
        if ($scope.data.data1)
        	$scope.chart_grid_lines.show(['data1']);
        else
            $scope.chart_grid_lines.hide(['data1']);
        if ($scope.data.data2)
        	$scope.chart_grid_lines.show(['data2']);
        else
            $scope.chart_grid_lines.hide(['data2']);
    }, true)
});