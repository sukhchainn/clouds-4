const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 360;
const CANVAS_HEIGHT = canvas.height = 450;
let gameSpeed = 5;

const backgroundLayer1_1 = new Image();
backgroundLayer1_1.src = './images/clouds_background_1.png';
const backgroundLayer1_2 = new Image();
backgroundLayer1_2.src = './images/clouds_background_2.png';
const backgroundLayer2_1 = new Image();
backgroundLayer2_1.src = './images/clouds_clouds_1.png';
const backgroundLayer2_2 = new Image();
backgroundLayer2_2.src = './images/clouds_clouds_2.png';
const backgroundLayer3_1 = new Image();
backgroundLayer3_1.src = './images/clouds_city_1.png';
const backgroundLayer3_2 = new Image();
backgroundLayer3_2.src = './images/clouds_city_2.png';
const backgroundLayer4_1 = new Image();
backgroundLayer4_1.src = './images/clouds_city2_1.png';
const backgroundLayer4_2 = new Image();
backgroundLayer4_2.src = './images/clouds_city2_2.png';

let x = 0;
let x2 = 360;

class Layer {
    constructor(image1, image2, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 360;
        this.height = 450;
        this.x2 = this.width;
        this.image1 = image1;
        this.image2 = image2;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width;
            // this.x = this.width + this.x - this.speed;
        } if (this.x2 <= -this.width) {
            this.x2 = this.width;
            // this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image2, this.x2, this.y, this.width, this.height);
    }
}

const layer4 = new Layer(backgroundLayer4_1, backgroundLayer4_2, 0.8);
const layer3 = new Layer(backgroundLayer3_1, backgroundLayer3_2, 0.6);
const layer2 = new Layer(backgroundLayer2_1, backgroundLayer2_2, 0.4);
const layer1 = new Layer(backgroundLayer1_1, backgroundLayer1_2, 0.2);

const gameObjects = [layer1, layer2, layer3, layer4];

function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	gameObjects.forEach(Object => {
        Object.update();
        Object.draw();
    });
	requestAnimationFrame(animate);
}
animate();

