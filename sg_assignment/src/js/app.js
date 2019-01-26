var task; // TASKS 1, 2 and 3
const TIME = 2000; // animation duration for cards in TASK 1
const PADDING = 25; // text/image padding for TASK 2
const ticker = new PIXI.ticker.Ticker();

var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
renderer.backgroundColor = 0x353642;
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

window.addEventListener("resize", function() {
  renderer.resize(window.innerWidth, window.innerHeight);
});

// create various objects
let button1 = new PIXI.Sprite.fromImage('./src/img/task_1.png');
let button2 = new PIXI.Sprite.fromImage('./src/img/task_2.png');
let button3 = new PIXI.Sprite.fromImage('./src/img/task_3.png');
let fps = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 40, fill : 0xffffff, align : 'right'});

let imageArray = [
  new PIXI.Sprite.fromImage('./src/img/icon_1.png'),
  new PIXI.Sprite.fromImage('./src/img/icon_2.png'),
  new PIXI.Sprite.fromImage('./src/img/icon_3.png'),
  new PIXI.Sprite.fromImage('./src/img/icon_4.png')
]

let stringArray = [
  "Flower",
  "Orange",
  "Earth",
  "Monkey"
]

let emotiText = imageArray.concat(stringArray); // mixture of strings and sprites

var emitter; 
var elapsed;


class CardStack {
  constructor(x, y) {
    this.stack = [];
    this.x = x;
    this.y = y;
    this.cardHeight = 0.5;
  }

  cardCount() {
    return this.stack.length;
  }

  initializeStack(amount){
    for (var i = 0; i < amount; i++) {
      let card = new Card();
      card.setPosition(this.x, this.y - this.cardHeight*i);
      this.stack.push(card);
    }
  }

  addCard(card){
    // card.setPosition(this.x, this.y - this.cardHeight*this.stack.length);
    card.moveTo(this.x, this.y - this.cardHeight*this.stack.length, PIXI.tween.Easing.outQuad());
    this.stack.push(card);
    stage.setChildIndex(card._body, (stage.children.length-1)); // float card to top
  }

  transferCard(stack){
    // transfers top card to specified stack
    if (this.stack.length > 0) {
      stack.addCard(this.stack.pop(1));
    }
  }
}

class Card {
  constructor() {
    this._body = PIXI.Sprite.fromImage("./src/img/playing-card.png");
    this._body.anchor.set(0.5);
    this._body.position.x = 0;
    this._body.position.y = 0;
    this._body.scale.x = 0.5;
    this._body.scale.y = 0.5;
    stage.addChild(this._body);
  }
  
  setPosition(x, y){
    this._body.position.set(x, y);
  }

