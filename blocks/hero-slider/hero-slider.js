function decorateHeroBanners(block) {
  const banners = [...block.children];
  let i = 0;

  banners.forEach((banner) => {
    banner.classList.add('banner', `banner-${i}`);
    if (i === 0) banner.classList.add('show');

    const bannerChildren = banner.children;
    const bannerImg = bannerChildren[0];
    bannerImg.classList.add('banner-img');

    const bannerContent = bannerChildren[1];
    bannerContent.classList.add('banner-content');
    i++;
  });
}

function decorateHeroSlidingCards(block) {
  const cardsList = document.createElement('div');
  const banners = [...block.children];

  cardsList.classList.add('cards-list');
  banners.forEach((banner, index) => {
    const card = document.createElement('div');
    const cardHeading = document.createElement('h4');
    cardHeading.innerHTML = banner.querySelector('h2').innerHTML;
    card.append(cardHeading);

    const bannerContent = banner.querySelector('.banner-content');
    const bannerContentChildren = [...bannerContent.children];
    card.append(...bannerContentChildren.slice(1));
    card.classList.add('card-item', `card-${index}`);

		const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar', `progress-bar-${index}`);
    progressBar.setAttribute('state', 'none');
		card.append(progressBar);
    cardsList.appendChild(card);

    const reportButton = document.createElement('a');
    reportButton.innerHTML = 'Report';
    reportButton.href = card.querySelector('a').href;
    reportButton.classList.add('report-button');
    bannerContent.prepend(reportButton);

    card.addEventListener('click', () => {
      stopProgressBar(block);
      startProgressBar(block, index);
    });

  });

  // const firstCardClone = cardsList.firstElementChild.cloneNode(true);
  // cardsList.appendChild(firstCardClone);
  block.append(cardsList);
}

function isCardItemVisible(cardItem) {
  const cardItemRect = cardItem.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // If the right edge of the card item is greater than the viewport width
  // it means that the card item is not completely visible
  return cardItemRect.right <= viewportWidth;
}

function startProgressBar(block, currentIndex) {
  const progressBars = block.querySelectorAll('.progress-bar');
	const cardItemWidth = parseFloat(progressBars[currentIndex].style.maxWidth || 0);
  const progressBarJump = cardItemWidth / 100;
  const currentCardItem = block.querySelector(`.card-${currentIndex}`);
  const isCurrentCardItemVisible = isCardItemVisible(currentCardItem);
  const cardsList = block.querySelector('.cards-list');
	let banner = block.querySelector(`.banner-${currentIndex}`);
  let currentProgressBar = progressBars[currentIndex];

  if (!isCurrentCardItemVisible) {
    const leftCardItem = block.querySelector(`.card-${(currentIndex - 1) % progressBars.length}`);
    cardsList.scrollLeft = leftCardItem.offsetLeft;
  }

	banner.classList.add('show');
  block.timeoutId = setTimeout(() => {
    const width = parseFloat(currentProgressBar.style.width || 0) + progressBarJump;
    currentProgressBar.style.width = `${width}px`;
    currentProgressBar.setAttribute('state', 'started');

    // current progress bar reached 100% width
    if (width === cardItemWidth) {
      stopProgressBar(block);
			// If last progress bar, scroll the cards list back to the first card
      if (currentIndex === progressBars.length - 1) cardsList.scrollLeft = 0;
      currentIndex = (currentIndex + 1) % progressBars.length;
    }

		// Infinite loop to start the progress bar
		// currentIndex changes once the progress bar reaches 100% width
    startProgressBar(block, currentIndex);
  }, 100);
}

function stopProgressBar(block) {
  const currentProgressBar = block.querySelector('.progress-bar[state="started"]');
  currentProgressBar.style.width = '0px';
  currentProgressBar.setAttribute('state', 'ended');

  const currentBanner = block.querySelector('.banner.show');
  currentBanner.classList.remove('show');

  clearTimeout(block.timeoutId);
}

const setBannerContentPosition = (block) => {
  const cardsList = block.querySelector('.cards-list');
  const clientRect = cardsList.getBoundingClientRect();
  const banners = [...block.children];

  banners.forEach((banner) => {
    if (!banner.classList.contains('banner')) {
      return;
    }
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
}

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
  onLoadSetItemsPosition(block);
}

