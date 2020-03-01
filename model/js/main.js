let constructor = new Constructor();

let inputHTMLFile = document.querySelector('#send-html-file-button');

inputHTMLFile.addEventListener('input', (event) =>
{
    if (event.target.files[0].type !== 'text/html')
    {
        throw new Error('Загружать можно только HTML-файлы');
    }

    constructor.initHTMLFile(event.target.files[0]);
});