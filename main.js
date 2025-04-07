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
    console.log(window.scrollY )
    if(window.scrollY >= 100 && window.scrollY <= 1000  ){
        appear()
        hideVideo()
        hideSchool()
        linkDisappear()
    }
    else if(window.scrollY >= 1400 && window.scrollY <= 2700 || window.scrollY === 0){
        displayVideo()
        disappear()
        hideSchool()
        linkDisappear()
    }
    if(window.scrollY >= 2700){
        linkAppear()
        hideVideo()
    }
    if(window.scrollY < 2300){
        linkDisappear()
    }
    if(window.scrollY >= 2310){
        displaySchool()
        hideVideo()
    }
    // if(window.screenY >= 2900){
    //     hideSchool()
    // }
}
function appear(){
    skills.forEach(element => {
        element.style.animation =  `appear  1s ease 0s forwards`
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
    hideSchool()
    let emojies = document.getElementById('emojies')
    emojies.style.transform = 'translateX(0%)'
    emojies.style.transition = "0.5s ease-in-out 0.5s"
    setTimeout(()=>{
        emojiAppear()
    }, 500)
}
function linkDisappear() {
    let linkImg = document.querySelector("#link img")
    linkImg.style.transform = 'translateX(-200%)'
    linkImg.style.transition = "0.5s ease-in-out 0.5s"

    let emojies = document.getElementById('emojies')
    emojies.style.transform = 'translateX(200%)'
    emojies.style.transition = "0.5s ease-in-out 0.5s"

    setTimeout(()=>{
        emojiDisappear()
    }, 500)
}

let infoButton = document.getElementById('infoButton')
let personalDetails = document.querySelector('.personalDetails')
let buttonUp = document.querySelector('.buttonUp')
let personalInfo = document.querySelectorAll('.personalInfo')


infoButton.onclick = ()=>{
    personalButtonAppear()
    personalInfoSlide()
} 
buttonUp.onclick = () => {
    personalInfoHide()
}
function personalButtonAppear(){
    personalDetails.style.transform = 'translateY(0%)';
    personalDetails.style.transition = "1s ease-in-out 0s"
}
function personalButtonDisappear(){
    personalDetails.style.transform = 'translateY(-200%)';
    personalDetails.style.transition = "1s ease-in-out 0s";
}
function personalInfoSlide(){
    personalInfo[0].style.transform = 'translateX(0%)';
    personalInfo[0].style.transition = "0.7s ease-in-out 0.7s";
    personalInfo[1].style.transform = 'translateX(0%)';
    personalInfo[1].style.transition = "0.7s ease-in-out 0.7s";
}
function personalInfoHide(){
    personalInfo[0].style.transform = 'translateX(-100%)';
    personalInfo[0].style.transition = "0.7s ease-in-out 0.5s";
    personalInfo[1].style.transform = 'translateX(100%)';
    personalInfo[1].style.transition = "0.7s ease-in-out 0.5s";
    setTimeout(()=>{
        personalButtonDisappear()
    }, 1000)
}

let ytVideo = document.querySelector('#ytVideo iframe')
let ytParagraph = document.querySelector('#ytVideo p')

function displayVideo(){
    ytVideo.style.transform = 'translateX(0%)';
    ytVideo.style.transition = "0.5s ease-in-out 0s";
    ytParagraph.style.transform = 'translateX(0%)';
    ytParagraph.style.transition = "0.5s ease-in-out 0s";

}
function hideVideo(){
    ytVideo.style.transform = 'translateX(-200%)';
    ytVideo.style.transition = "0.5s ease-in-out 0s";
    ytParagraph.style.transform = 'translateX(200%)';
    ytParagraph.style.transition = "0.5s ease-in-out 0s";
}

let schoolLocationIframe = document.querySelector('#schoolLocation iframe')
let schoolLocationParagraph = document.querySelector('#schoolLocation p')

function displaySchool(){
    schoolLocationIframe.style.transform = 'translateX(0%)';
    schoolLocationIframe.style.transition = "0.5s ease-in-out 0s";
    schoolLocationParagraph.style.transform = 'translateX(0%)';
    schoolLocationParagraph.style.transition = "0.5s ease-in-out 0s";
}
function hideSchool(){
    console.log('hello')
    schoolLocationIframe.style.transform = 'translateX(200%)';
    schoolLocationIframe.style.transition = "0.5s ease-in-out 0s";
    schoolLocationParagraph.style.transform = 'translateX(-200%)';
    schoolLocationParagraph.style.transition = "0.5s ease-in-out 0s";
}