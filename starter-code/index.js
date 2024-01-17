// I want to create an interactive button through the dom
// I will set up the button names, then I will check if the ham button is open or closed for mobile 

// Locate and establish names ->
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// When someone clicks on the hamburger button
navToggle.addEventListener('click', () =>  {
    // if the nav is close, open it using a data attribute
    const visibiltiy = nav.getAttribute('data-visible')

    if( visibiltiy === 'false'){
        nav.setAttribute('data-visible', 'true')
    }
    // if nav is open, close it

    if(visibiltiy === 'true'){
        nav.setAttribute('data-visible', 'false')
    }
    console.log(visibiltiy)
})
