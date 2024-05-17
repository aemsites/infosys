import { createAemElement } from '../../scripts/blocks-utils.js';

function getActiveItemIndex(block) {
  let activeItemIndex = block.getAttribute('data-active-item');
  if (activeItemIndex) {
    activeItemIndex = parseInt(activeItemIndex, 10);
  }
  return activeItemIndex;
}

function setActiveItemIndex(block, index) {
  block.setAttribute('data-active-item', index);
}

function getNthItemTitle(block, n) {
  const titles = block.querySelectorAll('.item-title');
  return titles[n];
}

function toggleActiveItem(block) {
  const activeIndex = getActiveItemIndex(block);
  const title = getNthItemTitle(block, activeIndex);
  title.classList.toggle('open');
}

function decorateAccordionContent(block) {
  const contents = block.querySelectorAll('.item-content');
  contents.forEach((content) => {
    const children = [...content.children];
    const imageDiv = children[0];
    const contentMainDiv = children[1];
    imageDiv.classList.add('item-content-image');
    const img = imageDiv.querySelector('img');
    if (img) {
      content.style.backgroundImage = `url(${img.src})`;
      content.style.backgroundSize = 'cover';
      const titleDiv = content.previousElementSibling;
      titleDiv.style.backgroundImage = `url(${img.src})`;
    }

    contentMainDiv.classList.add('item-content-main');
    const link = contentMainDiv.querySelector('a');
    if (link) {
      const p = link.parentElement;
      p.remove();
      link.className = 'item-content-link';
      link.textContent = '';
      const arrow = createAemElement('span', { class: 'icon-long-right-arrow' });
      link.appendChild(arrow);
      contentMainDiv.appendChild(link);
    }
  });
  return contents;
}

function decorateAccordionTitles(block) {
  const titles = block.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title, index) => {
    title.classList.add('item-title');
    if (index === 0) {
      title.classList.add('open');
      setActiveItemIndex(block, index);
    }
    title.nextElementSibling.classList.add('item-content', 'home-overlay');

    title.addEventListener('click', () => {
      toggleActiveItem(block);
      title.classList.toggle('open');
      setActiveItemIndex(block, index);
    });
  });
  return titles;
}

function decorateAccordion(block) {
  const titles = decorateAccordionTitles(block);
  decorateAccordionContent(block);

  setInterval(() => {
    const currentIndex = getActiveItemIndex(block);
    const openIndex = (currentIndex + 1) % titles.length;
    titles[openIndex].click();
  }, 4000);
}

export default function decorate(block) {
  decorateAccordion(block);
}
