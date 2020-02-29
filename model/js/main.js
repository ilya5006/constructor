let inputHTMLFile = document.querySelector('#send-html-file-button');

inputHTMLFile.addEventListener('input', (event) =>
{
    if (event.target.files[0].type !== 'text/html')
    {
        throw new Error('Загружать можно только HTML-файлы');
    }

    readHTMLFile(event.target.files[0])
    .then((dom) =>
    {
        // console.log(dom);
    });
});