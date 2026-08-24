document.addEventListener('DOMContentLoaded', () => {
    const imgcolumn = document.querySelector('.imgcolumn');
    const imgs = [...imgcolumn.querySelectorAll('img')];

    // 이미지+캡션 세트 만들기
    const pairs = imgs.map(img => {
        const caption = document.createElement('p');
        caption.textContent = img.src.split('/').pop();
        return { img, caption };
    });

    // 랜덤 정렬
    pairs.sort(() => Math.random() - 0.5);

    // imgcolumn 비우고 세트로 다시 붙이기
    imgcolumn.innerHTML = '';
    pairs.forEach(pair => {
        imgcolumn.appendChild(pair.img);
        imgcolumn.appendChild(pair.caption);
    });
});