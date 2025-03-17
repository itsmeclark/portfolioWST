const colors = [
    "#FF5733", // Vibrant Red-Orange
    "#33FF57", // Bright Green
    "#3357FF", // Vivid Blue
    "#FF33A1", // Hot Pink
    "#A133FF", // Electric Purple
    "#33FFF5", // Aqua Blue
    "#F5FF33", // Neon Yellow
    "#FF8C33", // Bright Orange
    "#33FF8C", // Mint Green
    "#8C33FF"  // Deep Violet
];

function randomColor() {
    let random = Math.floor(Math.random() * colors.length);
    let colorsRandom = colors[random];

    document.getElementById("skillBorder").style.boxShadow = `0 0 50px ${colorsRandom}`;

}
setInterval(randomColor, 300);