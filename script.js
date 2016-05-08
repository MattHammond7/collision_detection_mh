/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck')
var speed = 10;

puck.style.left = puck_x+'px';
puck.style.top = puck_y+'px';

function logCooordinates() {
    console.log('x:'+puck_x+' y:'+puck_y);
}

function checkCollision() {
    if (
        puck_x >= 250
        &&
        puck_x < 350
        &&
        puck_y >= 150
        &&
        puck_y < 250
        ) {
        console.log('collision');
        document.getElementById('gap').style.backgroundColor = "red";
        document.getElementById('puck').style.width = '10px';
        document.getElementById('puck').style.height = '10px';
    }
    else {
        document.getElementById('gap').style.backgroundColor = "white";
    }
}

function collisionLarger() {
    if (
        puck_x >= 300
        &&
        puck_x <= 310
        &&
        puck_y >= 50
        &&
        puck_y <= 60
        ) {
        console.log('collision');
        document.getElementById('puck').style.width = '20px';
        document.getElementById('puck').style.height = '20px';
    }
    else {
        
    }
}

function collisionSmaller() {
    if (
        puck_x >= 300
        &&
        puck_x <= 310
        &&
        puck_y >= 350
        &&
        puck_y <= 360
        ) {
        console.log('collision');
        document.getElementById('puck').style.width = '5px';
        document.getElementById('puck').style.height = '5px';
    }
    else {
        
    }
}

//RIGHT
document.getElementById('right').addEventListener('click',function() {
    if (puck_x < 600) {
    puck_x += speed;
    puck.style.left = puck_x+'px';
    logCooordinates();
    checkCollision();
    collisionLarger();
    collisionSmaller();
}});

//LEFT
document.getElementById('left').addEventListener('click',function() {
    if (puck_x > 0) {
    puck_x -= speed;
    puck.style.left = puck_x+'px';
    logCooordinates();
    checkCollision();
    collisionLarger();
    collisionSmaller();
}});

//UP
document.getElementById('up').addEventListener('click',function() {
    if (puck_y > 0) {
    puck_y -= speed;
    puck.style.top = puck_y+'px';
    logCooordinates();
    checkCollision();
    collisionLarger();
    collisionSmaller();
}});

//DOWN
document.getElementById('down').addEventListener('click',function() {
    if (puck_y < 400) {
    puck_y += speed;
    puck.style.top = puck_y+'px';
    logCooordinates();
    checkCollision();
    collisionLarger();
    collisionSmaller();
}});