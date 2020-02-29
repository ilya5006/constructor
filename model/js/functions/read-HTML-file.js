let readHTMLFiler = async (file) =>
{
    if (file.type !== 'text/html')
    {
        throw new Error('Загружать можно только HTML-файлы');
    }

    let reader = new FileReader();
    reader.readAsText(file);

    reader.addEventListener('load', () =>
    {
        let readHTML = await reader.result;

        return readHTML;
    });
}