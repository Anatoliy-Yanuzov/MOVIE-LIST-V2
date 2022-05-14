let loinSection = document.querySelector('.login');

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