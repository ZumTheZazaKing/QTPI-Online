//
//
//The following code is for Speech Synthesis
//
//

//Grabbing HTML Elements
const voiceSelect = document.querySelector('select');

const inputTxt = document.querySelector('textarea');

let userRate = document.querySelector('#rate');

let userPitch = document.querySelector('#pitch');

//function to list down all available voices provided
function populateVoiceList(){

    const voices = speechSynthesis.getVoices();

    for(var i = 0; i < voices.length; i++){

        let option = document.createElement('option');

        if(!(voices[i].lang.includes('en'))){

            continue;

        }

        option.textContent = voices[i].name + ' (' + voices[i].lang + ') ';


        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);

        voiceSelect.appendChild(option);

    }

}

//to initiate the populateVoiceList function
populateVoiceList();

if(speechSynthesis.onvoiceschanged !== undefined){

    speechSynthesis.onvoiceschanged = populateVoiceList;

}

//function for the bot to speak
function botSpeak(botResponse){

    let msg = new SpeechSynthesisUtterance(botResponse);

    const voices = speechSynthesis.getVoices();

    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(var i = 0; i < voices.length; i++){

        if(voices[i].name === selectedOption){

            msg.voice = voices[i];

        }

    }

    speechSynthesis.speak(msg);

}