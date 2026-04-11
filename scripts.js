let circulo = document.querySelector('.circulo');
let imagemCopo = document.querySelector('.imagem-copo')

function mudarCor (cor) {
    console.log("cor:", cor);
    console.log("circulo:", circulo);
    circulo.style.backgroundColor = cor;
    
}

function trocaImagem(imagem){
    
    imagemCopo.src = imagem

   }