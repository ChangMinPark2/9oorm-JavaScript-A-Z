//Method -> 해당 객체를 가리킨다. (Object)
const audio = {
    title:'a',
    play() {
        console.log('play this', this);
    }
}

audio.play();

audio.stop = function () {
    console.log('stop this', this);
}

audio.stop();

// // Function -> windows Object
// function  playAudio() {
//     console.log(this);
// }

//Constructor Function -> {}

function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio = new Audio('a');