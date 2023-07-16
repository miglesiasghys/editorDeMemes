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

//
const cajaColor = document.getElementById('box-color')
let colorElegido=''
const inputColor=document.getElementById('input-color')

const cambioDeColor = (color) =>{
    cajaColor.style.backgroundColor= `${colorElegido}`
}

const obtenerColor=(e)=> {
    colorElegido= e.target.value;
    console.log(`El color es:`, e.target.value)
}

inputColor.addEventListener('input', (evento)=>obtenerColor(evento))

inputColor.addEventListener('input', ()=>cambioDeColor(colorElegido))

//
const imgMeme=document.getElementById('img-meme')
const inputURL=document.getElementById('url-input')

inputURL.addEventListener('input', (e)=>changeBackground(e))

const changeBackground= (e) => {
    console.log(e.target.value)
    imgMeme.style.backgroundImage=`url('${e.target.value}')`
    // imgMeme.style.backgroundSize='cover'
    // imgMeme.style.backgroundRepeat='no-repite'
    // imgMeme.style.backgroundPosition='center'
}