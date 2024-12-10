import { createAemElement, getPlaceHolders } from '../../scripts/blocks-utils.js';

const PLACEHOLDERS = {
  report: 'Report',
};

const BREAKPOINTS = {
  desktop: '(min-width: 991px)',
};

function isDesktop() {
  return window.matchMedia(BREAKPOINTS.desktop).matches;
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
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const adjustedIndex = (index + totalSlides) % totalSlides; // Ensure cyclic behavior

  const nextBannerImg = block.parentElement.querySelector(
    `.banner-image-wrapper .banner:nth-child(${adjustedIndex + 1})`,
  );
  const nextBannerContent = block.querySelector(
    `.banner-content-wrapper .banner:nth-child(${adjustedIndex + 1})`,
  );
  const nextActiveSlide = block.querySelector(`#slide-${adjustedIndex}`);
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
  block.setAttribute('data-active-slide', adjustedIndex);
}

function isSlideVisible(slide, slider) {
  const slideRect = slide.getBoundingClientRect();
  const sliderRect = slider.getBoundingClientRect();

  // Check if the slide is within the visible bounds of the slider
  return slideRect.left >= sliderRect.left && slideRect.right <= sliderRect.right;
}

function checkIfNextElementIsInRight(active, next) {
  let current = active;
  while (current.nextElementSibling) {
    if (current.nextElementSibling === next) return true;
    current = current.nextElementSibling;
  }
  return false;
}

function checkIfPrevElementIsInLeft(active, prev) {
  let current = active;
  while (current.previousElementSibling) {
    if (current.previousElementSibling === prev) return true;
    current = current.previousElementSibling;
  }
  return false;
}

function moveSlidesToRightForCyclicBehavior(nextSlideNum, activeSlideNum, block) {
  const activeSlide = block.querySelector(`#slide-${activeSlideNum}`);
  const nextSlide = block.querySelector(`#slide-${nextSlideNum}`);
  const slider = block.querySelector('.slider');
  if (checkIfNextElementIsInRight(activeSlide, nextSlide)
  || isSlideVisible(nextSlide, slider)) {
    return;
  }
  let lastItem = slider.querySelector('.item:last-child');
  const items = Array.from(block.querySelectorAll('.slider .item'));
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (item.id === activeSlide.id) break;
    const currentScrollLeft = slider.scrollLeft;
    lastItem.after(item);
    lastItem = item;
    const slideWidth = item.offsetWidth;
    slider.scrollLeft = currentScrollLeft - slideWidth;
  }
}

function moveSlidesToLeftForCyclicBehavior(prevSlideNum, activeSlideNum, block) {
  const activeSlide = block.querySelector(`#slide-${activeSlideNum}`);
  const prevSlideElement = block.querySelector(`#slide-${prevSlideNum}`);
  const slider = block.querySelector('.slider');
  if (checkIfPrevElementIsInLeft(activeSlide, prevSlideElement)
    || isSlideVisible(prevSlideElement, slider)) {
    return;
  }
  let lastItem = slider.querySelector('.item:first-child');
  const items = Array.from(block.querySelectorAll('.slider .item'));
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const item = items[i];
    if (item.id === activeSlide.id) break;
    const currentScrollLeft = slider.scrollLeft;
    lastItem.before(item);
    lastItem = item;
    const slideWidth = item.offsetWidth;
    slider.scrollLeft = currentScrollLeft + slideWidth;
  }
}

function switchToSlide(index, block, scrollLeft = true) {
  const slider = block.querySelector('.slider');
  const activeSlideIndex = Number(block.getAttribute('data-active-slide'));
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  if (index === activeSlideIndex) return;

  if (!isDesktop()) {
    if (scrollLeft && (index > activeSlideIndex || index === 0)) {
      moveSlidesToRightForCyclicBehavior(index, activeSlideIndex, block);
    } else if (!scrollLeft && (index < activeSlideIndex || index === totalSlides - 1)) {
      moveSlidesToLeftForCyclicBehavior(index, activeSlideIndex, block);
    }
  }
  hideActiveItems(block);
  setActiveItems(index, block);

  if (!isDesktop()) {
    // Scroll the slider to make the active slide visible
    const sliderRect = slider.getBoundingClientRect();
    const nextActiveSlide = slider.querySelector('.item.active');
    const activeSlideRect = nextActiveSlide.getBoundingClientRect();
    const offset = slider.scrollLeft + (activeSlideRect.left - sliderRect.left);
    slider.scrollTo({
      left: offset,
      behavior: 'smooth',
    });
  }
}

