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

function square(length){
forward(length);
right(90);
forward(length);
right(90);
forward(length);
right(90);
forward(length);
right(90);
forward(length);
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

function rectangle(length, width){
forward(length);
left(90);
forward(width);
left(90);
forward(length);
left(90);
forward(width);
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

function hexagon(length){
right(60);
forward(length);
right(60);
forward(length);
right(60);
forward(length);
right(60);
forward(length);
right(60);
forward(length);
right(60);
forward(length);
right(60);
forward(length);
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

function pentagon(length){
left(18);
forward(length);
left(72);
forward(length);
left(72);
forward(length);
left(72);
forward(length);
left(72);
forward(length);
}

function triangle(){
right(120);
forward(30);
right(120);
forward(30);
right(120);
forward(30);
}

function triangle(length){
right(120);
forward(length);
right(120);
forward(length);
right(120);
forward(length);
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







rectangle(190, 120);
stamp();

