//
//
//The following code is for Speech Recognition and the taking of input and processing output
//
//

//Grabbing the SpeechRecognition Object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Creating a variable to store the SpeechRecognition object
const recognition = new SpeechRecognition();

//this will make the results print before waiting for the user to end speech
recognition.interimResults = true;

//Grabbing additional variables
const botSpace = document.querySelector('#response');
const startButton = document.querySelector('#start');

//Creating a p element to store the words spoken
let p = document.createElement('p');

p.textContent = "Allow accessibility to anything QTPI requests for a full experience";
    
const words = document.querySelector('#words');

words.appendChild(p);


//function that activates when the user speaks and grabs the transcript of the results
recognition.addEventListener('result', e => {

    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;


    //the following is a bunch of if statements which is the main drive of QTPI's response system
    if(transcript.includes('hello')){

        if(e.results[0].isFinal){

            process('Hello');

        }

    } else if(transcript.includes('hi')){

        if(e.results[0].isFinal){

            process('Hi');

        }

    } else if(transcript.includes('new tab')){

        if(e.results[0].isFinal){

            process('I\'m on it');

            setTimeout(function(){window.open('https://google.com')}, 2000);
        }

    } else if(transcript.includes('divide by 0')) {

        if(e.results[0].isFinal){

            process('Imagine you have zero cookies and you want to share them with zero friends. Now you\'re sad because you\'ve realised you have no friends.');

        }
        
    } 
    
    else {

        if(e.results[0].isFinal){

            process('Sorry, I don\'t understand');

        }

    }

    console.log(transcript);

});

//function to start the conversation
function letsTalk(){

    recognition.start();

    startButton.classList.add('glow');

    botSpace.innerHTML = '';

    p.textContent = '';

}


//function to process the user's command and specify an output
function process(para){

    startButton.classList.remove('glow');

    let respond = para;

    botSpeak(respond);

    botSpace.innerHTML = respond;

}