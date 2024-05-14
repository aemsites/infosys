import { createElement } from '../../scripts/blocks-utils.js';

// IKI Footer Subscription Code
function validateikisub() {
	const i = $("#emailsub").val();
	var e = i.split("@"),
	  t = ["gmail.", "yahoo.", "outlook.", "rediffmail.", "hotmail.", "me."];
	if (validateEmailiki(i)) {
	  var s;
	  for (s = 0; s < t.length; s++)
		if (arrvalue = t[s].toString(), 0 == e[1].toLowerCase().indexOf(arrvalue)) return $("#errormsgiki").html("Please enter Business Email"), $("#emailsub").focus(), !1;
	  var a = Dmdbase_CDC.CompanyProfile.country_name,
		o = Dmdbase_CDC.CompanyProfile.demandbase_sid,
		n = Dmdbase_CDC.CompanyProfile.industry,
		l = Dmdbase_CDC.CompanyProfile.sub_industry,
		d = Dmdbase_CDC.CompanyProfile.company_name,
		c = Dmdbase_CDC.CompanyProfile.revenue_range,
		r = Dmdbase_CDC.CompanyProfile.city,
		m = Dmdbase_CDC.CompanyProfile.state,
		p = Dmdbase_CDC.CompanyProfile.registry_zip_code,
		b = Dmdbase_CDC.CompanyProfile.fortune_1000,
		u = Dmdbase_CDC.CompanyProfile.forbes_2000,
		f = "",
		y = "",
		g = "",
		v = "";//,
		//k = document.getElementById("sptextiki").value,
		//x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#email").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
		
		
		let paramss = "email64zxc=" + $("#email64zxca").val() + "&camFormName=connect-iki&camId=null&camCustId=null&email=" + $("#emailsub").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
		
		//let paramss = $('#subscribeEmail').serialize();


		fetch('https://marcom.infosys.com/services/forms/v1/response', {
		method: 'POST',
		credentials: 'include',
		body: paramss,
		headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
		},
		redirect: 'manual' // Set to 'auto' to follow redirection set in form processing step
		}).then(response => {
		// Handle the redirection response
			$("#subscribeEmail, .h4-head").fadeOut();
			$("#thankyousub").fadeIn(); // Set display property according to use case.

		})
		.catch(error => {
		console.error(error);
		})
		
		
		
	 // return document.getElementById("blindiki").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyou").fadeIn(), !1
		
		return $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyousub").fadeIn(), !1
		
	}
	return $("#errormsgiki").html("Please enter the valid email id"), $("#emailsub").focus(), !1
  }

  function validateEmailiki(i) {
	const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return e.test(i)
  }

function showInsightsDiv( div){
    const subscriptionDiv = div.querySelector('.box');
    subscriptionDiv.style.display = 'none';
    const subscriptionPopUpDiv = div.querySelector('.tooltip-content');
    $('html, body').animate({
        scrollTop: $("#subscribeinsights").offset().top - 100
    }, 200);
    // subscriptionPopUpDiv.animate.scrollTop = subscriptionDiv.offsetTop-100;
    // window.scrollTo({
    //     top: subscriptionDiv.offsetTop - 100,
    //     behavior: 'smooth', // Smooth scrolling behavior
    //     duration: 200 // Duration in milliseconds (Note: This option is not supported in all browsers)
    // });
    subscriptionPopUpDiv.style.display = 'block';
    subscriptionPopUpDiv.style.transform = 'scale3d(1,1,1)';
    subscriptionPopUpDiv.scrollTo
    subscriptionPopUpDiv.style.top = subscriptionDiv.offsetTop - 100;
    
}
 

