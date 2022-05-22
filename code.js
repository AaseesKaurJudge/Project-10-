var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["888d9cf5-e8a8-4b4e-8bff-976bca3070f3","dac58244-5e20-4706-8fa3-2d53dda65a61","a269375b-22b3-4562-8131-8faec4b7c2ca","667b268c-0738-4cb0-9a69-d8696d1f385d","e86ee816-cea2-4c84-939f-3d138305b7e4","02e4454f-4b7d-46ba-9b80-42ec0c48739d"],"propsByKey":{"888d9cf5-e8a8-4b4e-8bff-976bca3070f3":{"name":"apple_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"d9fUpuoziapRT4nKunw26OQE5LznhFXh","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/888d9cf5-e8a8-4b4e-8bff-976bca3070f3.png"},"dac58244-5e20-4706-8fa3-2d53dda65a61":{"name":"arrow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pN5wiCJBXshg0Pqy3LYnwZ9ctzlMHPvj/category_tools/arrow.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"pN5wiCJBXshg0Pqy3LYnwZ9ctzlMHPvj","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pN5wiCJBXshg0Pqy3LYnwZ9ctzlMHPvj/category_tools/arrow.png"},"a269375b-22b3-4562-8131-8faec4b7c2ca":{"name":"beet_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz/category_food/beet.png","frameSize":{"x":491,"y":705},"frameCount":1,"looping":true,"frameDelay":2,"version":"Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":491,"y":705},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz/category_food/beet.png"},"667b268c-0738-4cb0-9a69-d8696d1f385d":{"name":"banana_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png"},"e86ee816-cea2-4c84-939f-3d138305b7e4":{"name":"blueberry_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq/category_food/blueberry.png","frameSize":{"x":378,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq/category_food/blueberry.png"},"02e4454f-4b7d-46ba-9b80-42ec0c48739d":{"name":"avocado_1","sourceUrl":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png","frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating first row of boxes
var box1 = createSprite(25,75,50,50);
box1.setAnimation("apple_1");
box1.scale=0.5;

var box2 = createSprite(75,75,50,50);
box2.setAnimation("beet_1");
box2.scale=0.1;

var box3 = createSprite(125,75,50,50);
box3.setAnimation("blueberry_1");
box3.scale=0.1;

var box4 = createSprite(175,75,50,50);
box4.setAnimation("apple_1");
box4.scale=0.6;

var box5 = createSprite(225,75,50,50);
box5.setAnimation("avocado_1");
box5.scale=0.1;

var box6 =  createSprite(275,75,50,50);
box6.setAnimation("beet_1");
box6.scale=0.1;

var box7 = createSprite(325,75,50,50);
box7.setAnimation("apple_1");
box7.scale=0.6;

var box8 =  createSprite(375,75,50,50);
box8.setAnimation("blueberry_1");
box8.scale=0.1;

//creating second row of boxes
var box9 = createSprite(25,125,50,50);
box9.setAnimation("apple_1");
box9.scale=0.6;

var box10 =  createSprite(75,125,50,50);
box10.setAnimation("avocado_1");
box10.scale=0.1;

var box11 = createSprite(125,125,50,50);
box11.setAnimation("blueberry_1");
box11.scale=0.1;

var box12 = createSprite(175,125,50,50);
box12.setAnimation("apple_1");
box12.scale=0.6;

var box13 = createSprite(225,125,50,50);
box13.setAnimation("banana_1_1");
box13.scale=0.1;

var box14 =  createSprite(275,125,50,50);
box14.setAnimation("beet_1");
box14.scale=0.1;

var box15 = createSprite(325,125,50,50);
box15.setAnimation("banana_1_1");
box15.scale=0.1;

var box16 = createSprite(375,125,50,50);
box16.setAnimation("beet_1");
box16.scale=0.1  ;

var ball =  createSprite(200,250,20,20);
ball.setAnimation("arrow_1");
ball.scale=0.7;
var paddle = createSprite(200,350,100,15);
paddle.shapeColor=('cyan');

//storing the score in a var
var score=0;
var gameState="start";

function draw() {
  background("pink");
  
  textSize(25);
  fill("red");
 text("Points-"+score, 250, 25);
   
  if (gameState==="start") {
 textSize(20);
 fill("purple");
 text("Welcome!! Press space to start",80,200);
   
    //moving ball when space key is pressed
 if (keyDown("space")) {
    ball.velocityX=3;
    ball.velocityY=4;
    gameState="play";
  }  
  
   }
  
 if (gameState==="play") {
  //moving paddle with mouse
  paddle.x=World.mouseX;
  
 
   
   createEdgeSprites();
   ball.bounceOff(topEdge);
   ball.bounceOff(rightEdge);
   ball.bounceOff(leftEdge);
   ball.bounceOff(paddle);
   
  //moving ball will destroy the boxes
 if ( ball.isTouching(box1) ) {
 box1.destroy();
 score=score+1;
 }
 
 if ( ball.isTouching(box2)) {
   box2.destroy();  
   score=score+1;
   }
     
 if (ball.isTouching(box3)) {
   box3.destroy(); 
   score=score+1;
     }
        
if (ball.isTouching(box4)) {
    box4.destroy();
    score=score+1;
     }
          
 if (ball.isTouching(box5)) {
   box5.destroy(); 
   score=score+1;
     }
         
 if (ball.isTouching(box6)) {
    box6.destroy();
    score=score+1;
      }
  
 if (ball.isTouching(box7)) {
     box7.destroy();
     score=score+1;
     }
         
 if (ball.isTouching(box8)) {
     box8.destroy();  
     score=score+1;
     }
         
 if (ball.isTouching(box9)) {
      box9.destroy(); 
      score=score+1;
     }
         
 if (ball.isTouching(box10)) {
      box10.destroy();  
      score=score+1;
     }
         
 if (ball.isTouching(box11)) {
      box11.destroy(); 
      score=score+1;
     }
         
  if (ball.isTouching(box12)) {
       box12.destroy();
       score=score+1;
     }
        
 if (ball.isTouching(box13)) {
      box13.destroy();
      score=score+1;
     }
         
 if (ball.isTouching(box14)) {
     box14.destroy(); 
     score=score+1;
     }
         
  if (ball.isTouching(box15)) {
      box15.destroy();
      score=score+1;
     }
        
  if (ball.isTouching(box16)) {
      box16.destroy();
      score=score+1;
     }   
     
  if (ball.isTouching(bottomEdge) || score===16) {
    gameState="end";
  }
  
  
  
  }
   
  if (gameState==="end") {
    textSize(20);
    fill("red");
    text("Game Over !!!", 150,200 );
            
   }
    
   
   
   
   
   
 
        
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
