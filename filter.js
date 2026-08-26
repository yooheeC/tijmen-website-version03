document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.list-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderItems(filter) {
    grid.innerHTML = '';
    items.forEach(item => {
      const col1 = item.col1.toLowerCase();
      const col2 = item.col2.toLowerCase();

      if (filter !== 'all' && col1 !== filter && col2 !== filter) return;

      const span1 = document.createElement('span');
      span1.className = 'col1';
      span1.textContent = item.col1;

      const span2 = document.createElement('span');
      span2.className = 'col2';
      span2.textContent = item.col2;

      const span3 = document.createElement('span');
      span3.className = 'col3 clickable';
      span3.innerHTML = item.col3;

      const empty1 = document.createElement('span');
      empty1.className = 'col1 hidden';

      const empty2 = document.createElement('span');
      empty2.className = 'col2 hidden';

      const linkSpan = document.createElement('span');
      linkSpan.className = 'col-link hidden';

      let content = '';
      if (item.description) content += `<p>${item.description}</p>`;
      if (item.link) {
        if (Array.isArray(item.link)) {
          item.link.forEach((l, index) => {
            content += `<a href="${l}" target="_blank">${index + 1}. ${l}</a><br>`;
          });
        } else {
          content += `<a href="${item.link}" target="_blank">${item.link}</a>`;
        }
      }
      linkSpan.innerHTML = content;

      const rowElements = [span1, span2, span3, empty1, empty2, linkSpan];

      rowElements.forEach(el => {
        el.addEventListener('mouseover', () => {
          rowElements.forEach(e => {
            e.style.color = 'blue';
            e.querySelectorAll('a').forEach(a => a.style.color = 'blue');
          });
        });
        el.addEventListener('mouseout', () => {
          rowElements.forEach(e => {
            e.style.color = '';
            e.querySelectorAll('a').forEach(a => a.style.color = '');
          });
        });
      });

      span3.addEventListener('click', () => {
        empty1.classList.toggle('hidden');
        empty2.classList.toggle('hidden');
        linkSpan.classList.toggle('hidden');
      });

      grid.appendChild(span1);
      grid.appendChild(span2);
      grid.appendChild(span3);
      grid.appendChild(empty1);
      grid.appendChild(empty2);
      grid.appendChild(linkSpan);
    });

    if (window.innerWidth > 768) {
      document.querySelectorAll('.col1, .col2, .col3').forEach(el => {
        el.addEventListener('mouseover', showBackgroundImage);
        el.addEventListener('mouseout', clearBackgroundImage);
      });
    }
  }

  renderItems('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItems(btn.dataset.filter);
    });
  });
});