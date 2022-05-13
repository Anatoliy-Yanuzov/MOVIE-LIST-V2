import registerPage from './registerPage.js';

let headerElement = document.querySelector('.header .nav');

let pages = {
    'register': registerPage
}
headerElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName == 'A') {
        console.log(e.target.getAttribute('data-link'));
        let dataLink = e.target.getAttribute('data-link');
        let currentView = pages[dataLink];

        currentView.showPage();
    }
})