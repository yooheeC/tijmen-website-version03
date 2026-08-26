document.addEventListener('DOMContentLoaded', () => {

    // 모바일 팝업 show/hide
    const btn = document.querySelector('.popup-btn');
    const imgcolumn = document.querySelector('.imgcolumn');

    if (btn && imgcolumn) {
        btn.addEventListener('click', () => {
            imgcolumn.classList.toggle('open');
            btn.textContent = imgcolumn.classList.contains('open') ? 'hide' : 'show';
        });
    }

    // intro 팝업 닫기
    const introClose = document.querySelector('.intro-popup-close');
    const popup = document.querySelector('.intro-popup');

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

    // biography 토글
    const bioBtn = document.querySelector('.bio');
    const biographyContainer = document.querySelector('.biography-container');
    const filters = document.querySelector('.filters');

    if (bioBtn && biographyContainer) {
        bioBtn.addEventListener('click', () => {
            biographyContainer.classList.toggle('hidden');
            bioBtn.classList.toggle('active');
            if (filters) filters.classList.toggle('hidden');
        });
    }

    // imgcolumn 카루셀
    const imgcolumnEl = document.querySelector('.imgcolumn');

    if (imgcolumnEl) {
        imgcolumnEl.addEventListener('click', (e) => {
            const rect = imgcolumnEl.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            if (clickX < rect.width / 2) {
                imgcolumnEl.scrollBy({ left: -window.innerWidth * 0.3, behavior: 'smooth' });
            } else {
                imgcolumnEl.scrollBy({ left: window.innerWidth * 0.3, behavior: 'smooth' });
            }
        });

        imgcolumnEl.addEventListener('mousemove', (e) => {
            const rect = imgcolumnEl.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            if (clickX < rect.width / 2) {
                imgcolumnEl.style.cursor = 'w-resize';
            } else {
                imgcolumnEl.style.cursor = 'e-resize';
            }
        });
    }

    // clicked 클래스 토글 (topbar 버튼, a 태그)
    document.querySelectorAll('.topbar button, a').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('clicked');
        });
    });

});