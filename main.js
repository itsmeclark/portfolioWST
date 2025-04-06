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

let skills = document.querySelectorAll('.skillsContainer')
window.onscroll = () => {
    //console.log(window.scrollY)
   // console.log(left)
    //console.log(window.scrollY)
    // if(window.scrollY == 0 || window.scrollY == ){
    //     left = 0
    // }
    if(window.scrollY >= 100 && window.scrollY <= 1000  ){
        appear()
    }
    else if(window.scrollY >= 1050 && window.scrollY <= 1500 || window.scrollY === 0){
        disappear()
    }
    if(window.scrollY >= 2500){
        console.log(window.scrollY)
        linkAppear()
    }
    if(window.scrollY < 2500){
        linkDisappear()
    }
}
function appear(){
    skills.forEach(element => {
        element.style.animation =  `appear  1s ease 0.2s forwards`
    });
}
function disappear(){
    skills.forEach(element => {
        element.style.animation =  `disappear 0.5s ease 0s forwards`
    })
}


function emojiAppear(){
    let emoji = document.querySelector('.emoji1')
    emoji.style.transform = "translateX(0%)";
    emoji.style.transition = "0.5s ease-in-out 0.5s"
    let emojiTwo = document.querySelector('.emoji2')
    emojiTwo.style.transform = "translateX(0%)";
    emojiTwo.style.transition = "0.5s ease-in-out 0.5s"
}
function emojiDisappear(){
    let emoji = document.querySelector('.emoji1')
    emoji.style.transform = "translateX(-150%)";
    emoji.style.transition = "0.5s ease-in-out 0.5s"
    let emojiTwo = document.querySelector('.emoji2')
    emojiTwo.style.transform = "translateX(150%)";
    emojiTwo.style.transition = "0.5s ease-in-out 0.5s"
}
function linkAppear(){
    let linkImg = document.querySelector("#link img")
    linkImg.style.transform = 'translateX(0%)'
    linkImg.style.transition = "0.5s ease-in-out 0.5s"

    let emojies = document.getElementById('emojies')
    emojies.style.transform = 'translateX(0%)'
    emojies.style.transition = "0.5s ease-in-out 0.5s"
    setTimeout(()=>{
        emojiAppear()
    }, 500)
}
function linkDisappear() {
    let linkImg = document.querySelector("#link img")
    linkImg.style.transform = 'translateX(-130%)'
    linkImg.style.transition = "0.5s ease-in-out 0.5s"

    let emojies = document.getElementById('emojies')
    emojies.style.transform = 'translateX(130%)'
    emojies.style.transition = "0.5s ease-in-out 0.5s"

    setTimeout(()=>{
        emojiDisappear()
    }, 500)
}