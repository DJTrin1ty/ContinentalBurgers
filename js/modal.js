// Get modal elements
let modal = document.getElementById('simpleModal');

// Get open modal button
let modalBtn = document.getElementById('modalBtn');

// Get close modal button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

let menu = document.getElementsByClassName('modal-content')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);



// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal with outside click
function outsideClick(e) {
    if(e.target == menu) {
        modal.style.display = 'none';
    }
}