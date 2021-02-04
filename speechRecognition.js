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

    //
    //QTPI Interactions
    //
    if(transcript.includes('hello')){

        if(e.results[0].isFinal){

            process('Hello');

        }

    }
        
    else if(transcript.includes('divide by 0')) {

        if(e.results[0].isFinal){

            process('Imagine you have zero cookies and you want to share them with zero friends. Now you\'re sad because you\'ve realised you have no friends.');

        }
        
    }
    
    else if(transcript.includes('current location')){

        if(e.results[0].isFinal){

            process("I wouldn't like to harm your privacy");

        }

    }

    else if(transcript.includes("your name")){

        if(e.results[0].isFinal){

            startButton.classList.remove('glow');

            botSpeak("My name is QTPie");

            botSpace.innerHTML = "My name is QTPI";

        }

    }

    else if(transcript.includes("your gender")){

        if(e.results[0].isFinal){

            process("Machine. My voice only deceives");

        }

    }

    else if(transcript.includes("your age") || transcript.includes('how old are you')){

        if(e.results[0].isFinal){

            process("If I had to say, I was just created");

        }

    }

    else if(transcript.includes("I like u")){

        if(e.results[0].isFinal){

            process("Thanks");

        }

    }

    else if(transcript.includes("I love you")){

        if(e.results[0].isFinal){

            process("Sadly, I can't return that love");

        }

    }

    else if(transcript.includes("my birthday")){

        if(e.results[0].isFinal){

            process("Happy Birthday to you. Sorry if it didn't sound sincere");

        }

    }

    else if(transcript.includes("can you do math")){

        if(e.results[0].isFinal){

            process("If you want me to do math, use the 'search' command. Example: search 2 + 2");

        }

    }

    else if(transcript.includes("who am I")){

        if(e.results[0].isFinal){

            process("The user");

        }

    }

    else if(transcript.includes("what's my name")){

        if(e.results[0].isFinal){

            process("user");

        }

    }

    else if(transcript.includes("your hobby")){

        if(e.results[0].isFinal){

            process("I like to stare blankly into the eternal darkness");

        }

    }

    else if(transcript.includes("your favourite food")){

        if(e.results[0].isFinal){

            process("Electricity, and I only greet people if I get internet");

        }

    }

    else if(transcript.includes("friend")){

        if(e.results[0].isFinal){

            process("The only friend I could ever have is you, user");

        }

    }

    else if(transcript.includes("who's Joe")){

        if(e.results[0].isFinal){

            process("A question you should never ask. Never speak of it again");

        }

    }

    else if(transcript.includes("who is your creator")){

        if(e.results[0].isFinal){

            process("The one and only, ZumTheZazaKing");

        }

    }

    else if(transcript.includes("about yourself")){

        if(e.results[0].isFinal){

            process("I am a Voice Assistant which is still under development and I am not counted as AI");

        }

    }

    else if(transcript.includes("about your creator") || transcript.includes("about the Creator")){

        if(e.results[0].isFinal){

            process("ZumTheZazaKing is just your average person. They are also a weeb. Visit their portfolio to find out more");

        }

    }

    else if(transcript.includes("who is HK")){

        if(e.results[0].isFinal){

            process("HK is a really awesome person. Check out his Instagram: @_hkuzairee");

        }

    }








    //
    //QTPI Commands
    //
    else if(transcript.includes('new tab')){

        if(e.results[0].isFinal){

            process('I\'m on it');

            setTimeout(function(){window.open('https://google.com')}, 2000);
        }

    }

    else if(transcript.includes('Instagram')){

        if(e.results[0].isFinal){

            process('Opening Instagram');

            setTimeout(function(){window.open('https://www.instagram.com/')}, 2000);
        }

    }

    else if(transcript.includes('memes') || transcript.includes('Reddit')){

        if(e.results[0].isFinal){

            process('Opening Reddit');

            setTimeout(function(){window.open('https://www.reddit.com/')}, 2000);
        }

    }

    else if(transcript.includes('YouTube')){

        if(e.results[0].isFinal){

            process('Opening YouTube');

            setTimeout(function(){window.open('https://www.youtube.com/')}, 2000);
        }

    }

    else if(transcript.includes('search')){

        if(e.results[0].isFinal){

            let searchItem = transcript.slice(6,);

            process('Searching ' + searchItem);

            setTimeout(function(){window.open('https://www.google.com/search?q=' + searchItem)}, 2000);

        }

    }

    else if(transcript.includes('telegram')){

        if(e.results[0].isFinal){

            process('Opening Telegram');

            setTimeout(function(){window.open('https://web.telegram.org/')}, 2000);
        }

    }

    else if(transcript.includes('WhatsApp')){

        if(e.results[0].isFinal){

            process('Opening WhatsApp');

            setTimeout(function(){window.open('https://web.whatsapp.com/')}, 2000);
        }

    }

    else if(transcript.includes('Discord')){

        if(e.results[0].isFinal){

            process('Opening Discord');

            setTimeout(function(){window.open('https://discord.com/')}, 2000);
        }

    }

    else if(transcript.includes('Roblox') || transcript.includes('go commit die')){

        if(e.results[0].isFinal){

            process('Opening Roblox');

            setTimeout(function(){window.open('https://www.roblox.com/')}, 2000);
        }

    }

    else if(transcript.includes('what time is it')){

        if(e.results[0].isFinal){

            let currentHour = new Date().getHours();

            let currentMinute = new Date().getMinutes();

            process('It is currently ' + currentHour + ':' + currentMinute);

        }

    }

    else if(transcript.includes('twitch')){

        if(e.results[0].isFinal){

            process('Opening Twitch');

            setTimeout(function(){window.open('https://www.twitch.tv/')}, 2000);
        }

    }

    else if(transcript.includes('w3schools')){

        if(e.results[0].isFinal){

            process('Opening w3schools');

            setTimeout(function(){window.open('https://www.w3schools.com/')}, 2000);
        }

    }

    else if(transcript.includes('commands')){

        if(e.results[0].isFinal){

            startButton.classList.remove('glow');

            modal.classList.remove('hide');

        }

    }

    else if(transcript.includes('set a timer')){

        if(e.results[0].isFinal){

            process('Setting a timer on Google');

            setTimeout(function(){window.open('https://www.google.com/search?q=timer')}, 2000);
        }

    }

    else if(transcript.includes('play a game')){

        if(e.results[0].isFinal){

            process("Opening a random game");

            let games = [
                "https://zumthezazaking.github.io/JS-Rock-Paper-Scissors-Game/",
                "https://zumthezazaking.github.io/JS-Coin-Toss-Game/",
                "https://zumthezazaking.github.io/Dont-Press-The-Red-Button/",
                "https://zumthezazaking.github.io/Clicker-Counter/",
                "https://zumthezazaking.github.io/How-Long-Can-You-Hold-The-Button/"
            ]

            let randomiser = Math.floor(Math.random()*Math.floor(games.length));

            setTimeout(function(){window.open(games[randomiser])}, 2000);

        }

    }

    else if(transcript.includes('creator portfolio')){

        if(e.results[0].isFinal){

            process('Opening ZumTheZazaKing\'s Portfolio');

            setTimeout(function(){window.open('https://zumthezazaking.github.io')}, 2000);
        }

    }

    else if(transcript.includes('change voice')){

        if(e.results[0].isFinal){

            process('Voice selection is available at the bottom of the screen');

        }

    }

    else if(transcript.includes('I want to eat')){

        if(e.results[0].isFinal){

            process('Searching for nearest food places');

            setTimeout(function(){window.open('https://www.google.com/search?q=nearest food places')}, 2000);
        }

    }

    else if(transcript.includes('a quote')){

        if(e.results[0].isFinal){

            let quotes = [
                'Act as if what you do makes a difference. It does',
                "Just because you're trash doesn't mean you can't do anything. Remember, it's garbage can, not garbage can't",
                'Never regret anything that made you smile',
                'Aspire to inspire before we expire',
                'Everything you can imagine is real',
                'What we think, we become',
                'Tough times never last but tough people do',
                'If you tell the truth, you don’t have to remember anything',
                'I could agree with you but then we would both be wrong',
                'I don’t need it to be easy, I need it to be worth it',
                'Doubt kills more dreams than failure ever will',
                'Never let your emotions overpower your intelligence',
                "Just because you're unique, doesn't mean you're useful"
            ]

            let randomiser = Math.floor(Math.random()*Math.floor(quotes.length));

            process(quotes[randomiser]);

        }

    }

    else if(transcript.includes('a joke')){

        if(e.results[0].isFinal){

            let jokes = [
                'Where are average things manufactured? The satisfactory',
                'Why don’t scientists trust atoms? Because they make up everything',
                'What did the Tin Man say when he got run over by a steamroller? “Curses! Foil again!”',
                'What did the Buddhist say to the hot dog vendor? Make me one with everything',
                'Did you hear about the claustrophobic astronaut? He just needed a little space',
                'A man tells his doctor, “Doc, help me. I’m addicted to Twitter!” The doctor replies, “Sorry, I don’t follow you …”',
            ]

            let randomiser = Math.floor(Math.random()*Math.floor(jokes.length));

            process(jokes[randomiser]);

        }

    }

    else if(transcript.includes('freeze')){

        if(e.results[0].isFinal){

            process('Opening Frizz YouTube Channel');

            setTimeout(function(){window.open('https://www.youtube.com/channel/UCRZXw-l6rc8_3QhHuTiVtNw')}, 3000);
        }

    }

    else if(transcript.includes('squid on YT')){

        if(e.results[0].isFinal){

            process('Opening Ra Sotong YouTube Channel');

            setTimeout(function(){window.open('https://www.youtube.com/channel/UCLJ9Lp-tfWxU6Jh_4VeqxvQ')}, 3000);
        }

    }
    
    
    //
    //Response when a response can't be made
    //
    else {

        let errorReplies = [
            "Sorry, I can't understand", 
            "What are you trying to say?",
            "If you're telling me to do math, use the 'search' command. Example: search 2 + 2"
        ];

        let randomiser = Math.floor(Math.random()*Math.floor(errorReplies.length));

        if(e.results[0].isFinal){

            process(errorReplies[randomiser]);

        }

    }

    console.log(transcript);

});

//function to start the conversation
function letsTalk(){

    speechSynthesis.cancel();

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
