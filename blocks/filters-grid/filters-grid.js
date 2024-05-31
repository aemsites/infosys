import { createAemElement } from '../../scripts/blocks-utils.js';

const FILTER_CATEGORIES = {
  0: 'industry',
  1: 'technology',
  2: 'assetType',
};

function decorateRowList(row) {
  const ul = row.querySelector('ul');
  if (ul) {
    ul.classList.add('filters-list');
    const li = [...ul.children];
    li.forEach((item) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('filter-input');

      const label = document.createElement('label');
      label.classList.add('filter-label');
      label.textContent = item.textContent;
      item.textContent = '';

      item.prepend(checkbox);
      item.appendChild(label);
    });
  }
}

function decorateViewMore(row) {
  const viewMore = row.querySelector('p');
  const COLLAPSED_TEXT = 'View All';
  const EXPANDED_TEXT = 'View Less';
  if (viewMore && viewMore.textContent.trim() === COLLAPSED_TEXT) {
    const viewMoreLink = createAemElement('a', { class: 'view-all' }, { textContent: COLLAPSED_TEXT });
    viewMore.after(viewMoreLink);
    viewMore.remove();
    viewMoreLink.onclick = (event) => {
      event.preventDefault();
      const filtersList = row.querySelector('ul');
      viewMoreLink.textContent = filtersList.classList.contains('expanded') ? COLLAPSED_TEXT : EXPANDED_TEXT;
      filtersList.classList.toggle('expanded');
    };
  }
}

function decorateActionButton(block) {
  const section = block.closest('.section');
  const actionButton = section.querySelector('.filters-grid-wrapper + .default-content-wrapper p >  a');
  if (actionButton === null) return;
  actionButton.classList.add('action-button');
  actionButton.parentElement.classList.add('action-button-wrapper');
  actionButton.addEventListener('click', () => {
    const selectedFilters = {};
    const rows = block.querySelectorAll('.row');
    rows.forEach((row, index) => {
      const category = FILTER_CATEGORIES[index];
      const checkedFiltersItem = Array.from(row.querySelectorAll('li:has(.filter-input:checked)'))
        .map((item) => item.querySelector('.filter-label').textContent);
      selectedFilters[category] = checkedFiltersItem;
    });
    const queryString = new URLSearchParams(selectedFilters).toString();
    actionButton.href = `${actionButton.href}?${queryString}`;
  });
}

export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('row');
    decorateRowList(row);
    decorateViewMore(row);
  });
  decorateActionButton(block);
  const dialog = block.closest('dialog');
  dialog.classList.add('full-width');
}
