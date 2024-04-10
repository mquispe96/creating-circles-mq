const button = document.querySelector('button');

button.addEventListener('click', function(){
    createSection()
});

const randomNumber = () => Math.floor(Math.random() * (89 - 0 + 1) +0);
const randomColorSegment = () => Math.floor(Math.random() * (256 - 0 + 1) +0);

const createSection = () => {
    const parent = document.querySelector(`.container`);
    const section = document.createElement('section');
    section.classList.add('section');
    section.style.top = `${randomNumber()}%`;
    section.style.left = `${randomNumber()}%`;
    section.style.background = `rgb(${randomColorSegment()}, ${randomColorSegment()}, ${randomColorSegment()})`;
    parent.appendChild(section);
}