var app = angular.module('nestedController',[]); 

app.controller('Ctrl1',($scope)=>{
    $scope.testProp = 'From  controller 1';
});

app.controller('Ctrl2',($scope)=>{
   // $scope.testprop = 'From controller 2';
});