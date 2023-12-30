// mottos everyday
const mottos = [
    {
        motto: "Where there is a will, there is a way.",
        from: "Unknown"
    },
    {
        motto: "The first principle is that you must not fool yourself and you are the easiest person to fool.",
        from: "Richard Feynman"
    },
    {
        motto: "Before software should be reusable, it should be usable.",
        from: "Ralph Johnson"
    },
    {
        motto: "Simplicity, carried to the extreme, becomes elegance.",
        from: "Jon Franklin"
    },
    {
        motto: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        from: "Martin Fowler"
    },
    {
        motto: "Theorem: Any combinational logic function can be implemented as a networks of logic gates.",
        from: "Unknown"
    }
]

function getRandomMottoIndex() {
    return Math.floor(Math.random() * mottos.length);
}

var mottoIndex = getRandomMottoIndex();

const motto = document.getElementById("motto");
motto.textContent = mottos[mottoIndex].motto;

const from = document.getElementById("from");
from.textContent = mottos[mottoIndex].from;