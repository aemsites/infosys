import { createElement } from '../../scripts/blocks-utils.js';

// IKI Footer Subscription Code
// function validateikisub() {
//   const i = $('#emailsub').val();
//   const e = i.split('@');
// 	  const t = ['gmail.', 'yahoo.', 'outlook.', 'rediffmail.', 'hotmail.', 'me.'];
//   if (validateEmailiki(i)) {
// 	  let s;
// 	  for (s = 0; s < t.length; s++) if (arrvalue = t[s].toString(), e[1].toLowerCase().indexOf(arrvalue) == 0) return $('#errormsgiki').html('Please enter Business Email'), $('#emailsub').focus(), !1;
// 	  const a = Dmdbase_CDC.CompanyProfile.country_name;
//     const o = Dmdbase_CDC.CompanyProfile.demandbase_sid;
//     const n = Dmdbase_CDC.CompanyProfile.industry;
//     const l = Dmdbase_CDC.CompanyProfile.sub_industry;
//     const d = Dmdbase_CDC.CompanyProfile.company_name;
//     const c = Dmdbase_CDC.CompanyProfile.revenue_range;
//     const r = Dmdbase_CDC.CompanyProfile.city;
//     const m = Dmdbase_CDC.CompanyProfile.state;
//     const p = Dmdbase_CDC.CompanyProfile.registry_zip_code;
//     const b = Dmdbase_CDC.CompanyProfile.fortune_1000;
//     const u = Dmdbase_CDC.CompanyProfile.forbes_2000;
//     const f = '';
//     const y = '';
//     const g = '';
//     const v = '';// ,
//     // k = getElementById("sptextiki").value,
//     // x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#email").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;

//     const paramss = `email64zxc=${$('#email64zxca').val()}&camFormName=connect-iki&camId=null&camCustId=null&email=${$('#emailsub').val()}&Source=IKI Footer Subscribe&referral_source=${window.location.search.substring(1)}&opt-in-comm=Yes&country=${a}&demandbase_sid=${o}&industry=${n}&sub_industry=${l}&company_name=${d}&revenue_range=${c}&city=${r}&state=${m}&zip=${p}&fortune_1000=${b}&forbes_2000=${u}&watch_list_account_type=${f}&watch_list_account_status=${y}&db_country_name_ip=${g}&office_phone=${v}`;

//     // let paramss = $('#subscribeEmail').serialize();

//     fetch('https://marcom.infosys.com/services/forms/v1/response', {
//       method: 'POST',
//       credentials: 'include',
//       body: paramss,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'manual', // Set to 'auto' to follow redirection set in form processing step
//     }).then((response) => {
//       // Handle the redirection response
//       $('#subscribeEmail, .h4-head').fadeOut();
//       $('#thankyousub').fadeIn(); // Set display property according to use case.
//     })
//       .catch((error) => {
//         console.error(error);
//       });

// 	 // return getElementById("blindiki").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyou").fadeIn(), !1

//     return $('#subscribeEmail, .h4-head').fadeOut(), $('#thankyousub').fadeIn(), !1;
//   }
//   return $('#errormsgiki').html('Please enter the valid email id'), $('#emailsub').focus(), !1;
// }

// function validateEmailiki(i) {
//   const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return e.test(i);
// }
export function decorateColumnDiv(colDiv1TitleLink, columnName, href) {
  const colDiv1 = createElement('div', 'col-lg-3');
  const anchor1 = createElement('a','');

  if (href) {
    anchor1.href = href;
  } else {
    anchor1.href = colDiv1TitleLink.href;
  }

  anchor1.setAttribute('title', colDiv1TitleLink.textContent);
  const boxDiv1 = createElement('div', 'box');
  const boxContentDiv1 = createElement('div', 'box-content');

  const span1 = createElement('span', 'iki-icons');
  span1.classList.add(`icon-${columnName}`);
  const span2 = createElement('span', '');
  span2.textContent = colDiv1TitleLink.textContent;

  boxContentDiv1.appendChild(span1);
  boxContentDiv1.appendChild(span2);
  boxDiv1.appendChild(boxContentDiv1);
  anchor1.appendChild(boxDiv1);
  colDiv1.appendChild(anchor1);

  return colDiv1;
}

