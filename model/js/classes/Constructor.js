class Constructor
{
    set htmlFile(file)
    {
        let reader = new FileReader();
        reader.readAsText(file);
    
        reader.addEventListener('load', () =>
        {
            let readHTML = reader.result;
    
            let domParser = new DOMParser();
            let loadedPageDOM = domParser.parseFromString(readHTML, 'text/html');
    
            document.querySelector('#constructor-body').innerHTML = loadedPageDOM.body.innerHTML;
        });
    }
}