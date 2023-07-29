const outputElement = document.getElementById("output");

let frame = 0;
let frame02 = 0;

const frames = [
                " ******* ",
                "    *******    ",
                "       *******       ",
                "          *******          ",
                "             *******             ",
                "                *******                ",
                "                   *******                   ",
                "                *******                ",
                "             *******             ",
                "          *******          ",
                "       *******       ",
                "    *******    "
            ];

function updateDonut () {
    outputElement.textContent = frames[frame];
    frame = (frame + 1) % frames.length;
}

setInterval(updateDonut, 200);