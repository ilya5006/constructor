document.querySelector('#left-menu').addEventListener('mouseover', (event) =>
{
    event.target.style.marginLeft = '0px';
});

document.querySelector('#left-menu').addEventListener('mouseout', (event) =>
{
    event.target.style.marginLeft = '-120px';
});