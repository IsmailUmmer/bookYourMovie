const container = document.querySelector('.container');
const premiumContainer = document.querySelector('.premium-container');
const ticket = document.getElementById('ticketid')
const btn = document.querySelector('#btn');
const seats = document.querySelectorAll('.row .seat:not(.booked');
const total = document.getElementById('total');
const standard = document.querySelector('.standard');
const premium = document.querySelector('.premium');
const standardPrice = document.getElementById('standard-price');

// To select the premium seats
premiumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        premiumUserSelectedSeat();
    }
});
// To book the premium seats
premium.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
            useralreadyselectedPremiumseat();
        }
    }
});

//  To select the standerd seats
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        userSelectedSeat();
    }
});

// To book the standard seats
standard.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
            useralreadyselectedseat();
        }
    }
});
// ticket rate for standard
function userSelectedSeat() {
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    const selectedseatcount = selectedseats.length;
    total.innerText = selectedseatcount * 120;
}
// ticket rate for premium
function premiumUserSelectedSeat() {
    const premiumselectedseats = document.querySelectorAll('.row .premium-seat.selected');
    const premiumselectedseatcount = premiumselectedseats.length;
    // console.log(premiumselectedseatcount);
    total.innerText = premiumselectedseatcount * 150;
}
// ticket booking funtion for premium
function useralreadyselectedPremiumseat() {
    const alreadyselectedPremiumSeats = document.querySelectorAll('.row .premium-seat.selected');
    // console.log(alreadyselectedPremiumSeats);
    alreadyselectedPremiumSeats.forEach(function (div) {
        div.classList.replace("selected", "booked");
        // console.log(div);
    })
}
// ticket booking funtion for standard
function useralreadyselectedseat() {
    const alreadyselectedseats = document.querySelectorAll('.row .seat.selected');
    // console.log(alreadyselectedseats);
    alreadyselectedseats.forEach(function (div) {
        div.classList.replace("selected", "booked");
        // console.log(div);
    })
}
// ticket value change notifier
ticket.addEventListener('change', ticketcount)
function ticketcount(e) {
    ticketSelectedCount = parseInt(e.target.value)
    console.log(ticketSelectedCount);
}
