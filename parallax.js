// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const CANVAS_WIDTH = canvas.width = 360;
// const CANVAS_HEIGHT = canvas.height = 700;
// let gameSpeed = 2;

// // const backgroundLayer1 = new Image();
// // backgroundLayer1.src = 'layer-1.png';
// // const backgroundLayer2 = new Image();
// // backgroundLayer2.src = 'layer-2.png';
// // const backgroundLayer3 = new Image();
// // backgroundLayer3.src = 'layer-3.png';
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = './images/clouds_background.png';
// const backgroundLayer5 = new Image();
// backgroundLayer5.src = './images/clouds_background.png';
// // backgroundLayer5.classList.add("flip");
// backgroundLayer5.className += "flip";

// let x = 0;
// // let x2 = 2400;
// let x2 = 360;

// function animate() {
// 	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// 	ctx.drawImage(backgroundLayer4, x, 0);
// 	ctx.drawImage(backgroundLayer5, x2, 0);
// 	if (x < -360) x = 360 + x2 - gameSpeed;
// 	else x -= gameSpeed;
// 	if (x2 < -360) x2 = 360 + x - gameSpeed;
// 	else x2 -= gameSpeed;
// 	requestAnimationFrame(animate);
// };
// animate();