function showPodcastsDiv( block){
    const subscriptionDiv = block.querySelector('#subscribeinsights a');
    subscriptionDiv.style.display = 'none';
    const subscriptionPopUpDiv = block.querySelector('.subscription .tooltip-content');
    // $('html, body').animate({
    //     scrollTop: $("#subscribeinsights").offset().top - 100
    // }, 200);
    // subscriptionPopUpDiv.animate.scrollTop = subscriptionDiv.offsetTop-100;
    window.scrollTo({
        top: subscriptionDiv.offsetTop - 100,
        behavior: 'smooth', // Smooth scrolling behavior
        duration: 200 // Duration in milliseconds (Note: This option is not supported in all browsers)
    });
    subscriptionPopUpDiv.style.display = 'block';
    subscriptionPopUpDiv.style.transform = 'scale3d(1,1,1)';
}


  function validateikisubsidebar() {
	const i = $("#emailSidebar").val();
	var e = i.split("@"),
	  t = ["gmail.", "yahoo.", "outlook.", "rediffmail.", "hotmail.", "me."];
	if (validateEmailiki(i)) {
	  var s;
	  for (s = 0; s < t.length; s++)
		if (arrvalue = t[s].toString(), 0 == e[1].toLowerCase().indexOf(arrvalue)) return $("#errormsgikisidebar").html("Please enter Business Email"), $("#emailSidebar").focus(), !1;
	  /*var a = Dmdbase_CDC.CompanyProfile.country_name,
		o = Dmdbase_CDC.CompanyProfile.demandbase_sid,
		n = Dmdbase_CDC.CompanyProfile.industry,
		l = Dmdbase_CDC.CompanyProfile.sub_industry,
		d = Dmdbase_CDC.CompanyProfile.company_name,
		c = Dmdbase_CDC.CompanyProfile.revenue_range,
		r = Dmdbase_CDC.CompanyProfile.city,
		m = Dmdbase_CDC.CompanyProfile.state,
		p = Dmdbase_CDC.CompanyProfile.registry_zip_code,
		b = Dmdbase_CDC.CompanyProfile.fortune_1000,
		u = Dmdbase_CDC.CompanyProfile.forbes_2000,*/
		var a = "",
		o = "",
		n = "",
		l = "",
		d = "",
		c = "",
		r = "",
		m = "",
		p = "",
		b = "",
		u = "",
		f = "",
		y = "",
		g = "",
		v = "",
		k = document.getElementById("sptextikisidebar").value,
		x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#emailSidebar").val() + "&Source=IKI Sidebar Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
	  return document.getElementById("blindikisidebar").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmailSidebar, .h4-head-sidebar").fadeOut(), $("#thankyousidebar").fadeIn(), !1
	}
	return $("#errormsgikisidebar").html("Please enter the valid email id"), $("#emailSidebar").focus(), !1
  }

