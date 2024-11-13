import { createAemElement, getOptimalImageFromPictureTag } from '../../scripts/blocks-utils.js';

const ACCORDION_TITLE_PSEUDO_BG_IMAGE = '--accordion-pseudo-title-bg-image';
const ACCORDION_ITEM_SWITCH_INTERVAL = 5000; // milliseconds
let totalItems = 0;

function getActiveItemIndex(block) {
  let activeItemIndex = block.getAttribute('data-active-item');
  if (activeItemIndex) {
    activeItemIndex = parseInt(activeItemIndex, 10);
  }
  return activeItemIndex;
}

function setActiveItem(block, index) {
  block.setAttribute('data-active-item', index);
}

function getActiveListItem(block) {
  const activeIndex = getActiveItemIndex(block);
  return block.querySelector(`ul > li:nth-child(${activeIndex + 1})`);
}

function getNthListItem(block, n) {
  return block.querySelector(`:scope > ul > li:nth-child(${n + 1})`);
}

function handleAccordionSwitch(block) {
  const currentIndex = getActiveItemIndex(block);
  const newIndex = (currentIndex + 1) % totalItems;
  const nthListItem = getNthListItem(block, newIndex);
  nthListItem.click();
}

function setTitleBgImg(titleDiv, itemContent) {
  const picture = itemContent.querySelector('.item-content-image picture');
  if (picture) {
    const imgSrc = getOptimalImageFromPictureTag(picture);
    titleDiv.style.setProperty(ACCORDION_TITLE_PSEUDO_BG_IMAGE, `url(${imgSrc})`);
  }
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

function decorateContent(block, content) {
  if (!content) return;
  const children = [...content.children];
  const imageDiv = children[0];
  const contentMainDiv = children[1];
  content.classList.add('item-content', 'overlay');
  imageDiv.classList.add('item-content-image');
  contentMainDiv.classList.add('item-content-main');
  const contentTitle = contentMainDiv.querySelector('h3');
  const titleDiv = content.previousElementSibling;
  const title = titleDiv ? titleDiv.querySelector('h4') : '';
  if (!contentTitle && title) {
    const h3 = createAemElement('h3', { class: 'item-content-title' });
    h3.textContent = title.textContent;
    contentMainDiv.prepend(h3);
  }
  decorateContentLink(contentMainDiv);
  setTitleBgImg(titleDiv, content);
}

function createAccordionList(block) {
  const ul = createAemElement('ul', { class: 'list' });
  const titles = block.querySelectorAll(':scope > div:nth-child(odd)');
  totalItems = titles.length;
  titles.forEach((title, index) => {
    const li = createAemElement('li', { class: 'item' });
    title.classList.add('item-title', 'overlay');
    const content = title.nextElementSibling;
    decorateContent(block, content);
    li.append(title, content);
    if (index === 0) {
      li.classList.add('active');
      setActiveItem(block, 0);
    }
    li.addEventListener('click', () => {
      const currentActiveItem = getActiveListItem(block);
      currentActiveItem.classList.toggle('active');
      clearInterval(block.intervalId);
      block.intervalId = setInterval(
        () => handleAccordionSwitch(block),
        ACCORDION_ITEM_SWITCH_INTERVAL,
      );
      li.classList.add('active');
      setActiveItem(block, index);
    });
    ul.append(li);
  });
  return ul;
}

export default function decorate(block) {
  const ul = createAccordionList(block);
  block.innerHTML = '';
  block.append(ul);
  block.intervalId = setInterval(
    () => handleAccordionSwitch(block),
    ACCORDION_ITEM_SWITCH_INTERVAL,
  );
}
