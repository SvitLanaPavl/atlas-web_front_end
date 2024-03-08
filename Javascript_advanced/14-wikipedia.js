function createElement(data) {
  const para = document.createElement('p');
  para.textContent = data;
  document.body.appendChild(para);
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText).query.pages[21721040].extract);
      } else {
        console.error(`Error status: ${request.status}`);
      }
    }
  };
  request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  request.send();
}
queryWikipedia(createElement);
