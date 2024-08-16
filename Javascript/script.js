const active = document.querySelector('.active');
const aLink = document.querySelectorAll('header section article:nth-child(2) a');

const scrollDown = document.getElementById('scrollDown');
const darkMode = document.getElementById('dark-mode');

const body = document.body;
const darkInput = document.querySelectorAll('input[type="checkbox"]');

darkInput.forEach(darkInputs => {
    darkInputs.addEventListener('input', (e) => {
        const target = e.target.checked
        if (target === true) {
            darkMode.classList.add('bi-sun');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            darkMode.classList.remove('bi-sun');

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

