var app = angular.module('todoApp',[]);

app.controller('todoCtrl',function(){
    this.editMode = false;
    this.todos = [
        'Learn Angular - 1.x',
        'Try out exercises',
        'Visit Java Brain Site'
    ];
    this.addTodo = function(){
        if(this.newTodo){
            this.todos.push(this.newTodo);
            this.newTodo = '';
        }
        
    };

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    };

    this.removeTodo = function(index){
        this.todos.splice(index,1);
    }


});