function setNextItemActive(block) {
  const activeSlideNum = Number(block.getAttribute('data-active-slide'));
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const nextSlide = (activeSlideNum + 1) % totalSlides;
  switchToSlide(nextSlide, block, true);
}

function setPreviousItemActive(block) {
  const activeSlideNum = Number(block.getAttribute('data-active-slide'));
  const totalSlides = Number(block.getAttribute('data-total-slides'));
  const prevSlide = (activeSlideNum - 1 + totalSlides) % totalSlides;
  switchToSlide(prevSlide, block, false);
}

function addTouchEvents(element, block) {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let isSwiping = false; // Debounce flag

  function debounce(callback, delay) {
    if (isSwiping) return;
    isSwiping = true;
    callback();
    setTimeout(() => {
      isSwiping = false;
    }, delay);
  }

  element.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    element.style.transition = 'none';
  });

  element.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentX = e.touches[0].clientX - startX;
    element.style.transform = `translateX(${currentX}px)`;
  });

  element.addEventListener('touchend', () => {
    if (!isDragging) return;

    isDragging = false;

    debounce(() => {
      if (currentX < -50) {
        setNextItemActive(block);
      } else if (currentX > 50) {
        setPreviousItemActive(block);
      }
      element.style.transition = 'transform 0.3s ease'; // Add smooth transition back
      element.style.transform = 'translateX(0)';
      currentX = 0;
    }, 300); // 300ms debounce
  });
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
      const activeSlideIndex = Number(block.getAttribute('data-active-slide'));
      switchToSlide(i, block, i > activeSlideIndex);
    });
    tilesBar.appendChild(tile);
  }
  block.append(tilesBar);
}

function decorateControls(block) {
  decorateArrowControls(block);
  decorateTilesControls(block);
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
    const activeSlideIndex = Number(block.getAttribute('data-active-slide'));
    switchToSlide(index, block, index > activeSlideIndex);
  });

  item.append(progressBar);
  slider.append(item);
}

function decorateBanner(item, index, bannerImgWrapper, bannerContentWrapper, block) {
  const bannerPicture = item.querySelector('picture');
  bannerPicture.classList.add('banner');
  bannerImgWrapper.append(bannerPicture);
  addTouchEvents(bannerPicture, block);

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

export default async function decorate(block) {
  await getPlaceHolders(PLACEHOLDERS);
  const bannerImages = block.querySelectorAll(':scope > div > div:nth-child(odd)');
  const bannerImgWrapper = createAemElement('div', { class: 'banner-image-wrapper' });
  const bannerContentWrapper = createAemElement('div', { class: 'banner-content-wrapper' });
  bannerImages.forEach((item, index) => {
    decorateBanner(item, index, bannerImgWrapper, bannerContentWrapper, block);
  });

  const slider = createAemElement('div', { class: 'slider' });
  Array.from(block.querySelectorAll(':scope > div > div'))
    .filter((item) => item.innerHTML.trim() !== '')
    .forEach((item, index) => {
      decorateSliderItem(item, index, slider, block);
    });
  addTouchEvents(slider, block);

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

  window.addEventListener('resize', () => {
    if (isDesktop()) {
      // ensure slide item with id 'slide-0' is the first child and so on
      const slides = Array.from(slider.children);
      slides.sort((a, b) => {
        const aIndex = Number(a.id.split('-')[1]);
        const bIndex = Number(b.id.split('-')[1]);
        return aIndex - bIndex;
      });
      slides.forEach((slide) => slider.append(slide));
    }
  });

  Array.from(block.querySelectorAll(':scope > div > div')).forEach((div) => {
    if (div.innerHTML.trim() === '') {
      div.parentElement.remove();
    }
  });
}
