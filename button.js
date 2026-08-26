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

document.querySelectorAll('.topbar button, .filter-btn, a').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('clicked');
    });
});

const imgcolumn = document.querySelector('.imgcolumn');

// 이미지 무한 반복
const imgs = [...imgcolumn.querySelectorAll('img')];
imgs.forEach(img => {
    const clone = img.cloneNode(true);
    imgcolumn.appendChild(clone);
});

// 클릭 방향에 따라 이동
imgcolumn.addEventListener('click', (e) => {
    const rect = imgcolumn.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
        imgcolumn.scrollBy({ left: -window.innerWidth * 0.3, behavior: 'smooth' });
    } else {
        imgcolumn.scrollBy({ left: window.innerWidth * 0.3, behavior: 'smooth' });
    }
});

// 커서 방향 표시
imgcolumn.addEventListener('mousemove', (e) => {
    const rect = imgcolumn.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
        imgcolumn.style.cursor = 'w-resize';
    } else {
        imgcolumn.style.cursor = 'e-resize';
    }
});