function fetchGif() {
  // Todo: Replace the next line with your API key
  const apiKey = "insertWeridGiphyWeridAPIKeyHere";
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=hello&limit=20`
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      // Todo: call the processJsonResponse function padding along the data
      processJsonResponse(json);
    });
}

function init() {
  fetchGif();
}

$(document).ready(init);
