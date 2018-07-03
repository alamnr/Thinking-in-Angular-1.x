var app = angular.module('ngModelExample',[]);

app.controller('ExamplesCtrl',($scope)=>{
    $scope.textChange = ()=>{
        console.log('Text Box value changed');
    }
});