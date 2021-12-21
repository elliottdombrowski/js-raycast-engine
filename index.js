const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

const canvas = document.createElement('canvas');
canvas.setAttribute('width', SCREEN_WIDTH);
canvas.setAttribute('height', SCREEN_HEIGHT);
document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const TICK = 30;
const CELL_SIZE = 64;
const MAP = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];

const clearScreen = () => {
    context.fillStyle = 'red';
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
};

const movePlayer = () => {

};

const getRays = () => {
    return [];
}

const renderScene = (rays) => {

};

const renderMinimap = (posX, posY, scale, rays) => {

};

const engineLoop = () => {
    clearScreen();
    movePlayer();
    const rays = getRays();
    renderScene(rays);
    renderMinimap(0, 0, 0.75, rays);
}

setInterval(engineLoop, TICK);