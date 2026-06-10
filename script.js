// =========================
// INSTALAÇÃO DO APP
// =========================

let deferredPrompt;

const installBtn =
document.getElementById("installBtn");

// Esconde o botão inicialmente
if(installBtn){
    installBtn.style.display = "none";
}

// Captura evento de instalação
window.addEventListener(
"beforeinstallprompt",
(event)=>{

    event.preventDefault();

    deferredPrompt = event;

    if(installBtn){
        installBtn.style.display = "inline-block";
    }

});

// Quando clicar em instalar
if(installBtn){

    installBtn.addEventListener(
    "click",
    async ()=>{

        if(!deferredPrompt) return;

        deferredPrompt.prompt();

        deferredPrompt = null;

    });

}