//Callback code

//function to prepare food

function prepareFood(tableNumber, items, callback){

    console.log("preparing food for items - > (" + tableNumber  + ") " + 
    "[" + items + "]");
    callback(tableNumber, items);
}
// function to serve food
function serveFood(tableNumber, items){
    console.log("serving food for items - > (" + tableNumber  + ") " + "[" + items + "]");
}
//calling prepare food and pass callback function
prepareFood(3, ["Burger", "Pasta", "Coke"], serveFood);