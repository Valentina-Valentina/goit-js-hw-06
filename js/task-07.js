const inputFontSizeControl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputFontSizeControl.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`; 
});