function decoratePodcastsDiv(block) {
    
    // Create the fourth column div
    const colDiv4 = document.createElement('div');
    colDiv4.className = 'col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center p0 podcast-box podcast-box-link';
    colDiv4.id = 'sub-podcasts';
    colDiv4.onclick = function() {
        showInsightsDiv(colDiv4);
    };
  
    // Create the tooltip-content span within the fourth column
    const tooltipContentSpan2 = document.createElement('span');
    tooltipContentSpan2.className = 'tooltip-content clearfix';
  
    // Create the ul element within the tooltip-content span for the fourth column
    const ulElement = document.createElement('ul');
    ulElement.className = 'bg-topaz-dark';
  
    // Create the list items within the ul element for the fourth column
    const listItem1 = document.createElement('li');
    const anchor4 = document.createElement('a');
    anchor4.title = 'Apple Podcasts';
    anchor4.href = 'https://podcasts.apple.com/in/podcast/knowledge-innovation/id1532523679';
    anchor4.setAttribute('target', '_blank');
    anchor4.textContent = 'Apple Podcasts';
    anchor4.className = 'icon-apple';
    listItem1.appendChild(anchor4);
  
    const listItem2 = document.createElement('li');
    const anchor5 = document.createElement('a');
    anchor5.title = 'Spotify';
    anchor5.className = 'icon-spotify';
    anchor5.href = 'https://open.spotify.com/show/0lcZZysYAbSsI2w7LoZ5Ie';
    anchor5.setAttribute('target', '_blank');
    anchor5.textContent = 'Spotify';
    listItem2.appendChild(anchor5);
  
    const listItem3 = document.createElement('li');
    const anchor6 = document.createElement('a');
    anchor6.title = 'Google Podcasts';
    anchor6.className = 'icon-google';
    anchor6.href = 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMDIyZmY2Yy9wb2RjYXN0L3Jzcw==';
    anchor6.setAttribute('target', '_blank');
    anchor6.textContent = 'Google Podcasts';
    listItem3.appendChild(anchor6);

    const listItem4 = document.createElement('li');
    const anchor8 = document.createElement('a');
    anchor8.className = 'icon-sound-cloud';
    anchor8.title = 'Google Podcasts';
    anchor8.href = 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMDIyZmY2Yy9wb2RjYXN0L3Jzcw==';
    anchor8.setAttribute('target', '_blank');
    anchor8.textContent = 'Sound Cloud';
    listItem4.appendChild(anchor8);
  
    // Append the list items to the ul element for the fourth column
    ulElement.appendChild(listItem1);
    ulElement.appendChild(listItem2);
    ulElement.appendChild(listItem3);
    ulElement.appendChild(listItem4);
  
    // Append the ul element to the tooltip-content span for the fourth column
    tooltipContentSpan2.appendChild(ulElement);
    colDiv4.appendChild(tooltipContentSpan2);
  
    // Create the anchor element for the fourth column
    const anchor7 = document.createElement('a');
    anchor7.href = 'javascript:void(0);';
    anchor7.title = 'Subscribe for Podcasts';
    anchor7.setAttribute('aria-label', 'Subscribe for Podcasts');
    anchor7.className = 'box wow fadeInLeft';
    anchor7.setAttribute('data-wow-delay', '0.9s');
  
    // Create the box div within the anchor element for the fourth column
    const boxDiv4 = document.createElement('div');
    boxDiv4.className = 'box-content';
  
    // Create the span element within the box div for the fourth column
    const span7 = document.createElement('span');
    span7.className = 'iki-icons icon-podcast';
  
    // Create the second span element within the box div for the fourth column
    const span8 = document.createElement('span');
    span8.textContent = 'Subscribe for Podcasts';
  
    // Append the elements to each other for the fourth column
    boxDiv4.appendChild(span7);
    boxDiv4.appendChild(span8);
    anchor7.appendChild(boxDiv4);
    colDiv4.appendChild(anchor7);
  
    return colDiv4;
     
  }

  export function decorateColumnDiv(colDiv1TitleLink, columnName){
     
     const colDiv1 = createElement('div', 'col-lg-3');
     const anchor1 = createElement('a');
     anchor1.href = colDiv1TitleLink.href;
     anchor1.setAttribute('title', colDiv1TitleLink.textContent);
     const boxDiv1 = createElement('div', 'box');
     const boxContentDiv1 = createElement('div','box-content');
     
     const span1 = createElement('span','iki-icons');
     span1.classList.add('icon-'+columnName);
     const span2 = createElement('span','');
     span2.textContent = colDiv1TitleLink.textContent;
   
     boxContentDiv1.appendChild(span1);
     boxContentDiv1.appendChild(span2);
     boxDiv1.appendChild(boxContentDiv1);
     anchor1.appendChild(boxDiv1);
     colDiv1.appendChild(anchor1);
    
     return colDiv1;  
  }

  export function decorateInsightsDiv(){
    // Create the third column div
    const colDiv3 = document.createElement('div');
    colDiv3.className = 'col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center p0 podcast-box podcast-box-link';
    colDiv3.id = 'subscribeinsights';
    
  
    // Create the tooltip-content span within the third column
    const tooltipContentSpan = document.createElement('span');
    tooltipContentSpan.className = 'tooltip-content clearfix';
  
    // Create the sub-ins div within the tooltip-content span
    const subInsDiv = document.createElement('div');
    subInsDiv.className = 'sub-ins bg-topaz-dark';
  
    // Create the h4 element within the sub-ins div
    const h4Element = document.createElement('h4');
    h4Element.className = 'h4-head fontweight400';
    h4Element.textContent = 'Stay connected with our latest Insights';
  
    // Create the form element within the sub-ins div
    const formElement = document.createElement('form');
    formElement.id = 'subscribeEmail';
    formElement.name = 'subscribeEmail';
    formElement.setAttribute('onsubmit', 'return validateikisub(this);');
    formElement.method = 'post';
    formElement.action = 'https://marcom.infosys.com/services/forms/v1/response';
  
    // Create the div with id email64zxca-container within the form
    const emailContainerDiv = document.createElement('div');
    emailContainerDiv.id = 'email64zxca-container';
    emailContainerDiv.className = 'email-checker';
    emailContainerDiv.setAttribute('aria-hidden', 'true');
  
    // // Create the label for the email input within the emailContainerDiv
    // const emailLabel = document.createElement('label');
    // emailLabel.setAttribute('for', 'email64zxca');
    // emailLabel.textContent = 'Registration Email';
    // emailLabel.style.boxSizing = 'border-box';
  
    // // Create the input for the email within the emailContainerDiv
    // const emailInput = document.createElement('input');
    // emailInput.type = 'text';
    // emailInput.id = 'email64zxca';
    // emailInput.name = 'email64zxc';
    // emailInput.tabIndex = '-1';
    // emailInput.autocomplete = 'backup-email';
  
    // // Append the label and input to the emailContainerDiv
    // emailContainerDiv.appendChild(emailLabel);
    // emailContainerDiv.appendChild(emailInput);
  
    // Create the email input within the form
    const emailInput2 = document.createElement('input');
    emailInput2.type = 'email';
    emailInput2.className = 'input-txt';
    emailInput2.id = 'emailsub';
    emailInput2.name = 'email';
    emailInput2.placeholder = 'Your company email';
  
    // Create the error message paragraph within the form
    const errorMsgP = document.createElement('p');
    errorMsgP.id = 'errormsgiki';
    errorMsgP.style.fontSize = '14px';
  
    // Create the submit button within the form
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'iki-sub-btn bg-topaz-medium';
    submitBtn.textContent = 'Subscribe';
  
    // Create the hidden input fields within the form
    const hiddenInput1 = document.createElement('input');
    hiddenInput1.type = 'hidden';
    hiddenInput1.value = 'infysp';
    hiddenInput1.id = 'sptextiki';
    hiddenInput1.name = 'sptext';
  
    const hiddenInput2 = document.createElement('input');
    hiddenInput2.type = 'hidden';
    hiddenInput2.name = 'camFormName';
    hiddenInput2.value = 'connect-iki';
  
    // Append the hidden inputs to the form
    formElement.appendChild(hiddenInput1);
    formElement.appendChild(hiddenInput2);

    const thankyoudiv = document.createElement('div');
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
    colDiv3.appendChild(tooltipContentSpan);
  
    // Create the anchor element for the third column
    const anchor3 = document.createElement('a');
    anchor3.href = 'javascript:void(0);';
    anchor3.title = 'Subscribe for Insights';
    anchor3.setAttribute('aria-label', 'Subscribe for Insights');
    anchor3.className = 'box wow fadeInLeft';
    anchor3.setAttribute('data-wow-delay', '0.9s');
  
    // Create the box div within the anchor element for the third column
    const boxDiv3 = document.createElement('div');
    boxDiv3.className = 'box-content';
  
    // Create the span element within the box div for the third column
    const span5 = document.createElement('span');
    span5.className = 'iki-icons icon-insight';
  
    // Create the second span element within the box div for the third column
    const span6 = document.createElement('span');
    span6.textContent = 'Subscribe for Insights';
  
    // Append the elements to each other for the third column
    boxDiv3.appendChild(span5);
    boxDiv3.appendChild(span6);
    anchor3.appendChild(boxDiv3);
    colDiv3.appendChild(anchor3);
    colDiv3.onclick = function() {
        showInsightsDiv(colDiv3);
    };
    return colDiv3;
  }
  
