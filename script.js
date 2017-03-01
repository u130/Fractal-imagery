/*global TinyTurtle*/
/*global right*/
/*global forward*/
/*global left*/
/*global stamp*/

TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
function rectangle(){
forward(90);
left(90);
forward(190);
left(90);
forward(90);
left(90);
forward(190);
left(90);
}

function pentagon(){
left(30);
forward(10);
right(60);
forward(30);
right(30);
forward(30);
}

function triangle(){
right(60);
forward(50);
right(60);
forward(50);
right(120);
forward(50);
}
function house(){
left(60);
right(80);
left(60);
right(80);
left(90);
}
// Type your function call below

rectangle();
stamp();

