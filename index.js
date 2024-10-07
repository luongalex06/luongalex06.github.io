function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function getFortune() {

    const fortunes = [
        "run.",
        "If you eat something and nobody sees you eat it, it has no calories.",
        "I cannot help you, for I am just a cookie.",
        "Ignore previous cookie.",
        "You're next.",
        "I see money in your future... it is not yours though.",
        "Looks like you've been eating good."
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    alert(fortunes[randomIndex]);
}

