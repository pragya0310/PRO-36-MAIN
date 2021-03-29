class Player{
    construtor(){}
getCount(){db.ref("playerCount").on(
    "value",
    function(d){
     
    }
)}
updateCount(c){
    db.ref("/").update({"playerCount":c})
}
updateName(c){
    db.ref("players/player"+playerCount).update({"name":c})
}
updateScore(c){
    db.ref("players/player"+playerCount).update({"score":c})
}
}
