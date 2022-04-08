 const items = [
      {
          img: 'img/01.jpg',
          titolo: 'Svezia',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
      },
      {
          img: 'img/02.jpg',
          titolo: 'Svizzera',
          testo: 'Lorem ipsum'
      },
      {
          img: 'img/03.jpg',
          titolo: 'Gran Bretagna',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
          img: 'img/04.jpg',
          titolo: 'Germania',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
      },
      {
          img: 'img/05.jpg',
          titolo: 'Paradise',
          testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
      }
  ]
  console.log(items);

// variabili
let itemTemplate = "";
let thumbTemplate = "";
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < items.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${items[i].img}" />
      <div class="title">
        <h2>${items[i].titolo}</h2>
        <p>${items[i].testo}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${items[i].img}" alt="" />
  </div>`
};

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");

//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;

//Pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
const stop = document.querySelector(".fa-circle-pause");

function slideDown() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }
  imgs[currentIndexActive].classList.add("active");
  thumbs[currentIndexActive].classList.add("active");
}
function slideUp() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");

  if (currentIndexActive === 0) {
    currentIndexActive = items.length - 1;
  } else {
    currentIndexActive--;
  }
  imgs[currentIndexActive].classList.add("active");

  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);

const clock = setInterval(slideUp, 3000);
// funzione per stoppare
function stopSlider(){
  clearInterval(clock);
};
stop.addEventListener("click", stopSlider);

