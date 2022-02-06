const button = document.getElementById('clicked-btn');
const demoText = document.getElementById('demoText');


function debounce(func, delay) {
    let pendingTimeOut;
    return function () {
        if (pendingTimeOut) {
            clearInterval(pendingTimeOut);
        }
        pendingTimeOut = setTimeout(() => {
            func();
        }, delay);
    };
} 

function copyToClipBoard(text){
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

button.addEventListener(
    'click',
    debounce(function () {
        console.log('Text Coppied!');
        copyToClipBoard(demoText.innerText);
        button.innerText = "Text Copied!"
    }, 1000)
);
