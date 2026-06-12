// =========================
// QUIZ BROADWAYVERSE
// Perguntas, pontuação salva e desbloqueio por pontos
// =========================
// Embaralha um array sem mexer no original
function embaralhar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}
// Lista de perguntas do quiz
const perguntas = [
    {
        pergunta: "Qual musical é baseado nas canções do ABBA?",
        respostas: ["Hamilton", "Mamma Mia!", "Chicago", "Wicked"],
        correta: "Mamma Mia!"
    },
    {
        pergunta: "Quem é a protagonista de Heathers?",
        respostas: ["Veronica", "Sophie", "Elphaba", "Roxie"],
        correta: "Veronica"
    },
    {
        pergunta: "Qual musical conta a vida de Alexander Hamilton?",
        respostas: ["Hamilton", "Cats", "Grease", "Six"],
        correta: "Hamilton"
    },
    {
        pergunta: "Qual musical apresenta Elphaba e Glinda?",
        respostas: ["Wicked", "Chicago", "Beetlejuice", "Heathers"],
        correta: "Wicked"
    },
    {
        pergunta: "Qual musical tem Roxie Hart como personagem principal?",
        respostas: ["Chicago", "Mamma Mia!", "Hamilton", "Cats"],
        correta: "Chicago"
    },
    {
        pergunta: "Qual musical é inspirado no filme de Tim Burton?",
        respostas: ["Beetlejuice", "Wicked", "Six", "Hamilton"],
        correta: "Beetlejuice"
    },
    {
        pergunta: "Qual musical se passa em Westerberg High?",
        respostas: ["Heathers", "Chicago", "Grease", "Mamma Mia!"],
        correta: "Heathers"
    },
    {
        pergunta: "Qual musical mistura história americana com rap e hip-hop?",
        respostas: ["Hamilton", "Cats", "Chicago", "Wicked"],
        correta: "Hamilton"
    },
    {
        pergunta: "Qual musical tem Danny e Sandy?",
        respostas: ["Grease", "Six", "Heathers", "Wicked"],
        correta: "Grease"
    },
    {
        pergunta: "Qual musical é famoso pelo número Defying Gravity?",
        respostas: ["Wicked", "Chicago", "Hamilton", "Beetlejuice"],
        correta: "Wicked"
    },
    {
        pergunta: "Qual musical tem seis rainhas da Inglaterra como protagonistas?",
        respostas: ["Six", "Cats", "Grease", "Chicago"],
        correta: "Six"
    },
    {
        pergunta: "Qual musical é conhecido pelos gatos?",
        respostas: ["Cats", "Hamilton", "Heathers", "Mamma Mia!"],
        correta: "Cats"
    },
    {
        pergunta: "Qual musical se passa em uma escola e fala sobre popularidade?",
        respostas: ["Heathers", "Chicago", "Hamilton", "Six"],
        correta: "Heathers"
    },
    {
        pergunta: "Qual musical foi criado por Lin-Manuel Miranda?",
        respostas: ["Hamilton", "Wicked", "Cats", "Grease"],
        correta: "Hamilton"
    },
    {
        pergunta: "Qual musical mostra a história antes de Dorothy chegar em Oz?",
        respostas: ["Wicked", "Chicago", "Mamma Mia!", "Beetlejuice"],
        correta: "Wicked"
    },
    {
        pergunta: "Qual musical é ligado a jazz, crime e fama?",
        respostas: ["Chicago", "Hamilton", "Grease", "Six"],
        correta: "Chicago"
    },
    {
        pergunta: "Qual musical foi inspirado em um filme de 1988?",
        respostas: ["Heathers", "Cats", "Wicked", "Mamma Mia!"],
        correta: "Heathers"
    },
    {
        pergunta: "Qual musical acontece no casamento de Sophie?",
        respostas: ["Mamma Mia!", "Chicago", "Hamilton", "Beetlejuice"],
        correta: "Mamma Mia!"
    },
    {
        pergunta: "Em qual cidade fica a Broadway?",
        respostas: ["Nova York", "Londres", "Paris", "Roma"],
        correta: "Nova York"
    },
    {
        pergunta: "Qual termo é usado por fãs para gravações não oficiais de musicais?",
        respostas: ["Slime Tutorial", "Soundtrack", "Backstage", "Encore"],
        correta: "Slime Tutorial"
    },
    {
        pergunta: "Qual musical apresenta a canção Seventeen?",
        respostas: ["Heathers", "Chicago", "Wicked", "Cats"],
        correta: "Heathers"
    },
    {
        pergunta: "Qual musical tem a música Dancing Queen?",
        respostas: ["Mamma Mia!", "Hamilton", "Six", "Beetlejuice"],
        correta: "Mamma Mia!"
    },
    {
        pergunta: "Qual musical é baseado na peça de Andrew Lloyd Webber sobre gatos?",
        respostas: ["Cats", "Grease", "Chicago", "Hamilton"],
        correta: "Cats"
    },
    {
        pergunta: "Qual musical mostra a vida de Eliza Schuyler?",
        respostas: ["Hamilton", "Wicked", "Heathers", "Chicago"],
        correta: "Hamilton"
    },
    {
        pergunta: "Qual musical foi adaptado para o cinema em 2002 com destaque para o jazz?",
        respostas: ["Chicago", "Mamma Mia!", "Six", "Cats"],
        correta: "Chicago"
    }
];

