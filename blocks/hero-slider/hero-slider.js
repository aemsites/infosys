import { createAemElement, getPlaceHolders } from '../../scripts/blocks-utils.js';

const PLACEHOLDERS = {
  report: 'Report',
};

function decorateBanner(item, index, bannerImgWrapper, bannerContentWrapper) {
  const bannerPicture = item.querySelector('picture');
  bannerPicture.classList.add('banner');
  bannerImgWrapper.append(bannerPicture);

  const bannerContent = createAemElement('div', { class: 'banner' });
  const content = item.nextElementSibling;
  const reportContent = content.querySelector('p.button-container a');
  if (reportContent) {
    const report = reportContent.cloneNode(true);
    report.textContent = PLACEHOLDERS.report;
    bannerContent.append(report);
  }
  const headingContent = content.querySelector('h2');
  if (headingContent) {
    const heading = createAemElement('h1', { class: 'heading' });
    heading.textContent = headingContent.textContent;
    bannerContent.append(heading);
  }
  bannerContentWrapper.append(bannerContent);
}

function hideActiveItems(block) {
  const activeBannerImg = block.parentElement.querySelector('.banner-image-wrapper .banner.active');
  const activeBannerContent = block.querySelector('.banner-content-wrapper .banner.active');
  const activeSlide = block.querySelector('.slider .item.active');
  const activeTile = block.querySelector('.tiles-bar .tile.active');
  activeBannerImg?.classList.remove('active');
  activeBannerContent?.classList.remove('active');
  activeSlide?.classList.remove('active');
  activeTile?.classList.remove('active');
}

function setActiveItems(index, block) {
  const slider = block.querySelector('.slider');
  const totalSlides = Number(block.getAttribute('data-total-slides'));

  const items = [...slider.querySelectorAll('.item')];
  const adjustedIndex = (index + totalSlides) % totalSlides; // Ensure cyclic behavior

  const nextBannerImg = block.parentElement.querySelector(
    `.banner-image-wrapper .banner:nth-child(${adjustedIndex + 1})`,
  );
  const nextBannerContent = block.querySelector(
    `.banner-content-wrapper .banner:nth-child(${adjustedIndex + 1})`,
  );
  const nextActiveSlide = items[adjustedIndex]; // Select from non-cloned items only

  const nextActiveTile = block.querySelector(`.tiles-bar .tile:nth-child(${adjustedIndex + 1})`);

  if (!nextBannerImg || !nextBannerContent || !nextActiveSlide) {
    // eslint-disable-next-line no-console
    console.error('Failed to find elements for the next active slide.');
    return;
  }

  nextBannerImg.classList.add('active');
  nextBannerContent.classList.add('active');
  nextActiveSlide.classList.add('active');
  nextActiveTile.classList.add('active');

  // Scroll the slider to make the active slide visible
  const sliderRect = slider.getBoundingClientRect();
  const activeSlideRect = nextActiveSlide.getBoundingClientRect();
  const offset = activeSlideRect.left - sliderRect.left + slider.scrollLeft;

  if (activeSlideRect.left < sliderRect.left || activeSlideRect.right > sliderRect.right) {
    slider.scrollTo({
      left: offset,
      behavior: 'smooth',
    });
  }
}

function switchToSlide(index, block) {
  hideActiveItems(block);
  setActiveItems(index, block);
  block.setAttribute('data-active-slide', index);
}

function setNextItemActive(block) {
  const activeSlideNum = Number(block.getAttribute('data-active-slide'));
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const nextSlide = activeSlideNum + 1;

  if (nextSlide === totalSlides) {
    const slider = block.querySelector('.slider');

    setTimeout(() => {
      switchToSlide(nextSlide, block);
      block.setAttribute('data-active-slide', 0);
      slider.scrollTo({ left: 0, behavior: 'instant' });
    }, 300); // Allow smooth scroll to finish
  } else {
    switchToSlide(nextSlide, block);
  }
}

