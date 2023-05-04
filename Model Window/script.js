'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', openModal);  
}
btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// implementing keypressed, keydown, keyup

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape'){
        
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
});