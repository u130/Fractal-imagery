/*global TinyTurtle*/
/*global right*/
/*global forward*/
/*global left*/
/*global stamp*/

TinyTurtle.apply(window, [undefined, 400, 400]);

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


function triangle(length){
right(120);
forward(length);
right(120);
forward(length);
right(120);
forward(length);
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







rectangle(100, 100);
stamp();

