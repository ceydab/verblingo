console.log("games.js began")
export function games(gameid){
    const game = "play"+gameid

    function clean() {
        document.getElementById("whatGames").remove() //page clean
    }
    document.getElementById(game).setAttribute("style", "display: block")
    clean()
}
