console.log("hej");

let game = document.getElementById("game");
let hero = document.getElementById("hero");

let bottom = 0;
let left = 20;

document.addEventListener("keyup", (evt) => {
    console.log("key", evt.key);

    switch (evt.key) {
        case "w":
        case "ArrowUp":
            bottom += 10;
            hero.style.bottom = bottom + "px";

            console.log("Uppåt");
            break;

        case "s":
        case "ArrowDown":
            bottom -= 10;
            hero.style.bottom = bottom + "px";

            console.log("Neråt");
            break;

        case "a":
        case "ArrowLeft":
            left -= 10;
            hero.style.left = left + "px";
            

            console.log("Left");
            break;
        case "d":
        case "ArrowRight":
            left += 10;
            hero.style.left = left + "px";

            console.log("Right");
            break;

        default:
            // console.log("nope");
            break;
    }

})

let enemyId = 0;

function addEnemy() {

    enemyId++;

    console.log("Fiende!");

    let enemy = document.createElement("div");
    enemy.classList = "enemy";

    let enemyLeft = 900;
    let enemyBottom = Math.round(Math.floor(Math.random() * (500 - 1)/10)*10);
    
    enemy.style.left = enemyLeft +"px";
    enemy.style.bottom = enemyBottom +"px";
    enemy.id = enemyId;

    console.log(enemyId);

   let move = setInterval(() => {

        enemyLeft -= 50;
        document.getElementById(enemyId).style.left = enemyLeft + "px";

        if (enemyLeft <= -50) {
            console.log("KANT!");
            clearInterval(move);
            document.getElementById(enemyId).remove();
            addEnemy();
        }

    }, 300);

    game.append(enemy);
}

addEnemy();


// setInterval(() => {
    
//     addEnemy();
   
// },3000);
