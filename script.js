//CODIGO DA AULA = JS3001

const visImage = document.getElementById(`imagem-visualizacao`);
const productText = document.getElementById(`titulo-produto`);
const selectedText = document.getElementById(`nome-cor-selecionada`);
const miniImage0 = document.getElementById(`0-imagem-miniatura`);
const miniImage1 = document.getElementById(`1-imagem-miniatura`);
const miniImage2 = document.getElementById(`2-imagem-miniatura`);

const verdeCipreste = {
    colorName: `Verde-Cipreste`,
    sourceFolder: `imagens-verde-cipreste`
}

const azulInverno = {
    colorName: `Azul-Inverno`,
    sourceFolder: `imagens-azul-inverno`
};

const meiaNoite = {
    colorName: `Meia-Noite`,
    sourceFolder: `imagens-meia-noite`
}

const estelar = {
    colorName: `Estelar`,
    sourceFolder: `imagens-estelar`
}

const rosaClaro = {
    colorName: `Rosa-Claro`,
    sourceFolder: `imagens-rosa-claro`
}

const colorList = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const sizeList = [`41 mm`, `45 mm`];

let selectedImg = 1;
let selectedSize = 1;
let selectedColor = 1;

function selImg() {
    const idSelectedOption = document.querySelector(`[name="opcao-imagem"]:checked`).id;
    selectedImg = idSelectedOption.charAt(0);
    changeImg();
}

function selSize() {
    const idSelectedOption = document.querySelector(`[name="opcao-tamanho"]:checked`).id;
    selectedSize = idSelectedOption.charAt(0);
    changeText();
    if (sizeList[selectedSize] === `41 mm`) {
        visImage.classList.add(`caixa-pequena`);
    } else {
        visImage.classList.remove(`caixa-pequena`);
    }
    
}

function selColor() {
    const idSelectedOption = document.querySelector(`[name="opcao-cor"]:checked`).id.charAt(0);
    selectedColor = idSelectedOption.charAt(0);
    changeText();
    changeImg();
}

function changeText() {
    productText.innerText = `Pulseira loop esportiva ${colorList[selectedColor].colorName} para caixa de ${sizeList[selectedSize]}`
    selectedText.innerText = `Cor - ${colorList[selectedColor].colorName}`;
}

function changeImg() {
    visImage.src = `./imagens/opcoes-cores/${colorList[selectedColor].sourceFolder}/imagem-${selectedImg}.jpeg`;
    miniImage0.src = `./imagens/opcoes-cores/${colorList[selectedColor].sourceFolder}/imagem-0.jpeg`;
    miniImage1.src = `./imagens/opcoes-cores/${colorList[selectedColor].sourceFolder}/imagem-1.jpeg`;
    miniImage2.src = `./imagens/opcoes-cores/${colorList[selectedColor].sourceFolder}/imagem-2.jpeg`;
}