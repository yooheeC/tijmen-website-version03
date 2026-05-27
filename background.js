if (window.innerWidth > 768) {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', () => {
            document.body.style.backgroundImage = `url('${img.src}')`;
            document.body.style.backgroundSize = `auto ${window.innerHeight}px`;
            document.body.style.backgroundPosition = 'center top';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
        });

        img.addEventListener('mouseout', () => {
            document.body.style.backgroundImage = 'none';
        });
    });
}