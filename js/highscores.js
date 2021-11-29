var highScores = [];
if (localStorage.getItem("highScores")) {
    highScores = JSON.parse(localStorage.getItem("highScores"));
}

// create ul elements create var
// create for loop to iterate through all the highscores that are saved
// for each highscore create an li element
// append li elements in for loop
// append ul to body

var body = document.querySelector("body");

var ul = document.createElement("ul");
for (var index = 0; index < highScores.length; index++) {
    var li = document.createElement("li");
    li.innerText = `${highScores[index].initials}: ${highScores[index].score}`
    ul.appendChild(li);
}
body.appendChild(ul);