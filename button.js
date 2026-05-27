document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.popup-btn');
    const imgcolumn = document.querySelector('.imgcolumn');

    btn.addEventListener('click', () => {
        imgcolumn.classList.toggle('open');
        btn.textContent = imgcolumn.classList.contains('open') ? 'hide' : 'show';
    });
});