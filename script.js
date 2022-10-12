const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const seats = document.querySelectorAll('.row.seat:not(.booked');
const total = document.getElementById('.total');

// function booking (b, b1 ,b2){
//     b.classList.toggle(b1);
//     b.classList.toggle(b2);
// }
// function togglebooking (b ,b1,b2){
//     booking(btn ,"selected", "booked");
// }

container.addEventListener('click',(e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')){
        // console.log(e.target);
        e.target.classList.toggle('selected');
    }
}   
);

container.addEventListener('click',(e) => {
    if (e.target.classList.contains('selected') && !e.target.classList.contains('booked')){
        btn.onclick =() => {
        //  e.target.classList.toggle(togglebooking());
         e.target.classList.replace("selected", "booked");
        }

    }
})

// btn.onclick =() => {
//     console.log(e.target);
//  e.target.classList.toggle('booked');
// }






// btn.('click',(e)=> {
//     if (e.target.classList.contains('selected')){
//         e.target.classList.toggle('booked');

//     }
//     }
//);


// btn.onclick =() => {
//     if (e.target.classList.contains('selected')){
//              e.target.classList.toggle('booked');

// }
// }

// container.addEventListener('click', (e) => {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
//         console.log(e.target);
//         e.target.classList.toggle('selected');
//      }   
      
//     if (btn.onclick = (e) => {
//             if (e.target.classList.contains('selected')) {
//                 e.target.classList.toggle('booked');

//             })
//     );
