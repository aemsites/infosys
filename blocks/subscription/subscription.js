import { createElement } from '../../scripts/blocks-utils.js';
import { buildBlock, decorateBlock, loadBlock } from '../../scripts/aem.js';

export function decorateColumnDiv(titleLinkElement) {
  const colDiv = createElement('div', 'columns');
  const anchor = createElement('a', '');
  const link = titleLinkElement.querySelector('a');
  if (link) {
    anchor.setAttribute('title', titleLinkElement.querySelector('a').textContent);
  }

  const boxDiv = createElement('div', 'box');

  const span1 = titleLinkElement.querySelector('span');
  if (span1) {
    span1.classList.add('header-icons');
    boxDiv.appendChild(span1);
  }

  const span2 = createElement('span', '');
  span2.textContent = titleLinkElement.textContent;

  boxDiv.appendChild(span2);
  anchor.appendChild(boxDiv);
  colDiv.appendChild(anchor);

  return colDiv;
}

function showPopupDiv(div) {
  const subscriptionDiv = div.querySelector('.box');
  subscriptionDiv.style.display = 'none';
  const subscriptionPopUpDiv = div.querySelector('.popup');
  subscriptionPopUpDiv.style.display = 'block';
  subscriptionPopUpDiv.style.top = subscriptionDiv.offsetTop - 100;
}

async function loadForm(formLink) {
  const formBlock = buildBlock('form', '');
  const linkDiv = document.createElement('div');
  const linkDiv1 = document.createElement('div');
  const pDiv = document.createElement('p');
  const anchor = document.createElement('a');
  anchor.href = formLink.href;
  anchor.textContent = formLink.textContent;
  pDiv.appendChild(anchor);
  linkDiv1.appendChild(pDiv);
  linkDiv.appendChild(linkDiv1);
  formBlock.innerHTML = linkDiv.innerHTML;

  const formBlockParent = document.createElement('div');
  formBlockParent.classList.add('form-wrapper');
  formBlockParent.appendChild(formBlock);

  decorateBlock(formBlock);
  return loadBlock(formBlock).then((div) => div.querySelector('form'));
}
async function decoratePopupDiv(popupDiv) {
  popupDiv.className = 'popup';
  if (popupDiv.children.length > 0) {
    const popupChildren = Array.from(popupDiv.children[0].children);
    for (const element of popupChildren) {
      if (element.tagName.toLowerCase() === 'a') {
        loadForm(element).then((loadedForm) => {
          element.replaceWith(loadedForm);
        });
      }
    }
  }
  return popupDiv;
}

export default async function decorate(block) {
  const containerDiv = createElement('div', 'container-fluid');
  const blockChildren = Array.from(block.children);

  for (const columnElement of blockChildren) {
    const titleLinkDiv = columnElement.children[0];
    let popupDiv = columnElement.children[1];

    if (titleLinkDiv) {
      const colDiv = decorateColumnDiv(titleLinkDiv);
      if (popupDiv.children.length > 0) {
        popupDiv = await decoratePopupDiv(popupDiv);

        colDiv.insertBefore(popupDiv, colDiv.firstChild);
        colDiv.onclick = function () {
          showPopupDiv(colDiv);
        };
      }
      containerDiv.appendChild(colDiv);
    }
  }

  block.textContent = '';

  block.appendChild(containerDiv);
}
