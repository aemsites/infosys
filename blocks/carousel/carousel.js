import { createCustomElement } from '../../scripts/blocks-utils.js';

export default async function decorate(block) {
  const carouselContainer = createCustomElement('div', 'carousel');
  const innerContainer = createCustomElement('div', 'inner-container');

  const blockChildren = Array.from(block.children);
  blockChildren.forEach((row) => {
    const pic = row.children[0].querySelector('picture img');
    const data = row.children[1];

    const carouselItem = createCustomElement('div', 'carousel-item');

    const img = createCustomElement('img');
    img.src = pic.src;
    img.alt = row.title;

    const caption = createCustomElement('div', 'carousel-caption');

    const title = document.createElement('h5');
    title.textContent = data.querySelector('h5').textContent;

    const paras = data.querySelectorAll('p');

    const link = document.createElement('a');
    const linkDiv = paras[0].querySelector('a');

    link.href = linkDiv.href;
    link.textContent = paras[1].textContent;

    const description = document.createElement('p');
    description.textContent = paras[2].textContent;

    const date = document.createElement('span');
    date.textContent = paras[3].textContent;

    caption.appendChild(title);
    caption.appendChild(link);
    caption.appendChild(description);
    caption.appendChild(date);

    carouselItem.appendChild(img);
    carouselItem.appendChild(caption);

    innerContainer.appendChild(carouselItem);
  });

  const prevBtn = createCustomElement('button', 'prev-btn');
  prevBtn.textContent = '❮';

  const nextBtn = createCustomElement('button', 'next-btn');
  nextBtn.textContent = '❯';

  const dotsContainer = createCustomElement('div', 'carousel-dots');
  dotsContainer.appendChild(prevBtn);

  blockChildren.forEach((_, index) => {
    const dot = createCustomElement('span', 'carousel-dot');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });

  dotsContainer.appendChild(nextBtn);

  carouselContainer.appendChild(innerContainer);
  carouselContainer.appendChild(dotsContainer);

  let currentIndex = 0; // Declare currentIndex variable
  const totalItems = blockChildren.length;
  const visibleItems = 3;

  function updateCarousel() {
    const offset = -currentIndex * (100 / visibleItems);
    innerContainer.style.transform = `translateX(${offset}%)`;
  }

  function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.max(totalItems - visibleItems, 0);
    }
    updateCarousel();
    updateDots();
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
    updateDots();
  });

  // Initialize the first active dot
  updateDots();

  block.textContent = '';
  block.appendChild(carouselContainer);
}
