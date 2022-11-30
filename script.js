const sol = new Image();
const lua = new Image();
const terra = new Image();


function init() {
    sol.src = 'sol.png';
    lua.src = 'lua.png';
    terra.src = 'terra.png';

    // executa próximo quadro de animação
    window.requestAnimationFrame(draw);
}


function draw() {
    const ctx = document.getElementById('canvas').getContext('2d');
   
    
    // novas formas são desenhadas ATRÁS do conteúdo da tela existente
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // limpa o canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // cor do preenchimento (preto com translúcido)
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'; // cor do contorno
    // salva todo o estado da tela, colocando o estado atual em uma pilha.
    ctx.save();
    ctx.translate(150, 150); // move a origem no centro do canvas

    // Desenha a Terra
    const time = new Date();
    // calcula a rotação com base na hora atual (mili segundos)
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());          
    
    ctx.translate(105, 0); // afasta 105px em X
    ctx.fillRect(0, -12, 40, 24); // sombra
    ctx.drawImage(terra, -12, -12); // imagem da terra

    // desenha a lua
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());                                                                         
    
    ctx.translate(0, 28.5);
    ctx.drawImage(lua, -3.5, -3.5);

    // restaura o estado inicial do canvas
    ctx.restore();
    ctx.restore();

    // desenha a órbita da terra através de um arco
    ctx.beginPath(); // inicio
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
    ctx.stroke(); // fim

    // Desenha a imagem estática do Sol - por trás das outras imagens
    ctx.drawImage(sol, 0, 0, 300, 300);

    // executa próximo quadro de animação
    window.requestAnimationFrame(draw);
}

init();