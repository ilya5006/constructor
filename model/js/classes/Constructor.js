class Constructor
{
    /**
     * Initializes html file and push content into constructor
     * @param {file} htmlFile - Html file
     */
    initLoadedHTMLFile(htmlFile)
    {
        let reader = new FileReader();
        reader.readAsText(htmlFile);
    
        reader.addEventListener('load', () =>
        {
            let readHTML = reader.result;
    
            let domParser = new DOMParser();
            let loadedPageDOM = domParser.parseFromString(readHTML, 'text/html');

            this.originalDOM = loadedPageDOM;
            this.constructorDOM = loadedPageDOM;
    
            document.querySelector('#constructor-body').innerHTML = this.constructorDOM.body.innerHTML;
        });

        reader.addEventListener('progress', () =>
        {
            console.log('Идёт загрузка HTML-файла');
        });
    }

    initNewHTMLFile()
    {
        this.originalDOM = document.createElement('body');
        this.constructorDOM = document.createElement('body');

        this.createHTMLFile();
        document.querySelector('#constructor-body').innerHTML = '';
    }

    createHTMLFile()
    {
        let a = document.createElement('a');
        a.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(this.constructorDOM.body.innerHTML));

        a.click();
    }

    createElement()
    {

    }
}