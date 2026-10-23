// Seleciona apenas os botões dentro dos artigos
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function(botao) {
    let curtiu = false;
    botao.addEventListener("click", function() {
        let texto = botao.querySelector("span");
        if (texto) {
            if (!curtiu) {
                texto.textContent++;
                curtiu = true;
            } else {
                texto.textContent--;
                curtiu = false;
            }
        }
    });
});

// Lógica do Tema Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    // O method toggle adiciona a classe se ela não existir e remove se existir
    corpoPagina.classList.toggle("tema-escuro");
}