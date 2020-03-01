let constructor = new Constructor();

let inputHTMLFile = document.querySelector('#send-html-file-button');
let leftMenu = document.querySelector('#left-menu');
let header = document.querySelector('header');

inputHTMLFile.addEventListener('input', (event) =>
{
    if (event.target.files[0].type !== 'text/html')
    {
        throw new Error('Загружать можно только HTML-файлы');
    }

    constructor.initHTMLFile(event.target.files[0]);
});