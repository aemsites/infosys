import { createElement } from '../../scripts/aem.js';

function stopProgressBar(block) {
  const currentProgressBar = block.querySelector('.progress-bar[state="started"]');
  if (currentProgressBar) {
    currentProgressBar.style.width = '0px';
    currentProgressBar.setAttribute('state', 'ended');
  }

  const currentBanner = block.querySelector('.banner.active');
  if (currentBanner) currentBanner.classList.remove('active');

  const currentCardItem = block.querySelector('.card-item.active');
  if (currentCardItem) currentCardItem.classList.remove('active');

  const tile = block.querySelector('li.tile.active');
  if (tile) tile.classList.remove('active');

  clearTimeout(block.timeoutId);
}

function scrollCardsListIfCurrentCardIsNotVisible(block, cardsList, cardItem, currentIndex) {
  const progressBars = block.querySelectorAll('.progress-bar');
  const cardItemRect = cardItem.getBoundingClientRect();
  const cardsListRect = cardsList.getBoundingClientRect();

  if (cardItemRect.left < cardsList.offsetLeft || cardItemRect.left > cardsListRect.right
  || (cardItemRect.left < cardsListRect.right && cardItemRect.right > cardsListRect.right)) {
    cardsList.scrollLeft = cardItem.offsetLeft;
  } else if (cardItemRect.right > cardsListRect.right && currentIndex > 0) {
    const leftCardItem = block.querySelector(`.card-${(currentIndex - 1) % progressBars.length}`);
    cardsList.scrollLeft = leftCardItem.offsetLeft;
  }
}

function startProgressBar(block, currentIndex) {
  const progressBars = block.querySelectorAll('.progress-bar');
  const cardItemWidth = parseFloat(progressBars[currentIndex].style.maxWidth || 0);
  const progressBarJump = cardItemWidth / 100;
  const currentCardItem = block.querySelector(`.card-${currentIndex}`);
  // const isCurrentCardItemVisible = isCardItemCompletelyVisible(currentCardItem);
  const cardsList = block.querySelector('.cards-list');
  const banner = block.querySelector(`.banner-${currentIndex}`);
  const currentProgressBar = progressBars[currentIndex];
  const currentTile = block.querySelector(`.tile-${currentIndex}`);
  let newIndex = currentIndex;

  banner.classList.add('active');
  currentCardItem.classList.add('active');
  currentTile.classList.add('active');
  scrollCardsListIfCurrentCardIsNotVisible(block, cardsList, currentCardItem, currentIndex);
  block.timeoutId = setTimeout(() => {
    const width = parseFloat(currentProgressBar.style.width || 0) + progressBarJump;
    currentProgressBar.style.width = `${width}px`;
    currentProgressBar.setAttribute('state', 'started');

    // current progress bar reached 100% width
    if (width === cardItemWidth) {
      stopProgressBar(block);
      // If last progress bar, scroll the cards list back to the first card
      if (currentIndex === progressBars.length - 1) cardsList.scrollLeft = 0;
      newIndex = (currentIndex + 1) % progressBars.length;
    }

    // Infinite loop to start the progress bar
    // 'newIndex' is updated once the current progress bar reaches 100% width
    startProgressBar(block, newIndex);
  }, 50);
}

function moveNextCard(block) {
  const cardItems = block.querySelectorAll('.card-item');
  const currentCardItem = block.querySelector('.card-item.active');
  const currentIndex = [...cardItems].indexOf(currentCardItem);
  const nextIndex = (currentIndex + 1) % cardItems.length;
  stopProgressBar(block);
  startProgressBar(block, nextIndex);
}

function movePrevCard(block) {
  const cardItems = block.querySelectorAll('.card-item');
  const currentCardItem = block.querySelector('.card-item.active');
  const currentIndex = [...cardItems].indexOf(currentCardItem);
  const prevIndex = (currentIndex - 1 + cardItems.length) % cardItems.length;
  stopProgressBar(block);
  startProgressBar(block, prevIndex);
}

