const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.booked');
const total = document.getElementById('.total');

container.addEventListener('click',(e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')){
        console.log(e.target);
        e.target.classList.toggle('selected');
    }
}
);
