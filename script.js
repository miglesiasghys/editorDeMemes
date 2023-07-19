// cambio de modo y cambio de aside

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
    if (modeButton.innerText === "Modo oscuro") {
    modeButton.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Modo claro';
    } else {
    modeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro';
    }
}

// IMAGEN

// input color

const boxMeme = document.getElementById('box-meme')
const inputColor=document.getElementById('input-color')
const colorName=document.getElementById('color-name')

const cambioDeColor = (e) =>{
    boxMeme.style.backgroundColor= `${e.target.value}`
    colorName.textContent=`${inputColor.value}`
}

inputColor.addEventListener('input', (e)=>cambioDeColor(e))

// input imagen con url

const imgMeme=document.getElementById('img-meme')
const inputURL=document.getElementById('url-input')

inputURL.addEventListener('input', (e)=>changeBackground(e))

const changeBackground= (e) => {
    imgMeme.style.backgroundImage=`url('${e.target.value}')`
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

//selector de blend mode

const filtersSelector=document.getElementById('filters-img')

filtersSelector.addEventListener('change', ()=> changeFilter())

const changeFilter=()=>{
    imgMeme.style.mixBlendMode=filtersSelector.value
}

//TEXTO 

// funcion Cambio de texto superior e inferior

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

// checkbox texto

const checkboxTopInput=document.getElementById('checkbox-top-input')
const checkboxBottomInput=document.getElementById('checkbox-bottom-input')
const containerTopText=document.getElementById('container-top-text')
const containerBottomText=document.getElementById('container-bottom-text')
const checkboxTransparent=document.getElementById('checkbox-transparent')
const textMemeBackground=document.getElementsByClassName('text-meme')

checkboxTopInput.addEventListener('change', ()=> hideTopText())
checkboxBottomInput.addEventListener('change', ()=> hideBottomText())
checkboxTransparent.addEventListener('change', ()=> boxTextTransparent())


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
const boxTextTransparent=()=>{
    if (checkboxTransparent.checked){
        textMemeBackground[0].classList.add('transparent')
        textMemeBackground[1].classList.add('transparent')
    }else{
        textMemeBackground[0].classList.remove('transparent')
        textMemeBackground[1].classList.remove('transparent')
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
//

// const inputFontSize=document.getElementById('input-font-size')
// console.log(inputFontSize.value)

// inputFontSize.addEventListener('change', ()=>changeFontSize())

// const changeFontSize=()=>{
//     topText.style.fontSize=inputFontSize.value
//     bottomText.style.fontSize=inputFontSize.value
//     console.log(changeFontSize(inputFontSize.value))
// }

// btn text align

const btnAlignLeft=document.getElementById('btn-align-left')
const btnAlignCenter=document.getElementById('btn-align-center')
const btnAlignRight=document.getElementById('btn-align-right')

btnAlignLeft.addEventListener('click', ()=>changeAlignLeft())
btnAlignCenter.addEventListener('click', ()=>changeAlignCenter())
btnAlignRight.addEventListener('click', ()=>changeAlignRight())

const changeAlignLeft=()=>{
    topText.style.textAlign='left'
    bottomText.style.textAlign= 'left'
}
const changeAlignCenter=()=>{
    topText.style.textAlign='center'
    bottomText.style.textAlign= 'center'
}
const changeAlignRight=()=>{
    topText.style.textAlign='right'
    bottomText.style.textAlign= 'right'
}

//btn de descarga

const downloadBtn=document.getElementById('download-btn')

downloadBtn.addEventListener('click', ()=>downloadMeme());

const downloadMeme=()=>{
    domtoimage.toBlob(boxMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.jpg")
})
}

//

const btnReset=document.getElementById('btn-reset')


btnReset.addEventListener('click', ()=> reset ())

const reset=()=>{
    imgMeme.style.backgroundImage=('')
    boxMeme.style.backgroundColor=('')
    topText.textContent=('TOP TEXT')
    bottomText.textContent=('BOTTOM TEXT')
    colorName.textContent=('#000000')
}

// botones de contorno de texto 

const btnNotContour=document.getElementById('btn-not-contour')
console.log(btnNotContour)
const btnLightContour=document.getElementById('btn-light-contour')
console.log(btnLightContour)
const btnDarkContour=document.getElementById('btn-dark-contour')
console.log(btnDarkContour)

btnNotContour.addEventListener('click', ()=>notContour())
btnLightContour.addEventListener('click', ()=>lightContour())
btnDarkContour.addEventListener('click', ()=> darkContour())

const notContour=()=>{
    textDescriptionMeme[0].style.textShadow='none'
    textDescriptionMeme[1].style.textShadow='none'
}
const lightContour=()=>{
    textDescriptionMeme[0].style.textShadow="2px 2px 0px white, 2px -2px 0px white, -2px 2px 0px white, -2px -2px 0px white, 2px 0px 0px white, 0px 2px 0px white, -2px 0px 0px white, 0px -2px 0px white"
    textDescriptionMeme[1].style.textShadow="2px 2px 0px white, 2px -2px 0px white, -2px 2px 0px white, -2px -2px 0px white, 2px 0px 0px white, 0px 2px 0px white, -2px 0px 0px white, 0px -2px 0px white"
}
const darkContour=()=>{
    textDescriptionMeme[0].style.textShadow='2px 2px 0px black, 2px -2px 0px black, -2px 2px 0px black, -2px -2px 0px black, 2px 0px 0px black, 0px 2px 0px black, -2px 0px 0px black, 0px -2px 0px black'
    textDescriptionMeme[1].style.textShadow='2px 2px 0px black, 2px -2px 0px black, -2px 2px 0px black, -2px -2px 0px black, 2px 0px 0px black, 0px 2px 0px black, -2px 0px 0px black, 0px -2px 0px black'
}

//input color de texto y de background

const inputColorText=document.getElementById('input-text-color')
const colorNameText=document.getElementById('color-name-text')

inputColorText.addEventListener('input', (e)=>changeColorText(e))

const changeColorText = (e) =>{
    textDescriptionMeme[0].style.color= `${e.target.value}`
    textDescriptionMeme[1].style.color= `${e.target.value}`
    colorNameText.textContent=`${inputColorText.value}`
}

const inputColorBackground=document.getElementById('input-text-background')
const colorNameBackground=document.getElementById('color-name-background')

inputColorBackground.addEventListener('input', (e)=>changeColorBackground(e))

const changeColorBackground = (e) =>{
    textMemeBackground[0].style.backgroundColor= `${e.target.value}`
    textMemeBackground[1].style.backgroundColor= `${e.target.value}`
    colorNameBackground.textContent=`${inputColorBackground.value}`
}

// cambiar interlineado

const lineHeightSelector=document.getElementById('select-line-height')

lineHeightSelector.addEventListener('change', ()=> changeLineHeight())

const changeLineHeight=()=>{
    textDescriptionMeme[0].style.lineHeight=lineHeightSelector.value
    textDescriptionMeme[1].style.lineHeight=lineHeightSelector.value
}