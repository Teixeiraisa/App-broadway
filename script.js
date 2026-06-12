// =========================
// INSTALAÇÃO DO APLICATIVO
// Controla o botão de instalar no navegador
// =========================

let deferredPrompt = null;

// Procura o botão de instalação na página
const installBtn = document.getElementById("installBtn");

// Esconde o botão até o navegador permitir a instalação
if (installBtn) {
    installBtn.style.display = "none";
}

// Captura o momento em que o navegador permite instalar o app
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Mostra o botão quando a instalação estiver disponível
    if (installBtn) {
        installBtn.style.display = "inline-block";
    }
});

// Quando o usuário clicar no botão, abre o pedido de instalação
if (installBtn) {
    installBtn.addEventListener("click", async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        const choiceResult = await deferredPrompt.userChoice;

        // Depois de usar, limpa a variável
        deferredPrompt = null;
    });
}

// Aviso simples quando o app for instalado
window.addEventListener("appinstalled", () => {
    console.log("Aplicativo instalado com sucesso.");
});