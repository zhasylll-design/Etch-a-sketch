const div = document.createElement('div');
const container = document.getElementById('container');
const button = document.getElementById('set');

div.style.height = '30px';
div.style.width = '30px';
div.style.backgroundColor = 'blue';
div.style.margin = '3px';
div.classList.add('square');
div.style.opacity = '1';

for (let i = 0; i <= 255; ++i) {
    container.appendChild(div.cloneNode());
}

button.addEventListener('click', () => {
    const size = prompt('Enter the number of squares per side (max 100):');
    if (size > 100) {
        alert('Please enter a number less than or equal to 100.');
        return;
    }
    container.innerHTML = '';
    const squareSize = 600 / size - 6; // Adjust for margin
    for (let i = 0; i < size * size; ++i) {
        const newDiv = div.cloneNode();
        newDiv.style.height = `${squareSize}px`;
        newDiv.style.width = `${squareSize}px`;
        container.appendChild(newDiv);
    }
});

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
});

container.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.opacity = `${parseFloat(e.target.style.opacity) - 0.1}`;
    }
});