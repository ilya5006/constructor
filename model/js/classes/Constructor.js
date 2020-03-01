class Constructor
{
    /**
     * Initializes html file and push content into constructor
     * @param {file} htmlFile - Html file
     */
    initHTMLFile(htmlFile)
    {
        let reader = new FileReader();
        reader.readAsText(htmlFile);
    
        reader.addEventListener('load', () =>
        {
            let readHTML = reader.result;
    
            let domParser = new DOMParser();
            let loadedPageDOM = domParser.parseFromString(readHTML, 'text/html');
    
            document.querySelector('#constructor-body').innerHTML = loadedPageDOM.body.innerHTML;
        });
    }
}