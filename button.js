const introClose = document.querySelector('.intro-popup-close');
const popup = document.querySelector('.intro-popup');
const bioBtn = document.querySelector('.bio');
const biographyContainer = document.querySelector('.biography-container');
const filters = document.querySelector('.filters');

bioBtn.addEventListener('click', () => {
    biographyContainer.classList.toggle('hidden');
    bioBtn.classList.toggle('active');
    filters.classList.toggle('hidden');

});

if (introClose && popup) {
    introClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    const popupLink = document.querySelector('.intro-popup a');
    let isDragging = false;
    let hasMoved = false;
    let startX, startY;

    popup.addEventListener('mousedown', (e) => {
        const rect = popup.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const centerStart = rect.width * 0.25;
        const centerEnd = rect.width * 0.75;

        if (clickX < centerStart || clickX > centerEnd) {
            isDragging = true;
            hasMoved = false;
            startX = e.clientX - rect.left;
            startY = e.clientY - rect.top;
            popup.style.setProperty('cursor', 'all-scroll', 'important');
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        hasMoved = true;
        popup.style.left = `${e.clientX - startX}px`;
        popup.style.top = `${e.clientY - startY}px`;
        popup.style.transform = 'none';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        popup.style.setProperty('cursor', 'grab', 'important');
    });

    popupLink.addEventListener('click', (e) => {
        if (hasMoved) {
            e.preventDefault();
            hasMoved = false;
        }
    });
}