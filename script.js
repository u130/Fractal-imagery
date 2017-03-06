/*global TinyTurtle*/
/*global right*/
/*global forward*/
/*global left*/
/*global stamp*/

TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(40);
right(90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
}

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
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

function rectangle(x){
forward(x);
left(90);
forward(190);
left(90);
forward(x);
left(90);
forward(190);
left(90);
}

function hexagon(){
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
}

function hexagon(x){
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
}

function pentagon(){
left(18);
forward(30);
left(72);
forward(30);
left(72);
forward(30);
left(72);
forward(30);
left(72);
forward(30);
}

function pentagon(x){
left(18);
forward(x);
left(72);
forward(x);
left(72);
forward(x);
left(72);
forward(x);
left(72);
forward(x);
}

function triangle(){
right(120);
forward(30);
right(120);
forward(30);
right(120);
forward(30);
}

function triangle(x){
right(120);
forward(x);
right(120);
forward(x);
right(120);
forward(x);
}

function house(){
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(90);
forward(50);
right(90);
forward(30);
}

function house(x){
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

// Type your function call below

triangle(190);
stamp();

