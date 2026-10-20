const botoes = document.querySelectorAll("button");

botoes.forEach( function(botao){
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado(){
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent++;
            curtiu = false;
            }
        }
    })

const btnTemaEscuro = document.querySelector(".btn-tema-ecuro")
 btnTemaEscuro.addEventListener("click", mudaTema);
        function mudaTema () {
            const corpoPagina = document.body;
            if (corpoPagina.classlist.contains("tema-escuro")) {
                corpoPagina.classlist.remove("tema-escuro");
            } else {
                corpoPagina.classlist.add("tema-escuro");
            }
        }





