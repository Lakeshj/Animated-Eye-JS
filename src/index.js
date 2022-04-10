let pupils = document.getElementsByClassName('pupil');

let pupilsArr = Array.from(pupils);

// mouth expression

const minion = document.querySelector('.minion');
const container = document.querySelector('.container');
const HapMouth = document.querySelector('.HapMouth');
const SadMouth = document.querySelector('.SadMouth');


minion.addEventListener('mouseleave', () => {
    
    SadMouth.style.display = 'none'
    HapMouth.style.display = 'block'
});
minion.addEventListener('mouseenter', () => {
    
    SadMouth.style.display = 'block'
    HapMouth.style.display = 'none'
});


// pupils movement
let pupilsStartPoint = -29.5;
let pupilRange = 29.5;

// mouse x position 

let mouseXstartpoint = -50;
let mouseXEndpoint = window.innerHeight-mouseXstartpoint ; 
let currntXposition = 0;
let fracXValue = 0;

// mouse y position

let mouseYstartpoint = 295;
let mouseYEndpoint = window.innerHeight - mouseYstartpoint; 
let currntYposition = 0;
let fracYValue = 0;

let mouseXrange = mouseXEndpoint - mouseXstartpoint;

const mouseMove =  (event) => {
    // console.log(`x value ${ event.clientX } & Y value = ${ event.clientY }`);
    currntXposition = event.clientX - mouseXstartpoint;
    fracXValue = currntXposition / mouseXrange;
    // console.log("x = " + fracXValue);

    currntYposition = event.clientY;
    fracYValue = currntYposition / mouseYEndpoint;
    // console.log("x = " + fracYValue);

    let pupilXCurrentPosition = pupilsStartPoint + (fracXValue * pupilRange);
    let pupilYCurrentPosition = pupilsStartPoint + (fracYValue * pupilRange);

    // start = 0;
    // innerWidth 
    pupilsArr.forEach((CurrPupil) => {
        CurrPupil.style.transform = `translate(${pupilXCurrentPosition}px , ${pupilYCurrentPosition}px)`
    });
}
const mouseResize = (event) =>{
    mouseXEndpoint = window.innerHeight ; 
    mouseXEndpoint = window.innerHeight-mouseXstartpoint;
    mouseYEndpoint = window.innerHeight; 
    mouseYEndpoint = window.innerHeight - mouseYstartpoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', mouseResize);