const search = (ev) => {
    let term = (document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q='+term+'&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {

  for (data_p of data) {
    let template = `
    <div class="song">
      <img class="image" src="${data_p.album.image_url}">
      <p>${data_p.name}</p>
      <iframe src="${data_p.preview_url}"></iframe>
    </div>
      `;
    document.querySelector('#output').innerHTML += template;
  }
  //   console.log(data);
  //   let imgg = JSON.stringify(data, null, 4).preview_url;
  // //  document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
  //   document.querySelector('#output').innerHTML = imgg;
};

document.querySelector('#search').onclick = search;
