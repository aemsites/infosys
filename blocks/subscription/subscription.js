import { createCustomElement } from '../../scripts/blocks-utils.js';
import { buildBlock, decorateBlock, loadBlock } from '../../scripts/aem.js';


function handleSubmit(form) {
  const email = form.querySelector('.input-txt input').value;
    const e = email.split('@');
  	  const t = ['gmail.', 'yahoo.', 'outlook.', 'rediffmail.', 'hotmail.', 'me.'];
    if (validateEmailiki(email)) {
     
      let s, arrvalue;
      for (s = 0; s < t.length; s++) {
        arrvalue = t[s].toString();
        if (e[1].toLowerCase().indexOf(arrvalue) == 0) {
         form.querySelector('.errorStringDiv').style.opacity = '1';
         alert('email invalid');
         //form.querySelector('.errorStringDiv').style.display = 'block'
        }
      }
    }
        
  	  // const a = Dmdbase_CDC.CompanyProfile.country_name;
      // const o = Dmdbase_CDC.CompanyProfile.demandbase_sid;
      // const n = Dmdbase_CDC.CompanyProfile.industry;
      // const l = Dmdbase_CDC.CompanyProfile.sub_industry;
      // const d = Dmdbase_CDC.CompanyProfile.company_name;
      // const c = Dmdbase_CDC.CompanyProfile.revenue_range;
      // const r = Dmdbase_CDC.CompanyProfile.city;
      // const m = Dmdbase_CDC.CompanyProfile.state;
      // const p = Dmdbase_CDC.CompanyProfile.registry_zip_code;
      // const b = Dmdbase_CDC.CompanyProfile.fortune_1000;
      // const u = Dmdbase_CDC.CompanyProfile.forbes_2000;
      // const f = '';
      // const y = '';
      // const g = '';
      // const v = '';// ,
      // k = getElementById("sptextiki").value,
      // x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#email").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
  
      //const paramss = `email64zxc=${$('#email64zxca').val()}&camFormName=connect-iki&camId=null&camCustId=null&email=${$('#emailsub').val()}&Source=IKI Footer Subscribe&referral_source=${window.location.search.substring(1)}&opt-in-comm=Yes&country=${a}&demandbase_sid=${o}&industry=${n}&sub_industry=${l}&company_name=${d}&revenue_range=${c}&city=${r}&state=${m}&zip=${p}&fortune_1000=${b}&forbes_2000=${u}&watch_list_account_type=${f}&watch_list_account_status=${y}&db_country_name_ip=${g}&office_phone=${v}`;
  
      // let paramss = $('#subscribeEmail').serialize();
  
    //   fetch('https://marcom.infosys.com/services/forms/v1/response', {
    //     method: 'POST',
    //     credentials: 'include',
    //     body: paramss,
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'manual', // Set to 'auto' to follow redirection set in form processing step
    //   }).then((response) => {
    //     // Handle the redirection response
    //     $('#subscribeEmail, .h4-head').fadeOut();
    //     $('#thankyousub').fadeIn(); // Set display property according to use case.
    //   })
    //     .catch((error) => {
    //       console.error(error);
    //     });
  
  	//  // return getElementById("blindiki").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyou").fadeIn(), !1
  
    //   return $('#subscribeEmail, .h4-head').fadeOut(), $('#thankyousub').fadeIn(), !1;
    // }
    // return $('#errormsgiki').html('Please enter the valid email id'), $('#emailsub').focus(), !1;
  else{
    console.log('email is invalid');
  }
}
  
  function validateEmailiki(i) {
    const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return e.test(i);
  }


export function decorateColumnDiv(titleLinkElement) {
  const colDiv = createCustomElement('div', 'columns');
  const anchor = createCustomElement('a', '');
  const link = titleLinkElement.querySelector('a');
  if (link) {
    anchor.setAttribute('title', link.textContent);
    anchor.href = link.href;
  }
  const boxDiv = createCustomElement('div', 'box');
  const span1 = titleLinkElement.querySelector('span');
  if (span1) {
    span1.classList.add('header-icons');
    boxDiv.appendChild(span1);
  }

  const span2 = createCustomElement('span', '');
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
  const linkDiv = createCustomElement('div','');
  const linkDiv1 = createCustomElement('div','');
  const pDiv = createCustomElement('p','');
  const anchor = createCustomElement('a','');
  anchor.href = formLink.href;
  anchor.textContent = formLink.textContent;
  pDiv.appendChild(anchor);
  linkDiv1.appendChild(pDiv);
  linkDiv.appendChild(linkDiv1);
  formBlock.innerHTML = linkDiv.innerHTML;

  const formBlockParent = createCustomElement('div','');
  formBlockParent.classList.add('form-wrapper');
  formBlockParent.appendChild(formBlock);

  decorateBlock(formBlock);
  return loadBlock(formBlock).then((div) => div.querySelector('form'));
}
/**
 * Decorates the popup div by adding a class name and replacing anchor elements with loaded forms.
 * @param {HTMLElement} popupDiv - The popup div element to be decorated.
 * @returns {Promise<HTMLElement>} - The decorated popup div element.
 */
async function decoratePopupDiv(popupDiv) {
  popupDiv.className = 'popup';
  if (popupDiv.children.length > 0) {
    const popupChildren = Array.from(popupDiv.children[0].children);
    for (const element of popupChildren) {
      if (element.tagName.toLowerCase() === 'a') {
        loadForm(element).then((loadedForm) => {
          loadedForm.querySelector('.iki-sub-btn').onclick = function () { // Replace 'submit' with '#submit'
            handleSubmit(loadedForm);
          }
          element.replaceWith(loadedForm);
        });
      }
    }
  }
  return popupDiv;
}

export default async function decorate(block) {
  const containerDiv = createCustomElement('div', 'container-fluid');
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
