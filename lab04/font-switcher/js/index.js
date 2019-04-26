const makeBigger = () => {
  document.querySelector('.content').style.fontSize = '20pt';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '12pt';
};

document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
