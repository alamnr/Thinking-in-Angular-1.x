var app = angular.module('clockApp',[]);
        app.controller('TimeCtrl',getTime);
        
        function getTime($scope){
            var currentDate = new Date();
            $scope.timeString = currentDate.toTimeString();
            $scope.updateTime = function(){
                let update = new Date();
                $scope.timeString = update.toTimeString();
            } 
        }
