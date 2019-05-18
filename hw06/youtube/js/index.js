const search = () => {
    let term = (document.querySelector('input').value);
    let url = 'https://www.apitutor.org/youtube/simple/?q='+term+'&type=video';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    for (data_p of data) {
      let template = `
      <div class="vid">
        <iframe width="400" height="300" src="${data_p.url}"></iframe>
        <p>${data_p.title}</p>
      </div>
        `;
      document.querySelector('#output').innerHTML += template;
    }
    //document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};

document.querySelector('#search').onclick = search;
