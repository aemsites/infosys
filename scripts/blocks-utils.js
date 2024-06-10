function createAemElement(tagName, attributes, properties, ...children) {
  const el = document.createElement(tagName);
  if (attributes) {
    Object.keys(attributes).forEach((name) => {
      el.setAttribute(name, attributes[name]);
    });
  }
  if (properties) {
    Object.keys(properties).forEach((name) => {
      el[name] = properties[name];
    });
  }
  children.forEach((child) => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (Array.isArray(child)) {
      child.forEach((c) => el.appendChild(c));
    } else if (child) {
      el.appendChild(child);
    }
  });
  return el;
}

function createCustomElement(tagname, className) {
  const element = document.createElement(tagname);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json(); // Wait for JSON parsing
    return jsonData.data.map((country) => ({
      name: country.name,
      url: country.url,
    }));
  } catch (error) {
    return null;
  }
}

function getOptimalImageFromPictureTag(picture) {
  if (!picture) return '';

  const sources = picture.querySelectorAll('source');
  let selectedSrc = '';

  if (sources && sources.length > 0) {
    // Loop through source elements to find the first matching media query
    for (const source of sources) {
      if (source.media && window.matchMedia(source.media).matches) {
        selectedSrc = source.srcset;
        break;
      } else if (!source.media) {
        // If no media attribute is present, it's the default source
        selectedSrc = source.srcset;
      }
    }
  }

  // If no media query matches, use the img element's src as fallback
  if (!selectedSrc) {
    const img = picture.querySelector('img');
    if (img) {
      selectedSrc = img.currentSrc || img.src;
    }
  }

  return selectedSrc;
}

export {
  createAemElement,
  createCustomElement,
  fetchData,
  getOptimalImageFromPictureTag,
};
