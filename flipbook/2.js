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






const pdfUrl = "draft.pdf"; 

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

let scale = 1.5;
let pageFlip;

const bookEl = document.getElementById("book");

pageFlip = new St.PageFlip(bookEl, {
  width: 420,
  height: 550,
  size: "stretch",
  showCover: true,
  maxShadowOpacity: 0.5
});

pdfjsLib.getDocument("Majalah-2.pdf").promise.then(pdf => {
  const pages = [];

  for(let i = 1; i <= pdf.numPages; i++){
    pages.push(
      pdf.getPage(i).then(page => {
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        return page.render({
          canvasContext: ctx,
          viewport
        }).promise.then(() => canvas);
      })
    );
  }

  Promise.all(pages).then(canvases => {
    pageFlip.loadFromHTML(canvases);
  });
});

/* TOOLBAR FUNCTIONS */
function nextPage(){
  pageFlip.flipNext();
}

function prevPage(){
  pageFlip.flipPrev();
}

function downloadPDF() {
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "draft.pdf";
  a.click();
}

function printPDF() {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = pdfUrl;
  document.body.appendChild(iframe);
  iframe.onload = () => iframe.contentWindow.print();
}

function fullScreen(){
  const el = document.documentElement;
  if(el.requestFullscreen){
    el.requestFullscreen();
  }
}