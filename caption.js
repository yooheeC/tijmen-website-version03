document.querySelectorAll('img').forEach(img => {
    const filename = img.src.split('/').pop();
    const caption = document.createElement('p');
    caption.textContent = filename;
    img.insertAdjacentElement('afterend', caption);
});