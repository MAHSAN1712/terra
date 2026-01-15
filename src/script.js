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

const cardss = document.querySelectorAll('.proker-grid .card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

cardss.forEach(card => observer.observe(card));

// kepanitiaan '.gallery'
const galleries = document.querySelectorAll('.auto-gallery');

galleries.forEach(gallery => {
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 1;
    gallery.scrollLeft = scrollAmount;

    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
      scrollAmount = 0;
    }
  }, 30); // makin besar = makin lambat
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
    // alert("Halaman detail event akan dibuka.");
  });
});

// Kontak Section
 const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".contact-content");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });



let items = [
  {img:"default.jpg", title:"Ketua Himpunan",description :"Muhammad ",url:"Ketua-Himpunan.html"},
  {img:"default.jpg", title:"BSO Cirebon",description :"Muhammad ",url:"BSO.html"},
  {img:"default.jpg", title:"Kesekjenan",description :"Muhammad ",url:"Kesekjenan.html"},
  {img:"default.jpg", title:"Senator",description :"Muhammad ",url:"Senator.html"},
  {img:"default.jpg", title:"Internal",description :"Muhammad ",url:"Internal.html"},
  {img:"default.jpg", title:"Eksternal",description :"Muhammad ",url:"Eksternal.html"},
  {img:"default.jpg", title:"Pengembangan",description :"Muhammad ",url:"Pengembangan.html"},
  {img:"default.jpg", title:"Keilmuwan",description :"Muhammad ",url:"Keilmuwan.html"},
  {img:"default.jpg", title:"Kesejahteraan Anggota",description :"Muhammad ",url:"Kesejahteraan-Anggota.html"},
  {img:"default.jpg", title:"BPA",description :"Muhammad ",url:"BPA.html"},
];

const carousel = document.getElementById("carousel");

function render(){
  carousel.innerHTML = "";

  items.slice(0, 3).forEach((d, i) => {
    const div = document.createElement("div");
    div.className = "card" + (i === 1 ? " center" : "");
    div.innerHTML = `
      <img src="${d.img}">
      <div class="text">
      <h3>${d.title}</h3>
      <p>${d.description}</p>
      <a href="${d.url}" class="btn">
      View details </a>
      </div>
     
      


    `;

    div.onclick = () => moveToCenter(i);

    carousel.appendChild(div);
  });
}

// pindahkan supaya index yang diklik jadi ke posisi tengah (index 2)
function moveToCenter(idx){
  while(idx !== 1){
    // kalau klik sebelah kanan → geser kiri
    if(idx > 1){
      items.push(items.shift());
      idx--;
    }
    // kalau klik sebelah kiri → geser kanan
    else{
      items.unshift(items.pop());
      idx++;
    }
  }

  render();
}

render();

const iframe = document.querySelector('.pdf-viewer');

document.querySelector('.prev').onclick = () => {
  iframe.contentWindow.PDFViewerApplication.page--;
};

document.querySelector('.next').onclick = () => {
  iframe.contentWindow.PDFViewerApplication.page++;
};

iframe.onload = () => {
  iframe.contentWindow.PDFViewerApplication.pdfViewer.currentScaleValue = 'page-width';
};

function fullscreen() {
  pdfIframe.requestFullscreen();
};