function decorateHeroBanners(block) {
  const banners = [...block.children];

  banners.forEach((banner, index) => {
    banner.classList.add('banner', `banner-${index}`);
    if (index === 0) banner.classList.add('active');

    const bannerChildren = banner.children;
    const bannerImg = bannerChildren[0];
    bannerImg.classList.add('banner-img');

    const bannerContent = bannerChildren[1];
    bannerContent.classList.add('banner-content');
  });
}

function decorateCardFindMoreButton(card) {
  const findMore = card.querySelector('p > a');
  if (!findMore) return;
  const findMoreIcon = createElement('span', { class: 'icon-chevron-right-circle-white' });
  findMore.prepend(findMoreIcon);
  findMore.classList.add('find-more');
}

function decorateArrowControls(block) {
  const leftControl = createElement('button', { class: 'arrow left' });
  const rightControl = createElement('button', { class: 'arrow right' });
  const arrowControls = createElement('div', { class: 'arrow-controls' }, null, leftControl, rightControl);
  leftControl.addEventListener('click', () => movePrevCard(block));
  rightControl.addEventListener('click', () => moveNextCard(block));
  block.append(arrowControls);
}

function decorateTilesControls(block) {
  const banners = block.querySelectorAll('.banner');
  const tilesBar = createElement('ul', { class: 'tiles-bar' });
  for (let i = 0; i < banners.length; i += 1) {
    const tile = createElement('li', { class: `tile tile-${i}` });
    tile.addEventListener('click', () => {
      stopProgressBar(block);
      tile.classList.add('active');
      startProgressBar(block, i);
    });
    tilesBar.appendChild(tile);
  }
  block.append(tilesBar);
}

function decorateCardListWithControls(block) {
  decorateArrowControls(block);
  decorateTilesControls(block);
}

function decorateHeroSlidingCards(block) {
  const cardsList = createElement('div', { class: 'cards-list' });
  const banners = [...block.children];
  banners.forEach((banner, index) => {
    const cardHeading = createElement('h4', null, { innerHTML: banner.querySelector('h2').innerHTML });
    const bannerContent = banner.querySelector('.banner-content');
    const bannerContentChildren = [...bannerContent.children];
    const progressBar = createElement('div', { class: `progress-bar progress-bar-${index}`, state: 'none' });
    const card = createElement('div', { class: `card-item card-${index}` }, null, cardHeading, ...bannerContentChildren.slice(1), progressBar);
    const reportButton = createElement('a', { class: 'report-button' }, { innerHTML: 'Report', href: card.querySelector('a').href });
    bannerContent.prepend(reportButton);
    cardsList.appendChild(card);
    card.addEventListener('click', () => {
      stopProgressBar(block);
      startProgressBar(block, index);
    });
    decorateCardFindMoreButton(card);
  });
  block.append(cardsList);
}

const setBannerContentPosition = (block) => {
  const cardsList = block.querySelector('.cards-list');
  const clientRect = cardsList.getBoundingClientRect();
  const banners = [...block.children];

  banners.forEach((banner) => {
    if (!banner.classList.contains('banner')) return;
    const bannerContent = banner.querySelector('.banner-content');
    bannerContent.style.width = `${clientRect.width}px`;
    bannerContent.style.left = `${clientRect.x}px`;
  });
};

const setProgressBarPosition = (block) => {
  const cardsList = block.querySelector('.cards-list');
  const cardItem = block.querySelector('.card-item');
  const cardItemRect = cardItem.getBoundingClientRect();
  const progressBars = block.querySelectorAll('.progress-bar');

  progressBars.forEach((progressBar) => {
    progressBar.style.maxWidth = `${cardItemRect.width}px`;
  });

  if (cardsList.getAttribute('progress-bar') !== 'initialised') {
    cardsList.setAttribute('progress-bar', 'initialised');
    startProgressBar(block, 0);
  }
};

function onLoadSetItemsPosition(block) {
  document.addEventListener('load', () => {
    setBannerContentPosition(block);
    setProgressBarPosition(block);
  }, true);

  window.addEventListener('resize', () => {
    setBannerContentPosition(block);
    setProgressBarPosition(block);
  });
}

export default function decorate(block) {
  decorateHeroBanners(block);
  decorateHeroSlidingCards(block);
  decorateCardListWithControls(block);
  onLoadSetItemsPosition(block);
}
