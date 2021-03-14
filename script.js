// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const seletor = document.querySelector.bind(document);
const iniciar = seletor("[data-iniciar]");
const pausar = seletor("[data-pausar]");
const resetar = seletor("[data-resetar]");
const tempo = seletor("[data-tempo]");

iniciar.onclick = iniciarTempo;
pausar.onclick = pausarTempo;
resetar.onclick = resetarTempo;

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 1000);
    this.setAttribute("disabled", true);
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute("disabled", true);
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}