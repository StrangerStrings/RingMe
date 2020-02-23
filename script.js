// GLORIOUS SCRIPT FOR PURPOSE OF MAKE.. 
//   ..SPOTED BACKGROUND AND FLYING RINGS
//         -   - - - - - - -   -

const Main = document.getElementsByTagName('main')[0]

createExpandingRing();

function createExpandingRing() {

    const ring = document.createElement('article')
    Main.appendChild(ring)
    waitThen(() => {ring.classList.add('expandingRing')})

    const middleBit = document.createElement('section')
    Main.appendChild(middleBit)
    waitThen(() => {middleBit.classList.add('expandingRing')})
}

function waitThen(fnc) {
    setTimeout(fnc,1)
}
