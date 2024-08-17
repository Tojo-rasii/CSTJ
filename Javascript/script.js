



const active = document.querySelector('.active');
const aLink = document.querySelectorAll('header section article:nth-child(2) a');

const scrollDown = document.getElementById('scrollDown');
const darkMode = document.getElementById('dark-mode');
const listIcon = document.getElementById('listIcon');

const darkMode2 = document.querySelector('.headerMobile #dark-mode');
const listIcon2 = document.querySelector('.headerMobile #listIcon');

const body = document.body;
const darkInput = document.querySelectorAll('header:nth-child(2) input[type="checkbox"]');

const listInput = document.querySelectorAll('.headerMobile input[type="checkbox"]');
const pop = document.querySelector('.pop');


darkInput.forEach(darkInputs => {
    darkInputs.addEventListener('input', (e) => {
        const target = e.target.checked
        if (target === true) {
            darkMode.classList.add('bi-sun');
            darkMode2.classList.add('bi-sun');


            body.classList.add('dark-mode');
        } else {
            darkMode.classList.remove('bi-sun');
            darkMode2.classList.remove('bi-sun');

            body.classList.remove('dark-mode');

        }
    })
})




listInput.forEach(listInputs => {
    listInputs.addEventListener('input', (e) => {
        const target = e.target.checked
        if (target === true) {
            pop.classList.add('block');
            listIcon.classList.add('bi-x');
            listIcon2.classList.add('bi-x');
        } else {
            pop.classList.remove('block');
            listIcon.classList.remove('bi-x');
            listIcon2.classList.remove('bi-x');

        }
    })
})




// darkMode.addEventListener('toggle', darkmode);
// lightMode.removeEventListener('toggle', darkmode);

// function darkmode() {
//     darkMode.classList.add('bi-sun');
// }

document.addEventListener('scroll', () => {
    const value = window.scrollY;

    const btnScrollToTop = document.querySelector('.btnScrollToTop');

    if (value > 682) {
        btnScrollToTop.classList.add('block');

    } else {
        btnScrollToTop.classList.remove('block');

    }

    btnScrollToTop.addEventListener('click', () => {
        window.scroll(0, 0);

    })
})




aLink.forEach((link, index) => {
    link.addEventListener('click', slideNav);

    function slideNav() {
        switch (index) {
            case 0:
                active.classList.add('left-0');
                active.classList.remove('left-1');
                active.classList.remove('left-2');
                active.classList.remove('left-3');
                active.classList.remove('left-4');

                break;

            case 1:
                active.classList.remove('left-0');
                active.classList.add('left-1');
                active.classList.remove('left-2');
                active.classList.remove('left-4');
                active.classList.remove('left-3');

                break;

            case 2:
                active.classList.remove('left-0');
                active.classList.remove('left-1');
                active.classList.add('left-2');
                active.classList.remove('left-3');
                active.classList.remove('left-4');

                break;

            case 3:
                active.classList.remove('left-0');
                active.classList.remove('left-1');
                active.classList.remove('left-2');
                active.classList.add('left-3');
                active.classList.remove('left-4');


                break;

            case 4:
                active.classList.remove('left-0');
                active.classList.remove('left-1');
                active.classList.remove('left-2');
                active.classList.remove('left-3');
                active.classList.add('left-4');

                break;
        }
    }

})



window.addEventListener('load', load)

function load() {
    window.scroll(0, 0);
}

document.getElementById('home').addEventListener('click', () => {
    load();
})

scrollDown.addEventListener('click', scrollD);

function scrollD() {

    window.location.href = '#Actu';

}

const search = document.querySelector('.bi-search');
const searchicon = document.querySelector('#search');


search.addEventListener('click', () => {
    window.location.href = 'Components/recherche.html';

});
searchicon.addEventListener('click', () => {
    window.location.href = '../Components/recherche.html';

});

