class Food {
    constructor(){

        this.foodStock = 20;
        this.lastFed = "";
        this.image = loadImage("Milk.png");

        db = firebase.database();
    }

    updateFoodStock(food){
        this.foodStock = food;
        db.ref("/").update({Food: food});
    }

    display(){

     var x = 80, y = 100;
     imageMode(CENTER);
     db.ref("lastFedTime").on("value",(d)=>{this.lastFed=d.val();}); //Get the lastFedTime from DB
     db.ref("Food").on("value",(d)=>{this.foodStock=d.val();})  //get foodCount from DB
     if(this.foodStock != 0){
         for(var i = 0; i < this.foodStock; i++){
             if(i % 10 === 0){
                x = 80;
                y += 50;
             }
             image(this.image, x, y, 50, 50);
             x += 30;
         }
     }
     fill("white");
    textSize(20);
    text("Last Fed : "+ this.lastFed, 350,30);
    }

    updateLastFed(time){//To update the time in DB
        db.ref("/").update({"lastFedTime":time});
    }

    getLastFedTime(){//To get time from DB
        db.ref("lastFedTime").on("value",(d)=>{this.lastFed=d.val();});
    }

    getFoodStock(){//To get FoodCount from DB
        db.ref("Food").on("value",(d)=>{this.foodStock=d.val();})
    }
  
}

