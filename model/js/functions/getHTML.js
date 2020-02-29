let getHTML = async (htmlFile) =>
{
    let htmlString = await readHTMLFiler(htmlFile);

    let domParser = new DOMParser();
    let loadedPageDOM = domParser.parseFromString(htmlString, 'text/html');

    return loadedPageDOM;
}
