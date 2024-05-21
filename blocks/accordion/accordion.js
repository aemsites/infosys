import { createAemElement } from '../../scripts/blocks-utils.js';

const ACCORDION_TITLE_PSEUDO_BG_IMAGE = '--accordion-pseudo-title-bg-image';
const ACCORDION_ITEM_SWITCH_INTERVAL = 5000; // milliseconds

function getActiveItemIndex(block) {
  let activeItemIndex = block.getAttribute('data-active-item');
  if (activeItemIndex) {
    activeItemIndex = parseInt(activeItemIndex, 10);
  }
  return activeItemIndex;
}

function setActiveItem(block, index) {
  const itemContents = block.querySelectorAll('.item-content');
  block.setAttribute('data-active-item', index);
  if (itemContents.length > index && !itemContents[index].style.backgroundImage) {
    const img = itemContents[index].querySelector('img');
    itemContents[index].style.backgroundImage = `url(${img.src})`;
  }
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

function handleAccordionSwitch(block) {
  const titles = block.querySelectorAll('.item-title');
  const currentIndex = getActiveItemIndex(block);
  const openIndex = (currentIndex + 1) % titles.length;
  titles[openIndex].click();
}

function animateContent(block) {
  const contents = block.querySelectorAll('.item-content');
  contents.forEach((content) => {
    content.classList.add('animate');
  });
}

function decorateContentLink(contentMainDiv) {
  const link = contentMainDiv.querySelector('a');
  if (link) {
    const mainContentText = contentMainDiv.querySelector('p');
    const arrow = createAemElement('span', { class: 'icon-long-right-arrow' });
    const p = link.parentElement;
    p.remove();
    link.className = 'item-content-link';
    link.textContent = '';
    link.title = mainContentText.textContent;
    link.appendChild(arrow);
    contentMainDiv.appendChild(link);
  }
}

function decorateAccordionContent(block) {
  const contents = block.querySelectorAll('.item-content');
  contents.forEach((content) => {
    const children = [...content.children];
    const imageDiv = children[0];
    const contentMainDiv = children[1];
    content.classList.add('overlay');
    imageDiv.classList.add('item-content-image');
    contentMainDiv.classList.add('item-content-main');
    decorateContentLink(contentMainDiv);
  });
  return contents;
}

function decorateAccordionTitles(block) {
  const titles = block.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title, index) => {
    title.classList.add('item-title', 'overlay');
    if (index === 0) {
      title.classList.add('open');
      setActiveItem(block, index);
    }
    title.nextElementSibling.classList.add('item-content');

    title.addEventListener('click', () => {
      toggleActiveItem(block);
      clearInterval(block.intervalId);
      block.intervalId = setInterval(
        () => handleAccordionSwitch(block),
        ACCORDION_ITEM_SWITCH_INTERVAL,
      );
      title.classList.toggle('open');
      setActiveItem(block, index);
    });
  });
  if (titles.length > 0) titles[0].click();
  return titles;
}

function decorateAccordion(block) {
  decorateAccordionTitles(block);
  decorateAccordionContent(block);
  block.intervalId = setInterval(
    () => handleAccordionSwitch(block),
    ACCORDION_ITEM_SWITCH_INTERVAL,
  );
}

function setTitleBgImg(block) {
  const contents = block.querySelectorAll('.item-content');
  setTimeout(() => {
    contents.forEach((content) => {
      const img = content.querySelector('.item-content-image img');
      if (img && img.src) {
        content.style.backgroundImage = `url(${img.src})`;
        content.style.backgroundSize = 'cover';
        const titleDiv = content.previousElementSibling;
        titleDiv.style.setProperty(ACCORDION_TITLE_PSEUDO_BG_IMAGE, `url(${img.src})`);
      }
    });
  }, 100);
}

export default function decorate(block) {
  decorateAccordion(block);
  setTitleBgImg(block);
  window.addEventListener('DOMContentLoaded', () => {
    animateContent(block);
  });
}