  moveTo(x, y, easing){

    var tweenX = PIXI.tweenManager.createTween(this._body);
    var tweenY = PIXI.tweenManager.createTween(this._body);

    tweenX.start();
    tweenY.start();

    tweenX.time = TIME;
    tweenX.easing = easing;
    tweenX.from({
      x: this._body.position.x
    });
    tweenX.to({
      x: x
    });

    tweenY.time = TIME;
    tweenY.easing = easing;
    tweenY.from({
      y: this._body.position.y
    });
    tweenY.to({
      y: y
    });
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function drawEmotiText(x, y, size) {
  shuffle(emotiText); // shuffle array of strings and sprite objects
  let cursor = x;

  for (var i = 0; i < getRandomInt(2, emotiText.length-1); i++) {
    if(typeof(emotiText[i]) == "string"){
      let str = new PIXI.Text(emotiText[i],{fontFamily : 'Arial', fontSize: size, fill : 0xffffff, align : 'left'});
      str.position.set(cursor, y);
      stage.addChild(str);
      cursor += str.width + PADDING;
    } else {
      stage.addChild(emotiText[i]);
      stage.children[stage.children.length-1].position.set(cursor, y);
      stage.children[stage.children.length-1].height = size;
      stage.children[stage.children.length-1].width = size;
      cursor += stage.children[stage.children.length -1].width + PADDING;
    }
  }
}

function showtask1(){
  task = 1;
  stage.destroy();
  stage = null;
  stage = new PIXI.Container();
  initializeButtons();
  stackA = new CardStack(renderer.width*0.33, renderer.height*0.5);
  stackB = new CardStack(renderer.width*0.66, renderer.height*0.5);
  stackA.initializeStack(144);
  stackB.initializeStack(0);
}

function showtask2(){
  task = 2;
  stage.destroy();
  stage = new PIXI.Container();
  initializeButtons();
  drawEmotiText(50, renderer.height/2, getRandomInt(40, 80));
}

function showtask3(){
  task = 3;
  stage.destroy();
  stage = new PIXI.Container();
  initializeButtons();
  // Create a new emitter
  emitter = new PIXI.particles.Emitter(stage, [PIXI.Texture.fromImage('./src/img/fire_particle.png')],
    {
  "alpha": {
    "start": 0.93,
    "end": 0.0
  },
  "scale": {
    "start": 2,
    "end": 3,
    "minimumScaleMultiplier": 1
  },
  "color": {
    "start": "#ffff3d",
    "end": "#ff0000"
  },
  "speed": {
    "start": 20,
    "end": 0,
    "minimumSpeedMultiplier": 1
  },
  "acceleration": {
    "x": 0,
    "y": -500
  },
  "maxSpeed": 0,
  "startRotation": {
    "min": 2,
    "max": 360
  },
  "noRotation": false,
  "rotationSpeed": {
    "min": 0,
    "max": 0
  },
  "lifetime": {
    "min": 0.2,
    "max": 0.9
  },
  "blendMode": "add",
  "frequency": 0.001,
  "emitterLifetime": -1,
  "maxParticles": 30,
  "pos": {
    "x": 0,
    "y": 0
  },
  "addAtBack": false,
  "spawnType": "circle",
  "spawnCircle": {
    "x": renderer.width/2,
    "y": renderer.height/2,
    "r": 0
  }
}
);
elapsed = Date.now();
emitter.emit = true;
}


function initializeButtons(){
  // inefficient since this needs to be reinitialized every time stage is destroyed
  // stage is destroyed whenever the task is switched
  button1.position.set(renderer.width-640, 50);
  button2.position.set(renderer.width-440, 50);
  button3.position.set(renderer.width-240, 50);
  fps.position.set(50, 50);

  button1.interactive = true;
  button1.buttonMode = true;
  button1.on('pointerdown', showtask1);

  button2.interactive = true;
  button2.buttonMode = true;
  button2.on('pointerdown', showtask2);

  button3.interactive = true;
  button3.buttonMode = true;
  button3.on('pointerdown', showtask3);

  stage.addChild(button1);
  stage.addChild(button2);
  stage.addChild(button3);
  stage.addChild(fps);
}

var raf;
var now = 0;
var timer = 0;

initializeButtons();

showtask1() // default

var emitter_now = Date.now();

function animate(time){
    renderer.render(stage);
    PIXI.tweenManager.update();
    ticker.update(time);
    fps.text = Math.round(ticker.FPS) + " FPS";
    
    // ideally, I would render different containers for each 'scene'
    switch(task){
      case 1:
        // TASK #1
        timer = Math.floor(ticker.lastTime/1000) // pixi-timer would be much better for scheduling events
        if(timer - now > 0) {
          now = timer; // runs every 1 second
          stackA.transferCard(stackB);
        }
        break;
      case 2:
        // TASK #2
        timer = Math.floor(ticker.lastTime/1000)
        if(timer - now > 1) {
          now = timer; // runs every 2 seconds
          while(stage.children.length > 4) { stage.children.pop() } // remove previous "EmotiText", leaving buttons + FPS. This could be implemented much better.

          drawEmotiText(50, renderer.height/2, getRandomInt(40, 80));
        }
        break;
      case 3:
        // TASK #3
        emitter_now = Date.now();
        emitter.update((emitter_now - elapsed) * 0.001);
        elapsed = emitter_now;
        break;
    }
    raf = window.requestAnimationFrame(animate);
}

animate(performance.now());
