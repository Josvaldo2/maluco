// Demonstração de movimentação em duas dimensões para jogos
// programado pelo Augusto, T. 201
//implementado em JavaScript usando a biblioteca Kaplay

kaplay();
loadSprite("laranjo", "sprites/Laranjo.png")
loadSprite("bliss", "sprites/Bliss.png")

setGravity(1600);
const Xvelocity = 300
let counter = 0;

const laranjo = add([
    sprite("laranjo"),
    pos(50, 400),
    scale(0.3),
    z(1),
    body(), area()
]);

const platform = add([
    rect(width(), 48),
    outline(4),
    pos(0, height() - 60),
    opacity(0),
    z(0),
    body({ isStatic: true }), area()
]);

const bliss = add([
    sprite("bliss"),
    pos(0, height()),
    scale(6, 3.2),
    anchor("botleft"),
    z(0)
]);

onKeyPress("space", function () {
    laranjo.isGrounded() ? laranjo.jump() : counter++;
});

onKeyDown("left", function() {
    laranjo.move(-Xvelocity, 0);
    laranjo.flipX = true;
});

onKeyDown("right", function() {
    laranjo.move(Xvelocity, 0);
    laranjo.flipX = false;
});