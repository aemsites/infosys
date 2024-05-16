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
  
  const span1 =  titleLinkElement.querySelector('span');
  if(span1){
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

 async function loadForm(formLink){
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
  return loadBlock(formBlock).then(div => {
        return div.querySelector('form');
    });
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

export function decorateInsightsDiv(colDiv1TitleLink, columnName) {
  const colDiv3 = decorateColumnDiv(colDiv1TitleLink, columnName);

  const tooltipContentSpan = createElement('span');
  tooltipContentSpan.className = 'popup';
  const subInsDiv = createElement('div', 'sub-ins');

  const h4Element = createElement('h4', '');
  h4Element.textContent = 'Stay connected with our latest Insights';

  // Create the form element within the sub-ins div
  const formElement = createElement('form', '');
  formElement.id = 'subscribeEmail';
  formElement.name = 'subscribeEmail';
  formElement.setAttribute('onsubmit', 'return validateikisub(this);');
  formElement.method = 'post';
  formElement.action = 'https://marcom.infosys.com/services/forms/v1/response';

  // Create the div with id email64zxca-container within the form
  const emailContainerDiv = createElement('div', 'email-checker');
  emailContainerDiv.id = 'email64zxca-container';
  emailContainerDiv.setAttribute('aria-hidden', 'true');

  // // Create the label for the email input within the emailContainerDiv
  // const emailLabel = createElement('label');
  // emailLabel.setAttribute('for', 'email64zxca');
  // emailLabel.textContent = 'Registration Email';
  // emailLabel.style.boxSizing = 'border-box';

  // // Create the input for the email within the emailContainerDiv
  // const emailInput = createElement('input');
  // emailInput.type = 'text';
  // emailInput.id = 'email64zxca';
  // emailInput.name = 'email64zxc';
  // emailInput.tabIndex = '-1';
  // emailInput.autocomplete = 'backup-email';

  // // Append the label and input to the emailContainerDiv
  // emailContainerDiv.appendChild(emailLabel);
  // emailContainerDiv.appendChild(emailInput);

  // Create the email input within the form
  const emailInput2 = createElement('input', 'input-txt');
  emailInput2.type = 'email';
  emailInput2.id = 'emailsub';
  emailInput2.name = 'email';
  emailInput2.placeholder = 'Your company email';

  // Create the error message paragraph within the form
  const errorMsgP = createElement('p', '');
  errorMsgP.id = 'errormsgiki';
  errorMsgP.style.fontSize = '14px';

  // Create the submit button within the form
  const submitBtn = createElement('button', 'iki-sub-btn');
  submitBtn.type = 'submit';
  submitBtn.classList.add('bg-topaz-medium');
  submitBtn.textContent = 'Subscribe';

  // Create the hidden input fields within the form
  const hiddenInput1 = createElement('input');
  hiddenInput1.type = 'hidden';
  hiddenInput1.value = 'infysp';
  hiddenInput1.id = 'sptextiki';
  hiddenInput1.name = 'sptext';

  const hiddenInput2 = createElement('input');
  hiddenInput2.type = 'hidden';
  hiddenInput2.name = 'camFormName';
  hiddenInput2.value = 'connect-iki';

  // Append the hidden inputs to the form
  formElement.appendChild(hiddenInput1);
  formElement.appendChild(hiddenInput2);

  const thankyoudiv = createElement('div');
  thankyoudiv.className = 'thankyousub';

  // Append the elements to each other for the third column
  formElement.appendChild(emailContainerDiv);
  formElement.appendChild(emailInput2);
  formElement.appendChild(errorMsgP);
  formElement.appendChild(submitBtn);
  subInsDiv.appendChild(h4Element);
  subInsDiv.appendChild(formElement);
  subInsDiv.appendChild(thankyoudiv);
  tooltipContentSpan.appendChild(subInsDiv);

  colDiv3.insertBefore(tooltipContentSpan, colDiv3.firstChild);
  // Create the anchor element for the third column

  colDiv3.onclick = function () {
    showPopupDiv(colDiv3);
  };
  return colDiv3;
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
