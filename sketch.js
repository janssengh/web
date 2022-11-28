// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// controle da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// controle da raquete
let raqueteLargura = 10;
let raqueteAltura = 90;

let xRaquete = 5;
let yRaquete = 150;
let colidiu = false;

// raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// sons do jogo
let trilha;
let raquetada;
let ponto;

function preload(){
  trilha = loadSound('trilha.mp3');
  raquetada = loadSound('raquetada.mp3');
  ponto  = loadSound('ponto.mp3');
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarBolinha();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificarColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}

function incluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  
  fill(color(255,140,0));   // rgb
  rect(150,10, 40,20);
  fill(255);
  text(meusPontos, 170, 26);
  
  fill(color(255,140,0));
  rect(450,10, 40,20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcarPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

function mostrarBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function mostrarRaquete(x, y){
  rect(x, y, raqueteLargura, raqueteAltura);
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function movimentaMinhaRaquete(){
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}


function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){   // tecla w
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {  // tecla s
    yRaqueteOponente += 10;
  }
}

function verificarColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha +raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}



function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, 
                    xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}