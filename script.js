// cambio de modo y cambio de aside

const textButton=document.getElementById('texto-btn');
const imgButton=document.getElementById('imagen-btn')
const modeButton=document.getElementById('modo-btn')

const textAside=document.getElementById('aside-texto');
const imgAside=document.getElementById('aside-imagen');
const formatAside=document.getElementsByClassName('container-formato')
const encabezado=document.getElementsByClassName('encabezado')
const containerBody=document.getElementsByClassName('container-body')

textButton.addEventListener('click', ()=> hideImgAside())
imgButton.addEventListener('click', ()=> hideTextAside())
modeButton.addEventListener('click', (e)=> changeMode(e))

const hideImgAside=()=>{
    imgAside.classList.add('hidden');
    textAside.classList.remove('hidden')
}

const hideTextAside=()=>{
    textAside.classList.add('hidden');
    imgAside.classList.remove('hidden')
}

const changeMode=(e)=>{
    formatAside[0].classList.toggle('dark-aside');
    encabezado[0].classList.toggle('dark-header');
    containerBody[0].classList.toggle('dark-body');
    if (modeButton.innerText === "Modo oscuro") {
    modeButton.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Modo claro';
    } else {
    modeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro';
    }
}

// cambio de color del div img-meme

const boxMeme = document.getElementById('box-meme')
const inputColor=document.getElementById('input-color')
const colorName=document.getElementById('color-name')

const cambioDeColor = (e) =>{
    boxMeme.style.backgroundColor= `${e.target.value}`
    colorName.textContent=`${inputColor.value}`
}

inputColor.addEventListener('input', (e)=>cambioDeColor(e))

// imagen del meme

const imgMeme=document.getElementById('img-meme')
const inputURL=document.getElementById('url-input')

inputURL.addEventListener('input', (e)=>changeBackground(e))

const changeBackground= (e) => {
    imgMeme.style.backgroundImage=`url('${e.target.value}')`
}

// funcion Cambio de texto superior e inferior

const topText=document.getElementById('top-text')
const inputTop=document.getElementById('superior')
const bottomText=document.getElementById('bottom-text')
const inputBottom=document.getElementById('inferior')

inputTop.addEventListener('change', (e)=>changeTextTop(e))
inputBottom.addEventListener('change', (e)=>changeTextBottom(e))

const changeTextTop= (e) => {
    topText.textContent=`${e.target.value}`
}
const changeTextBottom= (e) => {
    bottomText.textContent=`${e.target.value}`
}

//filtros

const brightInput=document.getElementById('bright-input')
const opacityInput=document.getElementById('opacity-input')
const contrastInput=document.getElementById('contrast-input')
const blurInput=document.getElementById('blur-input')
const grayscaleInput=document.getElementById('grayscale-input')
const sepiaInput=document.getElementById('sepia-input')
const hueInput=document.getElementById('hue-input')
const saturationInput=document.getElementById('saturation-input')
const invertInput=document.getElementById('invert-input')

const filtros = (e) => {
    imgMeme.style.filter = 
    `brightness(${brightInput.value})
    opacity(${opacityInput.value})
    contrast(${contrastInput.value}%)
    blur(${blurInput.value}px)
    grayscale(${grayscaleInput.value}%)
    sepia(${sepiaInput.value}%)
    saturate(${saturationInput.value}%)
    invert(${invertInput.value})
    hue-rotate(${hueInput.value}deg)`;
};

brightInput.addEventListener('input', (e)=>filtros(e))
opacityInput.addEventListener('input', (e)=>filtros(e))
contrastInput.addEventListener('input', (e)=>filtros(e))
blurInput.addEventListener('input', (e)=>filtros(e))
grayscaleInput.addEventListener('input', (e)=>filtros(e))
sepiaInput.addEventListener('input', (e)=>filtros(e))
hueInput.addEventListener('input', (e)=>filtros(e))
saturationInput.addEventListener('input', (e)=>filtros(e))
invertInput.addEventListener('input', (e)=>filtros(e))

// checkbox

const checkboxTopInput=document.getElementById('checkbox-top-input')
const checkboxBottomInput=document.getElementById('checkbox-bottom-input')
const containerTopText=document.getElementById('container-top-text')
const containerBottomText=document.getElementById('container-bottom-text')

checkboxTopInput.addEventListener('change', ()=> hideTopText())
checkboxBottomInput.addEventListener('change', ()=> hideBottomText())

const hideTopText=()=>{
    if (checkboxTopInput.checked){
        containerTopText.classList.add('hidden')
    }else{
        containerTopText.classList.remove('hidden')
    }
}
const hideBottomText=()=>{
    if (checkboxBottomInput.checked){
        containerBottomText.classList.add('hidden')
    }else{
        containerBottomText.classList.remove('hidden')
    }
}
//selector de fuentes 

const fontSelector=document.getElementById('font-selector')
const textDescriptionMeme=document.getElementsByClassName('text-meme-description')

fontSelector.addEventListener('change', ()=>changeFontFamily())

const changeFontFamily= ()=>{
    textDescriptionMeme[0].style.fontFamily=fontSelector.value
    textDescriptionMeme[1].style.fontFamily=fontSelector.value
}

//btn de descarga

const downloadBtn=document.getElementById('download-btn')

downloadBtn.addEventListener('click', ()=>downloadMeme());

const downloadMeme=()=>{
    domtoimage.toBlob(boxMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.jpg")
})
}