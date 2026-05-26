// =========================================================================
// 1. INTERATIVIDADE DO ENVELOPE (CLIQUE, ANIMAÇÃO E SOM)
// =========================================================================
const envelope = document.getElementById('envelope');
const musica = document.getElementById('musica');

if (envelope) {
    envelope.addEventListener('click', () => {
        // Toca a música de fundo suave ao abrir
        musica.play().catch(error => {
            console.log("A reprodução automática foi bloqueada pelo navegador:", error);
        });
        
        // Adiciona a classe CSS que inicia as animações simultâneas
        envelope.classList.add('abrir');
    });
}

// =========================================================================
// 2. CONTROLE DE ESCALA (SISTEMA ANTI-GIGANTE EM MONITORES)
// =========================================================================
const LARGURA_IDEAL = 350; 
const ALTURA_IDEAL = 580;  

function ajustarTamanhoConvite() {
    const container = document.getElementById('container-convite');
    if (!container) return;

    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Descobre a proporção da tela do usuário em relação ao tamanho ideal
    let escalaX = larguraJanela / LARGURA_IDEAL;
    let escalaY = alturaJanela / ALTURA_IDEAL;

    // Seleciona a menor escala para garantir que caiba tanto na largura quanto na altura
    // Math.min(..., 1) garante que o tamanho nunca passe de 100% em telas gigantes
    let escala = Math.min(escalaX, escalaY, 1);

    // Aplica a escala mantendo a centralização perfeita do CSS fixo
    container.style.transform = `translate(-50%, -50%) scale(${escala})`;
}

// Executa o ajuste assim que a página carrega
window.addEventListener('load', ajustarTamanhoConvite);

// Executa o ajuste se o usuário girar o celular ou mudar o tamanho da janela
window.addEventListener('resize', ajustarTamanhoConvite);