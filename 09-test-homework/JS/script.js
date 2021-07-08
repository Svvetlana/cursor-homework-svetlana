function getRandomColor() {
    const color = [];

    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.style.background = getRandomColor();
        document.body.prepend(square);
    }
}
generateBlocks();

function getColor() {
    setInterval(() => {
        const blocks = document.querySelectorAll('div');

        for (let block of blocks) {
            block.style.background = getRandomColor();
        }
    }, 1000);

}
getColor();