const idiomaActual = document.getElementById('language')
const listaIdiomas = document.getElementById('languages')
const idiomas = document.getElementsByClassName('option')

// Info
const pdf = document.getElementById('pdf')

// Toggle lsita idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent;
        establecerIdioma(idioma);
    });
});

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `assets/flags/${idioma}.png`;
    switch (idioma) {
        case 'ES':
            pdf.src = 'PDFs/CV Español.pdf';
            break;
        case 'EN':
            pdf.src = 'PDFs/CV English.pdf';
            break;
        case 'DE':
            pdf.src = 'PDFs/CV Deutsch.pdf';
            break;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('EN');
            break;
        default:
            establecerIdioma('ES');
            break;
    }
});