export default async function decorate(block) {
     
    

    // Create the article element
    const articleElement = document.createElement('article');
    articleElement.className = 'iki-subscribtion-footer';
  
    // Create the container-fluid div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';
    // Append the row to the container-fluid div
     // Create the row div
     const rowDiv = document.createElement('div');
     rowDiv.className = 'row';
    containerDiv.appendChild(rowDiv);
  
    // Append the container-fluid div to the article element
    articleElement.appendChild(containerDiv);
    let colDiv,colDiv3, colDiv4;
   

      const blockChildren = Array.from(block.children);
  
      blockChildren.forEach((columnElement) => {
    const columnNameElement = columnElement.children[0];
    const columnName = columnNameElement.textContent.trim().toLowerCase();
    const colDiv1TitleLink = columnElement.children[1];  
    if (columnName === 'connect' || columnName == 'request-expert') {      
        colDiv = decorateColumnDiv(colDiv1TitleLink, columnName);
        rowDiv.appendChild(colDiv);
       }else if(columnName === 'insight'){

      }else if(columnName === 'podcast'){

      }
      
    
  });
   
    block.textContent = '';
    

     
     colDiv3=decorateInsightsDiv();
     colDiv4=decoratePodcastsDiv();

    
   
    rowDiv.appendChild(colDiv3);
    rowDiv.appendChild(colDiv4);
  
    // Append the row to the container-fluid div
    containerDiv.appendChild(rowDiv);
  
    // Append the container-fluid div to the article element
    articleElement.appendChild(containerDiv);
  
    // Append the article element to the document body or any desired parent element
    block.appendChild(articleElement);
  }