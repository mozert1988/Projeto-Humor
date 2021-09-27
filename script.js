let imagem1 = document.getElementById("imagem1");
let imagem2 = document.getElementById("imagem2");
let imagem3 = document.getElementById("imagem3");


function trocarArmadura(){
    if(imagem1.style.display == "block") { 
        imagem1.style.display = "none";
        imagem2.style.display = "block";
        imagem3.style.display = "none";
    } else if(imagem2.style.display == "block") {
        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "block";
    } else {
        imagem1.style.display = "block";
        imagem2.style.display = "none";
        imagem3.style.display = "none";

    }
}