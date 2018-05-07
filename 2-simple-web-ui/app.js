
// //--------------------------------------------------
// //using DOM api
// let box = document.querySelector('.alert')
// let showBtn = document.querySelector('.btn-primary')
// let hideBtn = document.querySelector('.btn-danger')
// hideBtn.addEventListener('click', (e) => {
//     box.style.display = 'none'
// })
// showBtn.addEventListener('click', (e) => {
//     box.style.display = ''
// })
// //--------------------------------------------------
// // xhr/fetch api
// document.querySelector('.btn-success')
//     .addEventListener('click', () => {
//         let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//         promise
//             .then((response) => response.json())
//             .then(todos => {
//                 let cardBody = document.querySelector('.card-body');
//                 cardBody.innerText = JSON.stringify(todos)
//             })
//     })

// //--------------------------------------------------



// Jquery

let box = $('.alert');
let cardBody = $('.card-body');
$('.btn-primary').click(() => {
    box.show(2000);
});
$('.btn-danger').click(() => {
    box.hide(2000);
});
$('.btn-success').click(() => {
    $.ajax('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        success: (resp => {
            cardBody.text(JSON.stringify(resp));
        })
    });
});