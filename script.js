// GLORIOUS SCRIPT FOR PURPOSE OF MAKE.. 
//   ..SPOTED BACKGROUND AND FLYING RINGS
//         -   - - - - - - -   -

const Main = document.getElementsByTagName('main')[0]
let TimeTilDeletion = 2000

window.addEventListener('keydown', ()=>{
    if (event.key == ' '){
        createExpandingRing()
    }

window.addEventListener('keyup', ()=>{
    if (event.key == ' '){
        createExpandingMiddle()
    }
})
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
