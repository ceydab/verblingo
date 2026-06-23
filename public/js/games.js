console.log("games.js began");

export async function games(gameid) {
    const game = "play" + gameid;
    const gameboard = gameid + "board";

    try {
        // 1. Fetch the already-randomized data array from your server API
        const response = await fetch(`/api/games/${gameid}`);
        if (!response.ok) throw new Error("Failed to fetch game data from API");

        // This 'shuffled' variable is now populated directly by your server
        let shuffled = await response.json();

        // --- The rest of your UI logic remains exactly the same ---
        function clean() {
            document.getElementById("whatGames").setAttribute("style", "display: none");
        }
        document.getElementById(game).setAttribute("style", "display: block");
        clean();

        let numberofcards = document.getElementById(gameboard).querySelectorAll("button").length;

        for (let cardno = 0; cardno < numberofcards; cardno++) {
            document.getElementById(gameboard).children[cardno].innerHTML = shuffled[0];
            shuffled.splice(0, 1);
        }

        const gamebuttons = document.getElementById(gameboard);

        // Remove old listeners if needed, or stick with your inline event tracking:
        gamebuttons.onclick = (event) => {
          if (event.target.classList.contains("options")) {
            const clickedButton = event.target;
            document.getElementById(gameboard).children[clickedButton.title].innerHTML = shuffled[0];
            shuffled.splice(0, 1);
          }
        };

        const backbutton = document.getElementById("backtogames");
        backbutton.onclick = () => {
            document.getElementById(game).setAttribute("style", "display: none");
            document.getElementById("whatGames").setAttribute("style", "display: block");
        };

    } catch (error) {
        console.error("Error running game pipeline:", error);
    }
}