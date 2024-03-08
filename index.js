let timerElement = document.getElementById("timer")
let countdown = 10;
let IntervalId = setInterval(function() {
    countdown = countdown - 1;
    timerElement.textContent = countdown;
    if (countdown === 0) {
        timerElement.textContent = "BOOM";
        clearInterval(IntervalId);
    }
}, 1000);


let defuserEl = document.getElementById("defuser");
defuserEl.addEventListener("keydown", function(event) {
    let defuserText = defuserEl.value;
    if (event.key === "Enter" && defuserText === "defuse" && countdown !== 0) {
        timerElement.textContent = "CONGRATULATIONS";
        clearInterval(IntervalId);


    } else if (event.key === "Enter") {
        defuserEl.value = "";
        alert("try again");
    }

});