const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar-menu');
const navlogo = document.querySelector('#navbar__logo');


// display mobile menu //

const mobileMenu = () => {

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click, mobileMenu');


//show Active menu while scrolling //

const highlightMenu = () => {

    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollpos = window.scrollY;
    //console.log(scrollpos);

    //adds 'highlight' class to my menu items

    if (window.innerWidth > 960 && scrollpos < 600){

        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;

    }

    else if (window.innerWidth > 960 && scrollpos < 1400) {

        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return; 

    }

    else if (window.innerWidth > 960 && scrollpos < 2345) {

        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }


    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {

        elem.classList.remove('highlight');
    }
};




