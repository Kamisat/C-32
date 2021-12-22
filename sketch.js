var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;

var gameState = "iniciar";

var bola = null;

var contador = 5;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  //criar objetos de divisão
  for (var k = 0; k <= 800; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 25; j <= width - 20; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  //crie a 4ª linha de objetos plinko
  for (var j = 0; j <= width - 30; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }



}



function draw() {
  background("black");
  textSize(27)

  if (gameState === "iniciar") {

    //text("Aperte espaço para iniciar.", 230, 20)

   // if (keyCode === (32)) {
    //  gameState = "jogar"

    //}
  }

  text("500", 30, 600);
  text("500", 100, 600);
  text("500", 170, 600);
  text("500", 260, 600);
  text("100", 330, 600);
  text("100", 410, 600);
  text("100", 490, 600);
  text("200", 570, 600);
  text("200", 650, 600);
  text("200", 730, 600);
  text("Pontuação: " + score, 600, 30);
  text("Chances: " + contador, 50, 30);


  Engine.update(engine);
  ground.display();

  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (gameState === "jogar") {


    //criar objetos de partículas
    if (frameCount % 90 === 0) {
      particles.push(new Particles(random(width / 2 - 300, width / 2 + 300), 10, 10))

    }


    //exibir as partículas
    for (var q = 0; q < particles.length; q++) {
      particles[q].display();

    }


  }
  if (bola !== null) {
    bola.display();


    if (bola.body.position.x < 330 && bola.body.position.y > 500) {

      score = score + 500;
      bola = null;
    } else if (bola.body.position.x > 330 && bola.body.position.x < 560 && bola.body.position.y > 500) {

      score = score + 100;
      bola = null;
    } else if (bola.body.position.x > 560 && bola.body.position.y > 500) {

      score = score + 200;
      bola = null;
    }
  }

  if (contador === 0) {

    gameState = "fim";
    textSize(40)
    text("Fim de Jogo.", 220, 350)

  }

}

function mousePressed() {

  if (gameState !== "fim") {

    contador = contador - 1;

    bola = new Particles(mouseX, 10, 10, 10);

  }



}
