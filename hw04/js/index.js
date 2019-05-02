const showPhoto = (e) => {
    const clickedElement = e.target; // figure out which element the user clicked from the event object:
    const imgURL = clickedElement.style.backgroundImage; // figure out what its background image is:
    console.log(imgURL);
    // PART 1:
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview_box').className = 'preview_box active';
};

const cards = document.querySelectorAll('.card');
for (card of cards) {
  card.onclick = showPhoto;
}


// PART 3:
const close = () => {
  document.querySelector('.preview_box.active').className = 'preview_box';
}
document.querySelector('.close').onclick = close;

// PART 4: NEED HELP
//var nextt = imgURL.nextSiblingElement;
//var prevv = imgURL.previousSiblingElement;

const next = (e) => {
  const clickedElement = e.target;
  const imgURL = clickedElement.style.backgroundImage;
  console.log(imgURL);
  //document.querySelector('.featured_image').style.backgroundImage = nextt;
  document.querySelector('.featured_image').style.backgroundImage = imgURL.nextSiblingElement;
}
document.querySelector('.next').onclick = next;
document.querySelector('.featured_image').onclick = next;


// PART 5:
const previous = (e) => {
  const clickedElement = e.target;
  const imgURL = clickedElement.style.backgroundImage;
  console.log(imgURL);
  //document.querySelector('.featured_image').style.backgroundImage = prevv;
  document.querySelector('.featured_image').style.backgroundImage = imgURL.previousSiblingElement;
}
document.querySelector('.prev').onclick = previous;



const biggerPic = () => {
  document.querySelector('.featured_image').style.width = '100%';
  document.querySelector('.featured_image').style.height = '100%';
};

const smallerPic = () => {
   document.querySelector('.featured_image').style.width = '70%';
   document.querySelector('.featured_image').style.height = '70%';
};

document.querySelector('.big').onclick = biggerPic;
document.querySelector('.small').onclick = smallerPic;
