

document.addEventListener('DOMContentLoaded', () => {


    const darkMode = document.getElementById('dark-mode');


    const listIcon = document.getElementById('listIcon');

    const darkMode2 = document.querySelector('.headerMobile #dark-mode');
    const listIcon2 = document.querySelector('.headerMobile #listIcon');



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







})

