import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { fetchData, createElement } from '../../scripts/blocks-utils.js';

function customTrim(str) {
  return str.replace(/^["'\s]+|["'\s]+$/g, '');
}

function traverseAndPrint(element, level, columnDiv) {
  if (element.tagName.toLowerCase() === 'li') {
    if (level === 1) {
      const title = document.createElement('p');
      title.classList.add('links-title');
      title.textContent = customTrim(element.childNodes[0].textContent);
      columnDiv.appendChild(title);
    } else if (level === 3) {
      if (element.children.length > 1) {
        const link = element.children[0];
        link.classList.add('icons-link');
        const icon = element.children[1].querySelector('img');
        link.appendChild(icon);
        columnDiv.appendChild(link);
      } else {
        columnDiv.appendChild(element.children[0]);
      }
    }
  }
  if (element.children.length > 0) {
    for (let i = 0; i < element.children.length; i += 1) {
      traverseAndPrint(element.children[i], level + 1, columnDiv);
    }
  }
}

function decorateFooterLinks(block) {
  const footerTop = block.querySelector('.footer-links');
  const defaultWrapper = footerTop.querySelector('.default-content-wrapper');
  const row = createElement('div', 'row');
  const children = defaultWrapper.children[0];
  defaultWrapper.innerHTML = '';
  let index = 0;
  while (index < children.children.length) {
    const columnDiv = createElement('div', 'links-column');
    traverseAndPrint(children.children[index], 1, columnDiv);
    index += 1;
    row.appendChild(columnDiv);
  }
  defaultWrapper.appendChild(row);
}

// Function to toggle dropdown visibility
async function toggleDropdown(countriesdatapath) {
  const dropdownContent = document.getElementById('dropdown-content');
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    if (dropdownContent.children.length === 0) {
      const countries = await fetchData(countriesdatapath);
      countries.forEach((option) => {
        const optionLink = createElement('a', '');
        optionLink.href = option.url;
        optionLink.textContent = option.name;
        dropdownContent.appendChild(optionLink);
      });
    }

    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }

  const arrowSpan = document.querySelector('.dropdown-toggle span');
  if (arrowSpan.classList.contains('down-arrow')) {
    arrowSpan.classList.remove('down-arrow');
    arrowSpan.classList.add('up-arrow');
  } else {
    arrowSpan.classList.remove('up-arrow');
    arrowSpan.classList.add('down-arrow');
  }
}

function createDropdown(div, dropdowntitle, countriesdatapath) {
  const dropdownContainer = createElement('div', 'dropdown');
  const dropdownToggle = createElement('a', 'dropdown-toggle');
  dropdownToggle.textContent = dropdowntitle;
  dropdownToggle.onclick = function () {
    toggleDropdown(countriesdatapath);
  };

  const spanElement = createElement('span', 'down-arrow');
  dropdownToggle.appendChild(spanElement);
  const dropdownContent = createElement('div', 'dropdown-content');
  dropdownContent.classList.add('up');
  dropdownContent.id = 'dropdown-content';

  // countries.forEach((option) => {
  //   const optionLink = createElement('a', '');
  //   optionLink.href = option.url;
  //   optionLink.textContent = option.name;
  //   dropdownContent.appendChild(optionLink);
  // });

  dropdownContainer.appendChild(dropdownToggle);
  dropdownContainer.appendChild(dropdownContent);
  div.appendChild(dropdownContainer);
}

function decorateFooterBottom(block) {
  const footerBottom = block.querySelector('.footer-copyright');
  const footerBottomBlock = footerBottom.children[0].children[0];
  const configElementsArray = Array.from(footerBottomBlock.children);
  let countriesdatapath; let dropdowntitle; let
    copyrightstring;
  configElementsArray.forEach((configElement) => {
    configElement.style.display = 'none';
    const configNameElement = configElement.querySelector('div');
    const configName = configNameElement.textContent.trim().toLowerCase();
    if (configName === 'copyrightstring') {
      copyrightstring = configNameElement.nextElementSibling.textContent;
    } else if (configName === 'dropdowntitle') {
      dropdowntitle = configNameElement.nextElementSibling.textContent;
    } else if (configName === 'countriesdatapath') {
      countriesdatapath = configNameElement.nextElementSibling.textContent.toLowerCase();
    }
  });
  const containerDiv = createElement('div', 'default-content-wrapper');
  const rowDiv = createElement('div', 'row');

  const colDiv1 = createElement('div', 'col-copyright');
  const paragraph = createElement('p', '');
  paragraph.textContent = copyrightstring;
  colDiv1.appendChild(paragraph);

  const colDiv2 = createElement('div', 'col-country');
  createDropdown(colDiv2, dropdowntitle, countriesdatapath);
  rowDiv.appendChild(colDiv1);
  rowDiv.appendChild(colDiv2);

  containerDiv.appendChild(rowDiv);
  footerBottom.textContent = '';
  footerBottom.appendChild(containerDiv);
}
/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  block.textContent = '';
  const fragment = await loadFragment(footerPath);

  decorateFooterLinks(fragment);
  decorateFooterBottom(fragment);
  const footer = document.createElement('div');
  while (fragment.firstElementChild) { footer.append(fragment.firstElementChild); }
  block.append(footer);
}
