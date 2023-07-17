const textButton=document.getElementById('texto-btn');
const imgButton=document.getElementById('imagen-btn')
const modeButton=document.getElementById('modo-btn')

const textAside=document.getElementById('aside-texto');
const imgAside=document.getElementById('aside-imagen');
const formatAside=document.getElementsByClassName('container-formato')

textButton.addEventListener('click', ()=> hideImgAside())
imgButton.addEventListener('click', ()=> hideTextAside())
modeButton.addEventListener('click', ()=> changeMode())

const hideImgAside=()=>{
    imgAside.classList.add('hidden');
    textAside.classList.remove('hidden')
}

const hideTextAside=()=>{
    textAside.classList.add('hidden');
    imgAside.classList.remove('hidden')
}

const changeMode=()=>{
    formatAside[0].classList.toggle('dark-aside')
    formatAside[1].classList.toggle('dark-aside')
}

// cambio de color del div img-meme

const cajaColor = document.getElementById('box-color')
const inputColor=document.getElementById('input-color')
const colorName=document.getElementById('color-name')

const cambioDeColor = (e) =>{
    cajaColor.style.backgroundColor= `${e.target.value}`
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

inputTop.addEventListener('change', (e)=>changeTextTop(e))

const changeTextTop= (e) => {
    topText.textContent=`${e.target.value}`
}

const bottomText=document.getElementById('bottom-text')
const inputBottom=document.getElementById('inferior')

inputBottom.addEventListener('change', (e)=>changeTextBottom(e))

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

//



//descargar
const downloadBtn=document.getElementById('download')
const finalMeme = document.getElementById("box-color");

downloadBtn.addEventListener('click', () => downloadMeme());

const downloadMeme = () => {
    doToImage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png")
})
}