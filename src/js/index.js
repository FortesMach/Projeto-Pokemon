const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const botaoTrocaImagem = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () =>{
    const verificarModoEscuro = body.classList.contains("modo-escuro");
    if(verificarModoEscuro){
        body.classList.remove("modo-escuro")
        botaoTrocaImagem.setAttribute("src", "./src/imagens/sun.png")
    }else{
        body.classList.add("modo-escuro")
        botaoTrocaImagem.setAttribute("src", "./src/imagens/moon.png")
    }
});
