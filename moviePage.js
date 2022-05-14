let moviesSection = document.querySelector('.movies');

function showPage() {
    loinSection.classList.remove('hidden');
}

function hidePage() {
    loinSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}