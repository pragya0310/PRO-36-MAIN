class Game{
    construtor(){}
getstate(){
    db.ref("gameState").on(
        "value",
        function(data){
            gameState=data.val()
        },
        function(){}
    );
}
updateState(s){
    db.ref("/").update(
        {
            "gamestate":s
        }
    )
}
start(){if(gameState==0){
    player=new Player()
player.getCount()
//NO USE OF THIS HERE
    //form=new Form();
    //form.display();


}}
}
