document.addEventListener('DOMContentLoaded', () => {
    const imgcolumn = document.querySelector('.imgcolumn');
    const imgs = [...imgcolumn.querySelectorAll('img')];

    const pairs = imgs.map(img => {
        const caption = document.createElement('span');
        caption.className = 'img-caption';
        caption.textContent = img.src.split('/').pop();
        return { img, caption };
    });

    pairs.sort(() => Math.random() - 0.5);

    imgcolumn.innerHTML = '';
    pairs.forEach(pair => {
        const wrapper = document.createElement('div');
        wrapper.className = 'img-wrapper';
        wrapper.appendChild(pair.img);
        wrapper.appendChild(pair.caption);
        imgcolumn.appendChild(wrapper);
    });
});