function showInsightsDiv(div) {
  const subscriptionDiv = div.querySelector('.box');
  subscriptionDiv.style.display = 'none';
  const subscriptionPopUpDiv = div.querySelector('.tooltip-content');
  // $('html, body').animate({
  //   scrollTop: $('#subscribeinsights').offset().top - 100,
  // }, 200);
  // subscriptionPopUpDiv.animate.scrollTop = subscriptionDiv.offsetTop-100;
  // window.scrollTo({
  //     top: subscriptionDiv.offsetTop - 100,
  //     behavior: 'smooth', // Smooth scrolling behavior
  //     duration: 200 // Duration in milliseconds (Note: This option is not supported in all browsers)
  // });
  subscriptionPopUpDiv.style.display = 'block';
  // subscriptionPopUpDiv.style.transform = 'scale3d(1,1,1)';
  // subscriptionPopUpDiv.scrollTo;
   subscriptionPopUpDiv.style.top = subscriptionDiv.offsetTop - 100;
}

function showPodcastsDiv(block) {
  const subscriptionDiv = block.querySelector('#subscribeinsights a');
  subscriptionDiv.style.display = 'none';
  const subscriptionPopUpDiv = block.querySelector('.subscription .tooltip-content');
  // $('html, body').animate({
  //     scrollTop: $("#subscribeinsights").offset().top - 100
  // }, 200);
  subscriptionPopUpDiv.animate.scrollTop = subscriptionDiv.offsetTop-100;
  // window.scrollTo({
  //   top: subscriptionDiv.offsetTop - 100,
  //   behavior: 'smooth', // Smooth scrolling behavior
  //   duration: 200, // Duration in milliseconds (Note: This option is not supported in all browsers)
  // });
  subscriptionPopUpDiv.style.display = 'block';
  subscriptionPopUpDiv.style.transform = 'scale3d(1,1,1)';
}

// function validateikisubsidebar() {
//   const i = $('#emailSidebar').val();
//   const e = i.split('@');
// 	  const t = ['gmail.', 'yahoo.', 'outlook.', 'rediffmail.', 'hotmail.', 'me.'];
//   if (validateEmailiki(i)) {
// 	  let s;
// 	  for (s = 0; s < t.length; s++) if (arrvalue = t[s].toString(), e[1].toLowerCase().indexOf(arrvalue) == 0) return $('#errormsgikisidebar').html('Please enter Business Email'), $('#emailSidebar').focus(), !1;
// 	  /* var a = Dmdbase_CDC.CompanyProfile.country_name,
// 		o = Dmdbase_CDC.CompanyProfile.demandbase_sid,
// 		n = Dmdbase_CDC.CompanyProfile.industry,
// 		l = Dmdbase_CDC.CompanyProfile.sub_industry,
// 		d = Dmdbase_CDC.CompanyProfile.company_name,
// 		c = Dmdbase_CDC.CompanyProfile.revenue_range,
// 		r = Dmdbase_CDC.CompanyProfile.city,
// 		m = Dmdbase_CDC.CompanyProfile.state,
// 		p = Dmdbase_CDC.CompanyProfile.registry_zip_code,
// 		b = Dmdbase_CDC.CompanyProfile.fortune_1000,
// 		u = Dmdbase_CDC.CompanyProfile.forbes_2000, */
//     const a = '';
//     const o = '';
//     const n = '';
//     const l = '';
//     const d = '';
//     const c = '';
//     const r = '';
//     const m = '';
//     const p = '';
//     const b = '';
//     const u = '';
//     const f = '';
//     const y = '';
//     const g = '';
//     const v = '';
//     const k = getElementById('sptextikisidebar').value;
//     const x = `https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=${$('#emailSidebar').val()}&Source=IKI Sidebar Subscribe&referral_source=${window.location.search.substring(1)}&opt-in-comm=Yes&sptext=${k}&country=${a}&demandbase_sid=${o}&industry=${n}&sub_industry=${l}&company_name=${d}&revenue_range=${c}&city=${r}&state=${m}&zip=${p}&fortune_1000=${b}&forbes_2000=${u}&watch_list_account_type=${f}&watch_list_account_status=${y}&db_country_name_ip=${g}&office_phone=${v}`;
// 	  return getElementById('blindikisidebar').innerHTML = `<img src="${x}" id="submit" style="width:1px; height:1px;" />`, $('#subscribeEmailSidebar, .h4-head-sidebar').fadeOut(), $('#thankyousidebar').fadeIn(), !1;
//   }
//   return $('#errormsgikisidebar').html('Please enter the valid email id'), $('#emailSidebar').focus(), !1;
// }

