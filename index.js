const modal = document.querySelector ('.modal');
const openModal = document.querySelector ('#surprisebutton');
const closeModal = document.querySelector ('#closemodalbutton');
const video = document.querySelector('#birthdaysong');

openModal.addEventListener('click', () => {
    modal.showModal();
    playVideo();


})

function playVideo(){
    video.play();
}

closeModal.addEventListener('click', () =>{
    modal.close();
}) 