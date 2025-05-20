const idiomaActual = document.getElementById('language')
const listaIdiomas = document.getElementById('languages')
const idiomas = document.getElementsByClassName('option')

// Info
const pdf = document.getElementById('pdf')

// Toggle lsita idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
});

document.addEventListener('click', function(event) {
    const isClickInside = idiomaActual.contains(event.target) || listaIdiomas.contains(event.target);
    if (!isClickInside && listaIdiomas.classList.contains('toggle')) {
        listaIdiomas.classList.remove('toggle');
    }
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
    listaIdiomas.classList.remove('toggle');
    let pdfPath;
    switch (idioma) {
        case 'ES':
            pdfPath = 'PDFs/CV_Espanol.pdf';
            break;
        case 'EN':
            pdfPath = 'PDFs/CV_English.pdf';
            break;
        case 'DE':
            pdfPath = 'PDFs/CV_Deutsch.pdf';
            break;
    }

    pdf.src = `https://docs.google.com/gview?url=https://angelsgonza2107.github.io/CurriculumVitaeAG/${pdfPath}&embedded=true`;
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