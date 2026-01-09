// Toogle 
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klike di luar sidebar menu 
const Menu = document.querySelector ('#menu');


document.addEventListener('click', function (e) {
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});

// card

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActive();
    card.classList.add('active');
  });
});

function removeActive() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}

// contoh klik tombol detail
document.querySelectorAll(".btn-detail").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Halaman detail event akan dibuka.");
  });
});

function createCarousel(carouselId, items){
  const carousel = document.getElementById(carouselId);

  function render(){
    carousel.innerHTML = "";

    /* ===== STATIS (1–2) ===== */
    if(items.length <= 2){
      carousel.classList.add("static");

      items.forEach(d => {
        const div = document.createElement("div");
        div.className = "card2 center";

        div.innerHTML = `
          <img src="${d.img}">
          <div class="text">
            <h3>${d.title}</h3>
            <p>${d.description}</p>
          </div>
        `;
        carousel.appendChild(div);
      });
      return;
    }

    /* ===== MUTER (≥3) ===== */
    carousel.classList.remove("static");

    items.slice(0,5).forEach((d, i) => {
      let pos = "";
      if(i === 0) pos = "center";
      else if(i === 1) pos = "right";
      else if(i === items.length - 1) pos = "left";

      const div = document.createElement("div");
      div.className = "card2 " + pos;

      div.innerHTML = `
        <img src="${d.img}">
        
        <!-- TEXT DI LUAR FOTO -->
        <div class="info">
            <h3>${d.title}</h3>
            <p>${d.description}</p>
        </div>
        `;

      div.onclick = () => moveToCenter(i);
      carousel.appendChild(div);
    });
  }

  function moveToCenter(idx){
    while(idx > 0){
      items.push(items.shift());
      idx--;
    }
    render();
  }

  render();
}

/* =================================================
   DATA
================================================= */
const data1 = [
  {img:"default.jpg",title:"Ketua Bidang Eksternal" , description:"Muhammad"},
];

const data3 = [
  {img:"default.jpg",title:"Divisi Ekstrakampus",description:"12323001"},
  {img:"default.jpg",title:"Divisi Intrakampus",description:"12323002"},
  {img:"default.jpg",title:"Divisi Pengabdian Masyarakat",description:"12323003"},
  {img:"default.jpg",title:"Divisi Hubungan Alumni",description:"12323004"}
];

/* =================================================
   PANGGIL
================================================= */
createCarousel("carousel1", data1);
createCarousel("carousel3", data3);