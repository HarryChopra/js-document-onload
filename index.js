function changeText() {
    document.querySelector('p#text').textContent = 'This is really cool!';
}

document.addEventListener('DOMContentLoaded', changeText);
// window.addEventListener('load', changeText);
