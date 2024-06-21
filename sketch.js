}
function mostraBola(){
    circle(xBola, yBola, diametro);
}
function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}
function verificacaoColisaoBorda(){
  if (xBola + raio > width || xBola - raio <0)
    velocidadeXBola *= -1;{
}
  if (yBola + raio > height || yBola - raio < 0) {
    velocidadeYBola *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x,y, comprimentoRaquete, alturaRaquete);
}
function movimentaRaquete() {
  if(keyIsDown(87) && yRaquete > 0){
    yRaquete -=10;
  }
  if(keyIsDown(83) && yRaquete < height - alturaRaquete) {
    yRaquete += 10;
    
  }
}
function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW) && yRaqueteOponente > 0) {
    yRaqueteOponente -=10;
  }
  if (keyIsDown(DOWN_ARROW)&& yRaqueteOponente < height - alturaRaqueteOponente) {
    yRaqueteOponente +=10;
  }
}
function verificacaoColisaoRaqute(x, y) {
  if (xBola - raio < x + comprimentoRaquete && xBola + raio > x && yBola - raio < y + alturaRaquete && yBola + raio > y) {
    velocidadeXBola *=-1;
  }
}
