var app = angular.module('calculatorApp',[]);


app.controller('calculatorCtrl',function(){
    this.buttonClicked = function(button){
         this.selectedOperation = button;
    },
    this.calculate = function(){
        if(this.selectedOperation==='+'){
            this.result = this.input1 + this.input2;
        }
        if(this.selectedOperation==='-'){
            this.result = this.input1 - this.input2;
        }
        if(this.selectedOperation==='*'){
            this.result = this.input1 * this.input2;
        }
        if(this.selectedOperation==='/'){
            this.result = this.input1 / this.input2;
        }
    }

});  

/*
app.controller('calculatorCtrl',calculator);


function calculator(){

}*/