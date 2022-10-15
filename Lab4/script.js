function getRandomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}
function changeColor1() {
    document.getElementById("firstElement").style.background = getRandomColor();
    document.getElementById("firstElement").style.color = getRandomColor();
}
function changeColor2() {
    document.querySelector(".secondElement").style.background = getRandomColor();
    document.querySelector(".secondElement").style.color = getRandomColor();
}
function add() {
    document.getElementById("picture").src = "https://www.letemps.ch/sites/default/files/styles/original/public/media/2022/02/14/59f42e4_2022-02-14t163144z-1603015918-rc2rjs9t1m9w-rtrmadp-3-ukraine-crisis-russia-germany_0.JPG?itok=v-3lZRc3"
    document.getElementById("picture").style.display = "inline"
}
function increase() {
    document.getElementById("picture").style.width = (document.getElementById("picture").offsetWidth + 10) + "px"
}
function reduce() {
    document.getElementById("picture").style.width = (document.getElementById("picture").offsetWidth - 10) + "px"
}
function remove() {
    document.getElementById("picture").style.display = "none"
}