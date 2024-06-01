import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* Add cards-stack class */
  block.classList.add('cards-stack');

  /* Change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row, index) => {
    const li = document.createElement('li');

    if (index === 0) {
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
        else div.className = 'cards-card-body';
      });
    } else {
      const container = document.createElement('div');
      container.className = 'cards-card-container';
      while (row.firstElementChild) container.append(row.firstElementChild);
      [...container.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
        else div.className = 'cards-card-body';
      });
      li.append(container);
    }

    ul.append(li);
  });

  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
