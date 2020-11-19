
var dog
var happyDog
var database
var foodS
var foodStock
var feedPet 
var addFood
var fedTime, lastFed
var foodObj
var database;
var dog
function preload()
{
dogImage=loadImage("images/Dog.png");
dogImage1=loadImage("images/happydog.png");
bottleimg=loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
   dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
  dog.scale=0.2
  // obj=new Food(200,200,20,20)

feed=createButton("feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("add food")
addFood.position(800,95);
addFood.mousePressed(addFood)

 
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
}


function draw() {  
  background(46,139,87)

//fedTime=database.ref('fedTime');
//fedTime.on("value",function(data){
  //lastFed=data.val()
//})
if(keyWentDown(UP_ARROW)){
  
writestock(foodS)
dog.addImage(dogImage1)
}

  drawSprites();
  text("note:press UP_ARROW key to feed the dog",100,100)
textSize(50)
fill("green")
stroke(10)
}
function readstock(data){
foodS=data.val();
}

function writestock(x){
  if(x<=0){
  x=0;
  }
  else{
    x=x-1;

  }
  database.ref('/').update({
    'Food':x
  })
}
function feedDog(){

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  food:foodObj.getFoodStock(),
 // fedTime:hour()
})
}
function addFood(){
foodS++;
database.ref('/').update({
  Food:foodS
})
}