// =========================
// CHAVES DO LOCALSTORAGE
// Guardam pontos e progresso no navegador
// =========================

const CHAVE_PONTOS = "broadwayversePontos";
const CHAVE_INDICE = "broadwayverseIndiceQuiz";
const CHAVE_ACERTOS = "broadwayverseAcertos";

// =========================
// ESTADO DO QUIZ
// Índice da pergunta, pontos e acertos
// =========================

let indice = Number(localStorage.getItem(CHAVE_INDICE)) || 0;
let pontos = Number(localStorage.getItem(CHAVE_PONTOS)) || 0;
let acertos = Number(localStorage.getItem(CHAVE_ACERTOS)) || 0;

// Se o índice salvo estiver fora do intervalo, começa do início
if (indice < 0 || indice >= perguntas.length) {
    indice = 0;
}

// =========================
// ELEMENTOS DA TELA
// Liga o JavaScript aos blocos do HTML
// =========================

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const pontosEl = document.getElementById("pontos");
const liberadosEl = document.getElementById("liberados");
const totalEl = document.getElementById("total");
const feedbackEl = document.getElementById("feedback");
const resultadoEl = document.getElementById("resultado");

// =========================
// FUNÇÃO DE SALVAR
// Guarda o progresso no navegador
// =========================

function salvarProgresso() {
    localStorage.setItem(CHAVE_PONTOS, String(pontos));
    localStorage.setItem(CHAVE_INDICE, String(indice));
    localStorage.setItem(CHAVE_ACERTOS, String(acertos));
}

// =========================
// FUNÇÃO DE MUSICAIS LIBERADOS
// Cada 50 pontos libera um novo musical
// =========================

function calcularLiberados() {
    // Mamma Mia! fica liberado no começo
    // Depois: 50, 100, 150, 200 e 250 pontos
    return Math.min(6, 1 + Math.floor(pontos / 50));
}

// =========================
// ATUALIZAR PAINEL
// Mostra pontos, liberados e progresso
// =========================

function atualizarPainel() {
    pontosEl.textContent = "Pontos: " + pontos;
    liberadosEl.textContent = "Musicais liberados: " + calcularLiberados() + " de 6";
    totalEl.textContent = "Pergunta " + (indice + 1) + " de " + perguntas.length;
}

// =========================
// MOSTRAR PERGUNTA
// Exibe a pergunta atual e monta os botões
// =========================

function mostrarPergunta() {
    if (indice >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    const perguntaAtual = perguntas[indice];

    perguntaEl.textContent = perguntaAtual.pergunta;
    respostasEl.innerHTML = "";

    // Aqui as alternativas ficam em ordem aleatória
    const respostasMisturadas = embaralhar(perguntaAtual.respostas);

    respostasMisturadas.forEach((opcao) => {
        const botao = document.createElement("button");
        botao.className = "resposta-btn";
        botao.textContent = opcao;

        botao.addEventListener("click", () => verificarResposta(opcao));

        respostasEl.appendChild(botao);
    });

    feedbackEl.textContent = "Escolha uma resposta para continuar.";
    atualizarPainel();
}

// =========================
// VERIFICAR RESPOSTA
// Define se a resposta está certa ou errada
// =========================

function verificarResposta(opcaoEscolhida) {
    const respostaCorreta = perguntas[indice].correta;
    const botoes = document.querySelectorAll(".resposta-btn");

    // Bloqueia os botões depois de responder
    botoes.forEach((botao) => {
        botao.disabled = true;
    });

    if (opcaoEscolhida === respostaCorreta) {
        pontos += 10;
        acertos += 1;
        feedbackEl.textContent = "Você acertou!";
        alert("Você acertou!");
    } else {
        feedbackEl.textContent = "Você errou! Resposta correta: " + respostaCorreta;
        alert("Você errou!");
    }

    indice += 1;
    salvarProgresso();
    atualizarPainel();

    // Pequena pausa visual antes da próxima pergunta
    setTimeout(() => {
        if (indice < perguntas.length) {
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    }, 250);
}

// =========================
// FINALIZAR QUIZ
// Mostra o resultado final e salva a pontuação
// =========================

function finalizarQuiz() {
    perguntaEl.textContent = "Quiz finalizado.";
    respostasEl.innerHTML = "";

    let mensagemFinal = "";
    if (pontos < 50) {
        mensagemFinal = "Você terminou com " + pontos + " pontos.";
    } else if (pontos < 100) {
        mensagemFinal = "Você terminou com " + pontos + " pontos e liberou mais musicais.";
    } else {
        mensagemFinal = "Você terminou com " + pontos + " pontos e avançou muito no desbloqueio.";
    }

    resultadoEl.textContent = mensagemFinal;
    feedbackEl.textContent = "Jogue novamente para aumentar sua pontuação.";

    // Reseta o índice para a próxima vez que abrir o quiz
    indice = 0;
    salvarProgresso();
    atualizarPainel();
}

// =========================
// INICIAR QUIZ
// Mostra a primeira pergunta ao carregar
// =========================

mostrarPergunta();