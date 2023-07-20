// CHANGE MODE, CHANGE ASIDE

const textButton=document.getElementById('texto-btn');
const imgButton=document.getElementById('imagen-btn')
const modeButton=document.getElementById('modo-btn')

const textAside=document.getElementById('aside-texto');
const imgAside=document.getElementById('aside-imagen');
const formatAside=document.getElementsByClassName('container-format')
const encabezado=document.getElementsByClassName('container-header')
const containerBody=document.getElementsByClassName('container-body')
const btnBox=document.getElementsByClassName('btn-box')

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

const changeMode=()=>{
    formatAside[0].classList.toggle('dark-aside');
    encabezado[0].classList.toggle('dark-header');
    containerBody[0].classList.toggle('dark-body');
    btnBox[0].classList.toggle('dark-btn');
    btnBox[1].classList.toggle('dark-btn')
    btnBox[2].classList.toggle('dark-btn')
    btnBox[4].classList.toggle('dark-btn')
    btnBox[5].classList.toggle('dark-btn')
    btnBox[6].classList.toggle('dark-btn')
    btnBox[7].classList.toggle('dark-btn')
    btnBox[8].classList.toggle('dark-btn')
    btnClose[0].classList.toggle('dark-btn-close')
    btnClose[1].classList.toggle('dark-btn-close')

    if (modeButton.innerText === "Modo oscuro") {
    modeButton.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Modo claro';
    } else {
    modeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro';
    }
}

//BOTON DE DESCARGA

const downloadBtn=document.getElementById('download-btn')

downloadBtn.addEventListener('click', ()=>downloadMeme());

const downloadMeme=()=>{
    domtoimage.toBlob(boxMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.jpg")
})
}

// BOTON PARA CERRAR LOS ASIDE

const btnClose=document.getElementsByClassName('btn-close')
console.log(btnClose)
console.log(formatAside)

btnClose[0].addEventListener('click', ()=>closeAside())
btnClose[1].addEventListener('click', ()=>closeAside())

const closeAside=()=>{
    formatAside[0].classList.add('hidden')
    imgAside.classList.add('hidden')
    textAside.classList.add('hidden')
}

imgButton.addEventListener('click', ()=>openAsideImg())

const openAsideImg=()=>{
    formatAside[0].classList.remove('hidden')
    imgAside.classList.remove('hidden')
    textAside.classList.add('hidden')
}

textButton.addEventListener('click', ()=>openAsideText())

const openAsideText=()=>{
    formatAside[0].classList.remove('hidden')
    imgAside.classList.add('hidden')
    textAside.classList.remove('hidden')
}

// >>>>>>.....IMAGEN.....<<<<<<<

// INPUT: FUNCION CAMBIAR BACKGROUND IMG

const imgMeme=document.getElementById('img-meme')
const inputURL=document.getElementById('url-input')

inputURL.addEventListener('input', (e)=>changeBackground(e))

const changeBackground= (e) => {
    imgMeme.style.backgroundImage=`url('${e.target.value}')`
}

// INPUT-COLOR PARA BOX-MEME

const boxMeme = document.getElementById('box-meme')
const inputColor=document.getElementById('input-color')
const colorName=document.getElementById('color-name')

const cambioDeColor = (e) =>{
    boxMeme.style.backgroundColor= `${e.target.value}`
    colorName.textContent=`${inputColor.value}`
}

inputColor.addEventListener('input', (e)=>cambioDeColor(e))

//SELECTOR DE BLEND MODE

const filtersSelector=document.getElementById('filters-img')

filtersSelector.addEventListener('change', ()=> changeFilter())

const changeFilter=()=>{
    imgMeme.style.mixBlendMode=filtersSelector.value
}

//FILTROS DE IMAGEN

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

//FUNCION DE RESETEADO DE FILTROS

const btnReset=document.getElementById('btn-reset')

btnReset.addEventListener('click', ()=> reset ())

const reset=()=>{
    imgMeme.style.backgroundImage=('')
    boxMeme.style.backgroundColor=('')
    topText.textContent=('TOP TEXT')
    bottomText.textContent=('BOTTOM TEXT')
    colorName.textContent=('#000000')
}

//>>>>>>>>.....TEXTO.....<<<<<<<<<

// FUNCION PARA INGRESAR TEXTO

const topText=document.getElementById('top-text')
const inputTop=document.getElementById('top-text-input')
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

// CHECKBOX PARA OCULTAR TEXTO

const checkboxTopInput=document.getElementById('checkbox-top-input')
const checkboxBottomInput=document.getElementById('checkbox-bottom-input')
const checkboxTransparent=document.getElementById('checkbox-transparent')
const textMeme=document.getElementsByClassName('text-meme')

checkboxTopInput.addEventListener('change', ()=> hideTopText())
checkboxBottomInput.addEventListener('change', ()=> hideBottomText())
checkboxTransparent.addEventListener('change', ()=> boxTextTransparent())

