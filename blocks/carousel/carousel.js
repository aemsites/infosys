import { createCustomElement } from '../../scripts/blocks-utils.js';
import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const slidingContainer = createCustomElement('div', 'sliding-container');
  const innerContainer = createCustomElement('div', 'inner-container');
  const blockChildren = Array.from(block.children);

  blockChildren.forEach((row, absoluteIndex) => {
    const carouselItem = createCustomElement('div', 'carousel-item');
    carouselItem.setAttribute('data-absolute-index', absoluteIndex);

    const data = row.children[1];
    const cardHeading = createCustomElement('div', 'card-heading');
    const title = document.createElement('h5');
    title.textContent = data.querySelector('h5').textContent;

    const items = data.querySelectorAll('p');
    const linkDiv = items[0].querySelector('a');
    const link = document.createElement('a');
    link.href = linkDiv.href;
    link.textContent = linkDiv.textContent;

    cardHeading.appendChild(title);
    cardHeading.appendChild(link);

    const cardBody = createCustomElement('div', 'card-body');
    const description = document.createElement('p');
    description.textContent = items[1].textContent;
    const date = document.createElement('span');
    date.textContent = items[2].textContent;
    cardBody.appendChild(description);
    cardBody.appendChild(date);

    const imageDiv = createCustomElement('div', 'card-image');
    const image = row.children[0].querySelector('picture img');
    const picture = createOptimizedPicture(image.src, linkDiv.textContent, false, [{ width: '750' }]);

    const imageLink = document.createElement('a');
    imageLink.href = linkDiv.href;
    imageLink.appendChild(picture);
    imageDiv.appendChild(imageLink);

    carouselItem.appendChild(imageDiv);
    carouselItem.appendChild(cardHeading);
    carouselItem.appendChild(cardBody);

    innerContainer.appendChild(carouselItem);
  });

  const updateCarousel = () => {
    innerContainer.style.transition = 'none';
    innerContainer.style.transform = 'translateX(0)';
  };

  const prevBtn = createCustomElement('span', 'icon');
  prevBtn.classList.add('icon-prev');

  const nextBtn = createCustomElement('span', 'icon');
  nextBtn.classList.add('icon-next');

  const dotsContainer = createCustomElement('div', 'carousel-dots');
  dotsContainer.appendChild(prevBtn);

  const dots = [];

  const updateDots = () => {
    const firstItemIndex = parseInt(innerContainer.firstElementChild.getAttribute('data-absolute-index'), 10);
    dots.forEach((dot, index) => {
      if (index === firstItemIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const moveToNext = () => {
    const firstItem = innerContainer.firstElementChild;
    innerContainer.appendChild(firstItem);
    updateCarousel();
    updateDots();
  };

  const moveToPrev = () => {
    const lastItem = innerContainer.lastElementChild;
    innerContainer.insertBefore(lastItem, innerContainer.firstElementChild);
    updateCarousel();
    updateDots();
  };

  const moveToDot = (index) => {
    const items = Array.from(innerContainer.children);
    const firstItemIndex = parseInt(items[0].getAttribute('data-absolute-index'), 10);
    const shift = index - firstItemIndex;

    if (shift > 0) {
      for (let i = 0; i < shift; i += 1) {
        moveToNext();
      }
    } else if (shift < 0) {
      for (let i = 0; i < Math.abs(shift); i += 1) {
        moveToPrev();
      }
    }
  };

  const createDots = () => {
    dotsContainer.innerHTML = '';
    dotsContainer.appendChild(prevBtn);
    dots.length = 0; // Clear the dots array
    blockChildren.forEach((_, index) => {
      const dot = createCustomElement('span', 'carousel-dot');
      dot.dataset.index = index;
      dot.addEventListener('click', () => {
        moveToDot(index);
      });
      dots.push(dot);
      dotsContainer.appendChild(dot);
    });
    dotsContainer.appendChild(nextBtn);
    updateDots();
  };

  prevBtn.addEventListener('click', () => {
    moveToPrev();
  });

  nextBtn.addEventListener('click', () => {
    moveToNext();
  });

  block.textContent = '';
  slidingContainer.appendChild(innerContainer);
  block.appendChild(slidingContainer);
  block.appendChild(dotsContainer);

  // Initialize dots and carousel
  createDots();
  updateCarousel();
}
