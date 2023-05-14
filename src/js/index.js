const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const botaoTrocaImagem = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () =>{
    const verificarModoEscuro = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")
    if(verificarModoEscuro){
        botaoTrocaImagem.setAttribute("src", "./src/imagens/sun.png")
    }else{
        botaoTrocaImagem.setAttribute("src", "./src/imagens/moon.png")
    }
});
