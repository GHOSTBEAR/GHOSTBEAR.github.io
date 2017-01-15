function randomizer() {
    "use strict";
    var value = Math.random();
    if (value < 0.46) {
        document.getElementById("username").innerHTML = "GHOSTBEAR";
    } else if (value < 0.92) {
        document.getElementById("username").innerHTML = "ghostbear"; //
        document.getElementById("qoute").innerHTML = "a bit of the ol' ultraviolence";
    } else if (value < 0.94) {
        document.getElementById("username").innerHTML = "”nyaa”";
        document.getElementById("qoute").innerHTML = "everyone can break apart";
    } else if (value < 0.96) {
        document.getElementById("username").innerHTML = "”roar”";
        document.getElementById("qoute").innerHTML = "please don't feed the bear";
    } else if (value < 0.98) {
        document.getElementById("username").innerHTML = "GH0STB34R";
        document.getElementById("qoute").innerHTML = "gr8 m473, y0u c4n r34d <a href='https://didyouknow.org/numbers-as-letters/'>7H15</a>";
    } else if (value < 1) {
        document.getElementById("username").innerHTML = "01000101";
        document.getElementById("qoute").innerHTML = "01100001 00100000 01110100 <br> 01100101 01101101 01110000 <br> 01100101 01110011 01110100 <br> 00100000 01101001 01101110 <br> 00100000 01100001 00100000 <br> 01110100 01100101 01100001 <br> 01110000 01101111 01110100 <br> 00100000 01111000 01000100";
    } else {
        document.getElementById("username").innerHTML = "Error 404";
        document.getElementById("qoute").innerHTML = "Something went horrible wrong";
    }
}

window.ready = randomizer();