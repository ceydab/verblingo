console.log("games.js began")
import allgamecards from "./games.json" with { type: "json" }


export function games(gameid){
    const game = "play"+gameid
    const gameboard = gameid +"board"
    if (gameid == "game2"){gameid = "game1"}
    const gamecards = allgamecards[gameid]
    // console.log(gamecards)
    function clean() {
        document.getElementById("whatGames").setAttribute("style", "display: none")
    }
    document.getElementById(game).setAttribute("style", "display: block")
    clean()
    let numberofcards = document.getElementById(gameboard).querySelectorAll("button").length
//     take the cardno and get that many elements from gamecards and show those on buttons
    let shuffled = gamecards.sort(() => 0.5 - Math.random());
    for (let cardno = 0; cardno < numberofcards; cardno++) {
        document.getElementById(gameboard).children[cardno].innerHTML = shuffled[0]
        shuffled.splice(0,1)
    }
    const gamebuttons = document.getElementById(gameboard);
    gamebuttons.addEventListener("click", (event) => {
      // Check if a button with class 'games' was clicked
      if (event.target.classList.contains("options")) {
        const clickedButton = event.target;
        document.getElementById(gameboard).children[clickedButton.title].innerHTML = shuffled[0]
        shuffled.splice(0,1)
      }
    });
    const backbutton = document.getElementById("backtogames");
    backbutton.addEventListener("click", () => {
    // Change the style of the other element
    document.getElementById(game).setAttribute("style", "display: none")
    document.getElementById("whatGames").setAttribute("style", "display: block")
});
}

