// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});


const m = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c")];

const mudaTudo = document.getElementById("btn-muda-tudo");

mudaTudo.addEventListener("click", function () {
    for (var i = 0; i < 3; i++) {
 m[i].textContent = (i);
}
})