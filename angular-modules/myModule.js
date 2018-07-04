var myHelloModule  =  angular.module('myHelloModule',[]);

myHelloModule.controller('HelloCtrl', function(){
    this.helloMessage = 'I\'m from my Hello Module';
});