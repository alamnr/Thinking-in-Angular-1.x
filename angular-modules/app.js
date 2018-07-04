var app = angular.module('modulesApp',['myHelloModule','ngTagsInput']);

app.controller('tagsDemoCtrl',function(){
    this.tags  = [
        {text:'Test1'},
        {text:'Test2'},
        {text:'Test3'}
    ]; 
});