// typed.js us 
var typed = new Typed(".multiple-text", {
    strings: [
        "to making a defference",
         "to creating positive change",
         " to create a better world"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 1000,
    loop: true
})

// typed.js me 
var typed = new Typed(".multiple-Text", {
    strings: [
        "Rayen Hafsi",
        "Rayen Hafsi ",
        "Rayen Hafsi ",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 1000,
    loop: false
})

// design description
var typed = new Typed(".design-description", {
    strings: [
        "truly represents your brand",
        "elevates your brand's image",
        "exceeds expectations",
        "communicates your message effectively ",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 1000,
    loop: true
})


// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// scroll sections active nav

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navicon

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};



// scroll reveal *
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-contect p, about-content', { origin: 'right' });






//       // scroll sections active 

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

//     // sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // remove toggle icon and navbar when click navicon

//     menuIcon.classList.remove('fa-x');
//     navbar.classList.remove('active');
// };



// // toggle icon navbar

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-x');
//     navbar.classList.toggle('active');
// };



// // scroll reveal
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });


// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .portfolio-box, .contact from', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contect p, about-content', { origin: 'right' });
