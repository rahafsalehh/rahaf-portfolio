let txtAr = [
  'spending time with family',
  'playing tennis',
  'buffet lover',
  'travelling',
  'drawing',
  'music',
];

let currentIndex = 0;

function changeTxt() {
  currentIndex++;
  if (currentIndex >= txtAr.length) {
    currentIndex = 0;
  }
  document.getElementById('myIdentity').textContent = txtAr[currentIndex];
}

setTimeout(() => {
  changeTxt(); 
  setInterval(changeTxt, 900);
}, 2000)

// const copyRight= document.getElementById('copyRight');

//  copyRight.addEventListener("mouseover", event => {
//   copyRight.style.textDecoration.underline;
// });




function changeMode() {
  const body = document.body;
  const modeButton = document.getElementById('modeButton');
  const subTitles = document.querySelectorAll('.subTitle'); 

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    modeButton.textContent = 'Dark Mode';
    body.style.backgroundColor = 'azure';
    body.style.color = 'black';
    modeButton.style.backgroundColor= "orange";

    body.style.transition = '0.3s';
    subTitles.forEach(subTitle => {
      subTitle.style.color = 'black';
      subTitle.style.borderBottomColor = '#380b00'; 
    });
  } else {
    body.classList.add('dark-mode');
    body.style.backgroundColor = '#121212';
    body.style.color = 'white';
    modeButton.textContent = 'Light Mode';
    body.style.transition = '0.3s';
    modeButton.style.backgroundColor= "white";
    subTitles.forEach(subTitle => {
      subTitle.style.color = 'white';
      subTitle.style.borderBottomColor = 'white'; 
    });
  }
}