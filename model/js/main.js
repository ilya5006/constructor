let constructor = new Constructor();

let inputHTMLFile = document.querySelector('#send-html-file-button');
let leftMenu = document.querySelector('#left-menu');
let header = document.querySelector('header');
let createFile = document.querySelector('#create-page');

inputHTMLFile.addEventListener('input', (event) =>
{
    if (event.target.files[0].type !== 'text/html')
    {
        throw new Error('Загружать можно только HTML-файлы');
    }

    constructor.initLoadedHTMLFile(event.target.files[0]);
});

createFile.addEventListener('click', () =>
{
    constructor.initNewHTMLFile();
});