const hideTopText=()=>{
    if (checkboxTopInput.checked){
        topText.classList.add('hidden')
    }else{
        topText.classList.remove('hidden')
    }
}
const hideBottomText=()=>{
    if (checkboxBottomInput.checked){
        bottomText.classList.add('hidden')
    }else{
        bottomText.classList.remove('hidden')
    }
}
const boxTextTransparent=()=>{
    if (checkboxTransparent.checked){
        textMeme[0].classList.add('transparent-top')
        textMeme[1].classList.add('transparent-bottom')
    }else{
        textMeme[0].classList.remove('transparent-top')
        textMeme[1].classList.remove('transparent-bottom')
    }
}

//SELECTOR DE FUENTES

const fontSelector=document.getElementById('font-selector')

fontSelector.addEventListener('change', ()=>changeFontFamily())

const changeFontFamily= ()=>{
    textMeme[0].style.fontFamily=fontSelector.value
    textMeme[1].style.fontFamily=fontSelector.value
}

//FUNCION PARA MODIFICAR FONT SIZE

const inputFontSize=document.getElementById('input-font-size')

inputFontSize.addEventListener('change', ()=>changeFontSize())

const changeFontSize=()=>{
    topText.style.fontSize=`${inputFontSize.value}px`
    bottomText.style.fontSize=`${inputFontSize.value}px`
}

// BOTON PARA ALINEACION DE TEXTO

const btnAlignLeft=document.getElementById('btn-align-left')
const btnAlignCenter=document.getElementById('btn-align-center')
const btnAlignRight=document.getElementById('btn-align-right')

btnAlignLeft.addEventListener('click', ()=>changeAlignLeft())
btnAlignCenter.addEventListener('click', ()=>changeAlignCenter())
btnAlignRight.addEventListener('click', ()=>changeAlignRight())

const changeAlignLeft=()=>{
    textMeme[0].style.justifyContent='start'
    textMeme[1].style.justifyContent='start'
}

const changeAlignCenter=()=>{
    textMeme[0].style.justifyContent='center'
    textMeme[1].style.justifyContent='center'
}
const changeAlignRight=()=>{
    textMeme[0].style.justifyContent='end'
    textMeme[1].style.justifyContent='end'
}

//INPUT COLOR DE TEXTO Y DE BACKGROUND

const inputColorText=document.getElementById('input-text-color')
const colorNameText=document.getElementById('color-name-text')

inputColorText.addEventListener('input', (e)=>changeColorText(e))

const changeColorText = (e) =>{
    textMeme[0].style.color= `${e.target.value}`
    textMeme[1].style.color= `${e.target.value}`
    colorNameText.textContent=`${inputColorText.value}`
}

const inputColorBackground=document.getElementById('input-text-background')
const colorNameBackground=document.getElementById('color-name-background')

inputColorBackground.addEventListener('input', (e)=>changeColorBackground(e))

const changeColorBackground = (e) =>{
    textMeme[0].style.backgroundColor= `${e.target.value}`
    textMeme[1].style.backgroundColor= `${e.target.value}`
    colorNameBackground.textContent=`${inputColorBackground.value}`
}

// BOTONES DE CONTORNO DE TEXTO

const btnNotContour=document.getElementById('btn-not-contour')
const btnLightContour=document.getElementById('btn-light-contour')
const btnDarkContour=document.getElementById('btn-dark-contour')

btnNotContour.addEventListener('click', ()=>notContour())
btnLightContour.addEventListener('click', ()=>lightContour())
btnDarkContour.addEventListener('click', ()=> darkContour())

const notContour=()=>{
    textMeme[0].style.textShadow='none'
    textMeme[1].style.textShadow='none'
}
const lightContour=()=>{
    textMeme[0].style.textShadow="2px 2px 0px white, 2px -2px 0px white, -2px 2px 0px white, -2px -2px 0px white, 2px 0px 0px white, 0px 2px 0px white, -2px 0px 0px white, 0px -2px 0px white"
    textMeme[1].style.textShadow="2px 2px 0px white, 2px -2px 0px white, -2px 2px 0px white, -2px -2px 0px white, 2px 0px 0px white, 0px 2px 0px white, -2px 0px 0px white, 0px -2px 0px white"
}
const darkContour=()=>{
    textMeme[0].style.textShadow='2px 2px 0px black, 2px -2px 0px black, -2px 2px 0px black, -2px -2px 0px black, 2px 0px 0px black, 0px 2px 0px black, -2px 0px 0px black, 0px -2px 0px black'
    textMeme[1].style.textShadow='2px 2px 0px black, 2px -2px 0px black, -2px 2px 0px black, -2px -2px 0px black, 2px 0px 0px black, 0px 2px 0px black, -2px 0px 0px black, 0px -2px 0px black'
}

// FUNCION DE ESPACIADO

const inputPadding=document.getElementById('input-padding')

inputPadding.addEventListener('change', ()=>changePadding())

const changePadding=()=>{
    textMeme[0].style.padding= `${inputPadding.value}px 0px`
    textMeme[1].style.padding= `${inputPadding.value}px 0px`
}

// FUNCION DE INTERLINEADO

const lineHeightSelector=document.getElementById('select-line-height')

lineHeightSelector.addEventListener('change', ()=> changeLineHeight())

const changeLineHeight=()=>{
    textMeme[0].style.lineHeight=lineHeightSelector.value
    textMeme[1].style.lineHeight=lineHeightSelector.value
}