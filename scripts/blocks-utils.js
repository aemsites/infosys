
function createElement(tagname, className) {
  const element = document.createElement(tagname);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

/**
 * Reads the block markup and returns the configuration object.
 * This function returns the second column of each row as the value for the first column.
 * If there are more than two columns in a row, the function ignores the rest of the columns.
 * but those can be retrived by nextSibling property of the value column.
 * @param block - The block element.
 * @returns {{}} - The configuration object.
 */
function readBlockMarkup(block) {
  const config = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children) {
      const cols = [...row.children];
      if (cols[1]) {
        const col = cols[1];
        const name = toClassName(cols[0].textContent);
        config[name] = col;
      }
    }
  });
  return config;
}

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return data.data.map((country) => ({
        name: country.name,
        link: country.url,
      }));
    })
    .catch((error) => {
      callback(error, null);
    });
}

export {
  createElement,
  readBlockMarkup,
  fetchData 
};