function setPreviousItemActive(block) {
  const activeSlideNum = Number(block.getAttribute('data-active-slide'));
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const prevSlide = activeSlideNum - 1;

  if (prevSlide < 0) {
    const slider = block.querySelector('.slider');
    setTimeout(() => {
      switchToSlide(prevSlide, block);
      block.setAttribute('data-active-slide', totalSlides - 1);
      const lastSlideOffset = slider.scrollWidth - slider.offsetWidth;
      slider.scrollTo({ left: lastSlideOffset, behavior: 'instant' });
    }, 300); // Allow smooth scroll to finish
  } else {
    switchToSlide(prevSlide, block);
  }
}

function decorateSliderItem(item, index, slider, block) {
  item.id = `slide-${index}`;
  item.classList.add('item');
  const existingHeading = item.querySelector('h2');
  if (existingHeading) {
    const h4 = createAemElement('h4', { class: 'heading' });
    h4.textContent = existingHeading.textContent;
    item.prepend(h4);
    existingHeading.remove();
  }

  const anchor = item.querySelector('a:last-of-type');
  if (anchor) {
    anchor.classList.add('find-more');
    const findMoreLongRightArrowIcon = createAemElement('span', { class: 'icon-long-right-arrow' });
    const findMoreIcon = createAemElement('span', { class: 'icon-chevron-right-circle-white' });
    anchor.prepend(findMoreLongRightArrowIcon);
    anchor.prepend(findMoreIcon);
  }

  const progressBar = createAemElement('div', { class: 'progress-bar' });
  progressBar.addEventListener('animationend', () => setNextItemActive(block));

  item.addEventListener('click', () => {
    switchToSlide(index, block);
  });

  item.append(progressBar);
  slider.append(item);
}

function decorateArrowControls(block) {
  const leftControl = createAemElement(
    'button',
    { class: 'arrow left', 'aria-label': 'previous' },
  );
  leftControl.addEventListener('click', () => setPreviousItemActive(block));

  const rightControl = createAemElement(
    'button',
    { class: 'arrow right', 'aria-label': 'next' },
  );
  rightControl.addEventListener('click', () => setNextItemActive(block));
  const arrowControls = createAemElement('div', { class: 'arrow-controls' }, null, leftControl, rightControl);
  block.append(arrowControls);
}

function decorateTilesControls(block) {
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const tilesBar = createAemElement('ul', { class: 'tiles-bar' });
  for (let i = 0; i < totalSlides; i += 1) {
    const tile = createAemElement('li', { class: 'tile' });
    if (i === 0) tile.classList.add('active');
    tile.addEventListener('click', () => {
      switchToSlide(i, block);
    });
    tilesBar.appendChild(tile);
  }
  block.append(tilesBar);
}

function decorateControls(block) {
  decorateArrowControls(block);
  decorateTilesControls(block);
}

export default async function decorate(block) {
  await getPlaceHolders(PLACEHOLDERS);
  const bannerImages = block.querySelectorAll(':scope > div > div:nth-child(odd)');
  const bannerImgWrapper = createAemElement('div', { class: 'banner-image-wrapper' });
  const bannerContentWrapper = createAemElement('div', { class: 'banner-content-wrapper' });
  bannerImages.forEach((item, index) => {
    decorateBanner(item, index, bannerImgWrapper, bannerContentWrapper);
  });

  const slider = createAemElement('div', { class: 'slider' });
  Array.from(block.querySelectorAll(':scope > div > div'))
    .filter((item) => item.innerHTML.trim() !== '')
    .forEach((item, index) => {
      decorateSliderItem(item, index, slider, block);
    });

  const blockWrapper = block.parentElement;
  blockWrapper.prepend(bannerImgWrapper);
  block.prepend(bannerContentWrapper);
  block.append(slider);

  bannerImgWrapper.querySelector(':scope > picture:first-child').classList.add('active');
  bannerContentWrapper.querySelector(':scope > div:first-child').classList.add('active');
  slider.querySelector(':scope > div:first-child').classList.add('active');
  block.setAttribute('data-active-slide', 0);
  block.setAttribute('data-total-slides', slider.children.length);
  decorateControls(block);

  Array.from(block.querySelectorAll(':scope > div > div')).forEach((div) => {
    if (div.innerHTML.trim() === '') {
      div.parentElement.remove();
    }
  });
}
