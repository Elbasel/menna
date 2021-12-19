function getRandomArbitrary(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}


function changeText() {

    if (fashel.currentTime < fashel.duration && counter > 7) {
        return
    }

    if (counter > 12 && counter < 20) {
        debugger
        catVideo = document.querySelector('video')
        if (!!catVideo) {
            if (catVideo.currentTime < 40) return
        }
    }

    if (counter === 1) {
        music.play()
    } else if (counter === 7) {
        const pauseTime = music.currentTime
        music.pause()
        fashel.addEventListener('timeupdate', updateProg)
        fashel.play()
        addProg()
        fashel.onended = function() {
            music.currentTime = pauseTime + 10
            music.play()
        }
        counter++
        return

        // } else if ([12, 13, 14].includes(counter)) {

    } else if (counter === 12) {
        // debugger
        music.pause()
        body.innerHTML = ''
        const catVideo = document.createElement('video')
        catVideo.setAttribute('src', './cat.mp4')
            // catVideo.setAttribute('controls', 'controls')
        catVideo.play()
        counter++
        // catVideo.addEventListener('click', () => counter++)
        // catVideo.addEventListener('tap', () => counter++)
        // catVideo.addEventListener('touchstart', () => counter++)
        catVideo.onclick = () => counter++;
        catVideo.setAttribute('onclick', () => counter++)
            // body.appendChild(catVideo)
        const container = document.createElement('div')
        container.addEventListener('click', () => counter++)
        body.appendChild(container)
        container.appendChild(catVideo)

        return

    }


    if (counter > 12 && counterFlag) {
        counter = 12
        counterFlag = false
        bye.play()
    }

    body.innerHTML = ''

    const newHead = document.createElement('h1')
    if (counter > textList.length) {
        counter = textList.length - 1
    }
    newHead.textContent = textList[counter]

    const randomAnimationIndex = getRandomArbitrary(0, animationList.length)
    const randomFontStyleIndex = getRandomArbitrary(0, fontStylesList.length)
    newHead.classList.add(animationList[randomAnimationIndex])
    newHead.classList.add(fontStylesList[randomFontStyleIndex])
        // newHead.addEventListener('click', changeText)
    body.appendChild(newHead)
    counter++
}


function addProg() {
    const prog = document.createElement('progress')
    prog.setAttribute('max', 100)
    prog.setAttribute('value', 0)
    body.appendChild(prog)

    updateProg()
}

function updateProg() {
    const prog = document.querySelector('progress')
    const percentage = Math.floor(100 / fashel.duration) * fashel.currentTime
    prog.value = percentage + 2
}

animationList = ['focus-in-expand', 'tracking-in-contract-bck-bottom', 'tracking-in-contract', 'animate__bounceIn', 'animate__flip']

fontStylesList = ['flaming-text', 'blue-background-text', 'lux', 'comic']

let counterFlag = true

let textList = ['MENNA', 'Hello', 'mesh betzakry leeeh??', 'mama betkolk zakry ya fashla', 'we kefaya LUDO', 'we kol showa neshofk online 3la facebook', 'shofy halek ya fashla', 'yla komy zakry', 'mesh kolt komy zakry!!!', 'seby el mobile we komy zakry yla', 'enty lesa hena???', 'shofy el video dah we komy zakry yla', 'yla 5las keda mfesh 7aga tany', '5las ya benty mfesh 7aga tany kolna', 'ro7y 5las', 'bye bye', 'slamoz', 'go to hell!', 'bs b2a', 'don\'t click anymore please!', 'byeeeee']
let counter = 0;

const head = document.querySelector('h1')
const body = document.querySelector('body')
const music = new Audio('./music.mp3');
const fashel = new Audio('./fashel.mp3')
const bye = new Audio('./bye.mp3')




changeText()
    // head.addEventListener('click', changeText)
body.addEventListener('click', changeText)