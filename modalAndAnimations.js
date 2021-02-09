//
//
//The following code is for the animation of the commands button
//
//

//Grabbing the element
let commandsButton = document.querySelector('#commands');
let commandsText = document.getElementById('commandsText');

//Adding event listener
commandsButton.addEventListener('mouseover', extendButton);
commandsButton.addEventListener('mouseout', retractButton);
commandsButton.addEventListener('mouseleave', retractButton);

//function to extend button on hover
function extendButton(){

    commandsButton.style.width = 220 + 'px';

    setTimeout(function () {
        commandsText.classList.remove('hide');
    }, 200);

}


//function to retract button after the cursor is off it
function retractButton() {

    commandsButton.style.width = 40 + 'px';

    commandsText.classList.add('hide');

}


//
//
//The following code will be for the modal
//
//

const modal = document.querySelector('#commandsModal');

const modalContent = document.querySelector('#commandsModal-content');

const closeButton = modalContent.querySelector('span');


commandsButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);


function openModal(){

    modal.classList.remove('hide');

}

function closeModal(){

    modal.classList.add('hide');

}



//
//
//The follwing code is for the comments
//
//

const commentsButton = document.querySelector('#comments');
const commentsSection = document.querySelector('#commentsModal');
const commentsCloseButton = commentsSection.querySelector('span');

function openComments(){

    commentsSection.classList.remove('hide');

}

function closeComments(){

    commentsSection.classList.add('hide');

}

commentsButton.addEventListener('click', openComments);

commentsCloseButton.addEventListener('click', closeComments);