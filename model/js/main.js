let inputHTMLFile = document.querySelector('#send-html-file-button');

inputHTMLFile.addEventListener('input', (event) =>
{
    let htmlLoadedDOM = getHTML(event.target.files[0])
        .then((dom) =>
        {
            console.log(dom);
        });
});