function decoratePodcastsDiv(colDiv1TitleLink, columnName, podcastPopupDiv) {
  const href = 'javascript:void(0);';
  const colDiv4 = decorateColumnDiv(colDiv1TitleLink, columnName, href);

  colDiv4.onclick = function () {
    showInsightsDiv(colDiv4);
  };

  // Create the tooltip-content span within the fourth column
  const tooltipContentSpan2 = createElement('span', 'tooltip-content');
  
  const ulElement = createElement('ul','');
  const podcastChildren = Array.from(podcastPopupDiv.children[0].children);

  podcastChildren.forEach((podcastElement) => {
    const listItem = createElement('li','');
    const anchor = createElement('a','');
    let splitText = podcastElement.textContent.split(':').map(text => text.trim());

    anchor.title = splitText[0];
    anchor.href = podcastElement.href;
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
    const iconElement = createElement('i',splitText[1]);
    const text = createElement('p','');
    text.textContent = splitText[0];
    anchor.appendChild(iconElement);
    anchor.appendChild(text);
    listItem.appendChild(anchor);
    ulElement.appendChild(listItem);
  });
  tooltipContentSpan2.appendChild(ulElement);
  colDiv4.insertBefore(tooltipContentSpan2,colDiv4.firstChild);

  return colDiv4;
}

export function decorateInsightsDiv(colDiv1TitleLink, columnName) {
  const href = 'javascript:void(0);';
  const colDiv3 = decorateColumnDiv(colDiv1TitleLink, columnName, href);

 
  const tooltipContentSpan = createElement('span');
  tooltipContentSpan.className = 'tooltip-content';
  const subInsDiv = createElement('div','sub-ins');

  const h4Element = createElement('h4','');
  h4Element.textContent = 'Stay connected with our latest Insights';

  // Create the form element within the sub-ins div
  const formElement = createElement('form','');
  formElement.id = 'subscribeEmail';
  formElement.name = 'subscribeEmail';
  formElement.setAttribute('onsubmit', 'return validateikisub(this);');
  formElement.method = 'post';
  formElement.action = 'https://marcom.infosys.com/services/forms/v1/response';

  // Create the div with id email64zxca-container within the form
  const emailContainerDiv = createElement('div','email-checker');
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
  const emailInput2 = createElement('input','input-txt');
  emailInput2.type = 'email';
  emailInput2.id = 'emailsub';
  emailInput2.name = 'email';
  emailInput2.placeholder = 'Your company email';

  // Create the error message paragraph within the form
  const errorMsgP = createElement('p','');
  errorMsgP.id = 'errormsgiki';
  errorMsgP.style.fontSize = '14px';

  // Create the submit button within the form
  const submitBtn = createElement('button','iki-sub-btn');
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
 
  colDiv3.insertBefore(tooltipContentSpan,colDiv3.firstChild);
  // Create the anchor element for the third column

  colDiv3.onclick = function () {
    showInsightsDiv(colDiv3);
  };
  return colDiv3;
}

export default async function decorate(block) {

  //const articleElement = createElement('article', 'iki-subscribtion-footer');
  const containerDiv = createElement('div','container-fluid');
  const rowDiv = createElement('div','row');
  containerDiv.appendChild(rowDiv);
  //articleElement.appendChild(containerDiv);
  let colDiv;

  const blockChildren = Array.from(block.children);
  blockChildren.forEach((columnElement) => {
    const columnNameElement = columnElement.children[0];
    const columnName = columnNameElement.textContent.trim().toLowerCase();
    const titleLinkDiv = columnElement.children[1];
    if (columnName === 'connect' || columnName === 'request-expert') {
      colDiv = decorateColumnDiv(titleLinkDiv, columnName);
    } else if (columnName === 'insight') {
      const insightsPopupDiv = columnElement.children[2];
      colDiv = decorateInsightsDiv(titleLinkDiv, columnName,insightsPopupDiv);
    } else if (columnName === 'podcast') {
      const podcastPopupDiv = columnElement.children[2];
      colDiv = decoratePodcastsDiv(titleLinkDiv, columnName, podcastPopupDiv);
    }
    rowDiv.appendChild(colDiv);
  });

  block.textContent = '';

  containerDiv.appendChild(rowDiv);
  block.appendChild(containerDiv);
  //block.appendChild(articleElement);
}
