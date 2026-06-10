// =========================
// PERGUNTAS DO QUIZ
// =========================

const perguntas = [

{
pergunta:"Qual musical utiliza músicas do ABBA?",
respostas:["Hamilton","Mamma Mia!","Chicago","Cats"],
correta:"Mamma Mia!"
},

{
pergunta:"Quem é a protagonista de Heathers?",
respostas:["Veronica","Sophie","Lydia","Elphaba"],
correta:"Veronica"
},

{
pergunta:"Qual musical conta a história de Alexander Hamilton?",
respostas:["Hamilton","Grease","Wicked","Six"],
correta:"Hamilton"
},

{
pergunta:"Qual musical possui a personagem Elphaba?",
respostas:["Chicago","Wicked","Cats","Mamma Mia!"],
correta:"Wicked"
},

{
pergunta:"Qual musical tem Roxie Hart?",
respostas:["Chicago","Hamilton","Heathers","Six"],
correta:"Chicago"
},

{
pergunta:"Qual musical possui Lydia Deetz?",
respostas:["Grease","Wicked","Beetlejuice","Cats"],
correta:"Beetlejuice"
},

{
pergunta:"Qual musical se passa em Westerberg High?",
respostas:["Heathers","Chicago","Six","Hamilton"],
correta:"Heathers"
},

{
pergunta:"Qual musical é inspirado em Oz?",
respostas:["Wicked","Cats","Mamma Mia!","Chicago"],
correta:"Wicked"
},

{
pergunta:"Qual musical usa muito rap e hip-hop?",
respostas:["Hamilton","Grease","Cats","Chicago"],
correta:"Hamilton"
},

{
pergunta:"Qual musical tem Danny e Sandy?",
respostas:["Grease","Six","Wicked","Heathers"],
correta:"Grease"
},

{
pergunta:"Qual musical é baseado nas músicas do ABBA?",
respostas:["Mamma Mia!","Cats","Hamilton","Chicago"],
correta:"Mamma Mia!"
},

{
pergunta:"Qual musical tem seis rainhas inglesas?",
respostas:["Six","Chicago","Wicked","Cats"],
correta:"Six"
},

{
pergunta:"Qual musical possui Defying Gravity?",
respostas:["Wicked","Mamma Mia!","Hamilton","Grease"],
correta:"Wicked"
},

{
pergunta:"Qual musical é famoso pelos gatos?",
respostas:["Cats","Six","Chicago","Hamilton"],
correta:"Cats"
},

{
pergunta:"Onde fica a Broadway?",
respostas:["Nova York","Londres","Paris","Roma"],
correta:"Nova York"
}

];

// =========================
// VARIÁVEIS
// =========================

let indice = 0;
let pontos = 0;
let streak = 0;

// =========================
// ELEMENTOS
// =========================

const pergunta =
document.getElementById("pergunta");

const respostas =
document.getElementById("respostas");

const pontosTexto =
document.getElementById("pontos");

const streakTexto =
document.getElementById("streak");

const resultado =
document.getElementById("resultado");

const medalhas =
document.getElementById("medalhas");

const xpBar =
document.getElementById("xpBar");

const nivel =
document.getElementById("nivel");

// =========================
// MOSTRAR PERGUNTA
// =========================

function mostrarPergunta(){

respostas.innerHTML="";

pergunta.textContent =
perguntas[indice].pergunta;

perguntas[indice].respostas.forEach(opcao=>{

const botao =
document.createElement("button");

botao.classList.add("resposta-btn");

botao.textContent = opcao;

botao.onclick=()=>verificar(opcao);

respostas.appendChild(botao);

});

}

// =========================
// VERIFICAR
// =========================

function verificar(opcao){

if(opcao===perguntas[indice].correta){

pontos +=10;
streak++;

}else{

streak = 0;

}

indice++;

atualizar();

if(indice < perguntas.length){

mostrarPergunta();

}else{

finalizar();

}

}

// =========================
// ATUALIZAR HUD
// =========================

function atualizar(){

pontosTexto.textContent =
"Pontos: " + pontos;

streakTexto.textContent =
"Sequência: " + streak + " 🔥";

let porcentagem =
(pontos / 150) * 100;

xpBar.style.width =
porcentagem + "%";

if(pontos >= 40){

nivel.textContent =
"Nível 2 - Fã de Musicais";

}

if(pontos >= 80){

nivel.textContent =
"Nível 3 - Estrela da Broadway";

}

if(pontos >= 120){

nivel.textContent =
"Nível 4 - Lenda da Broadway";

}

}

// =========================
// RESULTADO FINAL
// =========================

function finalizar(){

pergunta.textContent =
"Quiz Finalizado!";

respostas.innerHTML="";

if(pontos <= 50){

resultado.textContent =
"🥉 Medalha Bronze";

medalhas.innerHTML =
"🥉";

}

else if(pontos <= 100){

resultado.textContent =
"🥈 Medalha Prata";

medalhas.innerHTML =
"🥈";

}

else{

resultado.textContent =
"🥇 Medalha Ouro";

medalhas.innerHTML =
"🥇";

}

}

// =========================
// INICIAR QUIZ
// =========================

mostrarPergunta();