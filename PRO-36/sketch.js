var db;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton,nameButton;
var game,player
var gameState=0,time_text;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}


function setup() {
  //time = new Date();
  //time_text = time.toLocaleDateString()+"\n"+time.toLocaleTimeString()

  createCanvas(900, 500);
 
  db=firebase.database()
  
  game=new Game()
  game.getstate()
  game.start()



  feedButton = createButton("Feed your dog");
  feedButton.position(400, 95);
  feedButton.mousePressed(feedDog)
  


  addButton = createButton("Add Food");
  addButton.position(400, 120);
  addButton.mousePressed(addFood);

  

  foodObj = new Food();
  foodObj.getFoodStock();
  foodS = foodObj.foodStock;
  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage(dogImg);
  foodObj.getLastFedTime();
  time_text = foodObj.lastFed;
 
}

function draw() {  

  background("lightBlue");
  fill("white")
  textSize(30)
  text("FEED YOUR DOG ",620,30)

  
  /*NO USE OF THIS HERE
  
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed : 12 AM",350,30);
   }else{
     text("Last Fed : "+ lastFed + " AM", 350,30);
   }*/

   
  drawSprites();

  foodObj.display();

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if(foodS > 0){
    time = new Date();//To get current time from system
    time_text = time.toLocaleDateString()+"\n"+time.toLocaleTimeString()//change time format to date time like DD/MM/YYYY HH:MM:SS

    dog.addImage(happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    //lastFed = hour();
  
    foodObj.updateLastFed(time_text);//update new feed time in the DB
    
  }

}

/*
NO USE OF THIS HERE
function mousePressed(){
  if(mousePressed(feedButton))
  {time = new Date();
    time_text = time.toLocaleDateString()+"\t"+time.toLocaleTimeString()}
  }*/



