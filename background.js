const imagePool = [
    'background-sources/source-01.jpg',
    'background-sources/source-02.jpg',
    'background-sources/source-03.jpg',
    'background-sources/source-04.jpg',
    'background-sources/source-05.jpg',
    'background-sources/source-06.jpg',
    'background-sources/source-07.jpg',
    'background-sources/source-08.jpg',
    'background-sources/source-09.jpg',
    'background-sources/source-10.jpg',
    'background-sources/source-11.jpg',
    'background-sources/source-12.jpg',
    'background-sources/source-13.jpg'
];

function getRandomImages() {
    const count = Math.floor(Math.random() * 3) + 1;
    const shuffled = [...imagePool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * 80);
    const y = Math.floor(Math.random() * 80);
    return `${x}% ${y}%`;
}

function showBackgroundImages() {
    const images = getRandomImages();

    document.body.style.setProperty('--bg-image', images.map(img => `url('${img}')`).join(', '));
    document.body.style.setProperty('--bg-position', images.map(() => getRandomPosition()).join(', '));
    document.body.style.setProperty('--bg-size', images.map(() => `auto ${window.innerHeight}px`).join(', '));
    document.body.style.setProperty('--bg-blend', images.map(() => 'multiply').join(', '));
}

function clearBackgroundImages() {
    document.body.style.setProperty('--bg-image', 'none');
}

if (window.innerWidth > 768) {
    document.addEventListener('DOMContentLoaded', () => {

        // imgcolumn 이미지 hover
        document.querySelectorAll('.imgcolumn img').forEach(img => {
            img.addEventListener('load', () => {
                img.addEventListener('mouseover', () => {
                    document.body.style.backgroundImage = `url('${img.src}')`;
                    document.body.style.backgroundSize = `auto ${window.innerHeight}px`;
                    document.body.style.backgroundPosition = 'center top';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundBlendMode = 'normal';
                });

                img.addEventListener('mouseout', () => {
                    document.body.style.backgroundImage = 'none';
                });
            });

            if (img.complete) {
                img.dispatchEvent(new Event('load'));
            }
        });

        // 리스트 요소 hover
        document.querySelectorAll('.col1, .col2, .col3').forEach(el => {
            el.addEventListener('mouseover', showBackgroundImages);
            el.addEventListener('mouseout', clearBackgroundImages);
        });

    });
}