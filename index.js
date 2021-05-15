const wrapper = document.querySelector('.wrapper');
const mover = document.querySelector('.mover');
const images = document.querySelectorAll('.images');
const natHeightImg = images[0].naturalHeight;

let rect = '';
let elXPos = '';
let elYPos = '';

window.addEventListener('mousemove', (e) => {
    const xCor = e.clientX;
    const yCor = e.clientY;

    if (yCor <= rect.bottom && yCor >= elYPos && xCor <= rect.right && xCor >= elXPos) {
            changePosition(xCor);
    }
})

window.addEventListener('touchmove', (e) => {
    const xCor = e.clientX;
    const yCor = e.clientY;

    if (yCor <= rect.bottom && yCor >= elYPos && xCor <= rect.right && xCor >= elXPos) {
            changePosition(xCor);
    }
})

function changePosition(coordinates) {
    let percentage = Math.round(100 / (rect.width) * (coordinates - rect.left));
    images[0].style.width = `${percentage}%`;
    images[1].style.width = `${100 - percentage}%`;
    images[1].style.left = `${percentage}%`;
    mover.style.left = `${percentage}%`;
}

window.addEventListener('resize', () => {
    defineRect();
})

function defineRect() {
    rect = wrapper.getBoundingClientRect();
    elXPos = rect.right - rect.width;
    elYPos = rect.bottom - rect.height;
    
    const wrapperWidth = getComputedStyle(wrapper).width;
    wrapper.style.height = Math.round(100 / natHeightImg * parseInt(wrapperWidth, 10)) / 100 * natHeightImg;
}

defineRect();