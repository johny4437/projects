function get_todos(){
    var todos = new Array;
    var todo_str = localStorage.getItem('todo');
    if(todo_str!==null){
        todos = JSON.parse(todo_str);
    }

    return todos;
}

//function to add itens

function add(){

    var task = document.getElementById('task').value;

    if(task === ''){

        alert('you must write something');
    }else{

        var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));

    show();

    return false;

    }

    
}

function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice('id',1);
    localStorage.setItem('todo',JSON.stringify(todos));

    show();

    return false;
}

function show(){
    var todos = get_todos();

    var html = '<ol>';
    for(var i = 0;i<todos.length;i++){
        html += '<li>' + todos[i] + '<button  style = "border-radius: 50%; margin-left:10px;"class=" remove btn btn-danger" id="' + i  + '">x</button></li>';
    };
     html +='</ol>';
     document.getElementById('todos').innerHTML=html;

     var buttons =  document.getElementsByClassName('remove');
     for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click', remove);
     };
}

document.getElementById('add').addEventListener('click', add);
show();
