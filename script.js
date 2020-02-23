// GLORIOUS SCRIPT FOR PURPOSE OF MAKE.. 
//   ..SPOTED BACKGROUND AND FLYING RINGS
//         -   - - - - - - -   -

const Main = document.getElementsByTagName('main')[0]
let TimeTilDeletion = 2000

window.addEventListener('keydown', ()=>{
    if (event.key == ' '){
        createExpandingRing()
    }
    
    // number keys 1 - 9
    if (!isNaN(parseInt(event.key)) && event.key > 0){
        changeRingSpeed(event.key);
    }
})

window.addEventListener('keyup', ()=>{
    if (event.key == ' '){
        createExpandingMiddle()
    }
})

function changeRingSpeed(number) {
    styleSheet = document.styleSheets[2];
    styleSheet.deleteRule(1);
    styleSheet.deleteRule(0);
    var secs = number / 3;
    TimeTilDeletion = secs * 1700
    styleSheet.insertRule(`article.expanding{
            animation: ring ${secs}s forwards;
        }`, 0);
    styleSheet.insertRule(`section.expanding{
            animation: middleBit ${secs + 0.1}s forwards;
        }`, 1);
}

function createExpandingRing() {
    const ring = document.createElement('article')
    Main.appendChild(ring)
    setTimeout(()=>{
        ring.classList.add('expanding')
    },35)
    waitThenDispose(ring)
}
function createExpandingMiddle(){
    const middleBit = document.createElement('section')
    Main.appendChild(middleBit)
    middleBit.classList.add('expanding')
    waitThenDispose(middleBit)
}


function waitThenDispose(div){
    setTimeout(() => {
        Main.removeChild(div)
    },TimeTilDeletion)
}
