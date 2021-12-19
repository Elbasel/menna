function getRandomArbitrary(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}


function changeText() {

    if (counter === 1) {
        music.play()
    } else if (counter === 6) {
        const pauseTime = music.currentTime
        music.pause()
        fashel.play()
        fashel.onended = function() {
            music.currentTime = pauseTime + 10
            music.play()
        }

    } else if ([11, 12, 13, 14].includes(counter)) {

        // debugger
        body.innerHTML = ''
        const catVideo = document.createElement('video')
        catVideo.setAttribute('src', './cat.mp4')
        catVideo.setAttribute('controls', 'controls')
        body.appendChild(catVideo)
        catVideo.play()
        counter++
        return

    }


    body.innerHTML = ''

    const newHead = document.createElement('h1')
    newHead.textContent = textList[counter]

    const randomAnimationIndex = getRandomArbitrary(0, animationList.length)
    const randomFontStyleIndex = getRandomArbitrary(0, fontStylesList.length)
    newHead.classList.add(animationList[randomAnimationIndex])
    newHead.classList.add(fontStylesList[randomFontStyleIndex])
        // newHead.addEventListener('click', changeText)
    body.appendChild(newHead)
    counter++
}



animationList = ['focus-in-expand', 'tracking-in-contract-bck-bottom', 'tracking-in-contract', 'animate__bounceIn', 'animate__flip']

fontStylesList = ['flaming-text', 'blue-background-text', 'lux', 'neon', 'comic']


let textList = ['MENNA', 'Hello', 'mesh betzakry leeeh??', 'mama betkolk zakry ya fashla', 'we kefaya LUDO', 'we kol showa neshofk online 3la facebook', 'shofy halek ya fashla', 'yla komy zakry', 'mesh kolt komy zakry!!!', 'seby el mobile we komy zakry yla', 'enty lesa hena???', 'shofy el video dah we komy zakry yla', 'yla 5las keda mfesh 7aga tany']
let counter = 0;

const head = document.querySelector('h1')
const body = document.querySelector('body')
const music = new Audio('./music.mp3');
const fashel = new Audio('./fashel.mp3')




changeText()
    // head.addEventListener('click', changeText)
body.addEventListener('click', changeText)