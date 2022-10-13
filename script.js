const container = document.querySelector('.container');
const premiumContainer = document.querySelector('.premium-container');
const btn = document.querySelector('#btn');
const seats = document.querySelectorAll('.row .seat:not(.booked');
const total = document.getElementById('total');
const standard = document.querySelector('.standard');
const premium = document.querySelector('.premium');
const standardPrice = document.getElementById('standard-price');

function userSelectedseat() {
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedseats);
    const selectedseatcount = selectedseats.length;
    // console.log(selectedseatcount);
    total.innerText = selectedseatcount * 120;
}
function useralreadyselectedseat(){
    const alreadyselectedseats = document.querySelectorAll('.row .seat.selected');
    // console.log(alreadyselectedseats);
    alreadyselectedseats.forEach(function  (div){
        div.classList.replace ("selected", "booked");
        console.log(div);
    })
}

premiumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
    }

}
);

premium.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
            //  e.target.classList.toggle(togglebooking());
            e.target.classList.replace("selected", "booked");
        }

    }
});

//    for selection 
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
    }

    userSelectedseat();
}
);

// when clicked paybtn 
standard.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
                useralreadyselectedseat();

        }
    }
    
});

