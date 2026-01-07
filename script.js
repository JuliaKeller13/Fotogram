const dialogRef = document.getElementById("dialogMode");
let currentImgIndex = 0; // speichert, welches Bild gerade angezeigt wird
const bigImgRef = document.getElementById("bigImgImDialog");
const imgNumberRef = document.getElementById("imgNumber");
const dialogTitle = document.getElementById("dialogTitel");

const imgs = [
  "./img/bird.jpg",
  "./img/clouded.jpg",
  "./img/duck.jpg",
  "./img/erde.jpg",
  "./img/fields.jpg",
  "./img/fluffy-bird-string.jpg",
  "./img/landscape.jpg",
  "./img/leopard.jpg",
  "./img/little-bird.jpg",
  "./img/mountain-sky.jpg",
  "./img/mountain.jpg",
  "./img/night-city.jpg",
  "./img/street.jpg",
  "./img/tree.jpg",
];

const imgNames = [
  "Blaugelber Singvogel",
  "Dunkle Gewitterwolken",
  "Ente",
  "Wirbelsturm aus dem Weltraum",
  "Feld unter dem Sternenhimmel",
  "Weiße Blumen",
  "Sternenhimmel",
  "Babyleoparden",
  "Kleiner Vogel",
  "Berge",
  "See in den Bergen",
  "Die Stadt bei Nacht",
  "Straße",
  "Baum",
];

//Kleine Vorschaubilder
function generateImgs() {
  const galerieRef = document.getElementById("galerie");

  for (let i = 0; i < imgs.length; i++) {
    galerieRef.innerHTML += getNotesHtml(i);
  }
}

function getNotesHtml(i) {
  return `
    <img 
      class="img-klein-ansicht"
      src="${imgs[i]}"
      alt="${imgNames[i]}"
      tabindex="0"
      onclick="openImg(${i})"
      onkeydown="handleKey(event, function () { openImg(${i}); })"
    >
  `;
}

//Bild im Großformat, Name und Nummer vom Bild anzeigen
function openImg(index) {
  currentImgIndex = index;
  bigImgRef.innerHTML = `<img src="${imgs[index]}" alt="Bild ${imgNames[index]}" class="big-img">`;
  imgNumberRef.textContent = `${index + 1} / ${imgs.length}`; //Nummer anzeigen
  dialogTitle.innerHTML = "";
  dialogTitle.innerHTML += `<h2 id="imgTitel">${imgNames[index]}</h2>` //Name anzeigen
  dialogRef.showModal();
}

function closeImg() {
  dialogRef.close();
}

// vorheriges/nächstes Bild im Dialog
function previousImg() {
  currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
  openImg(currentImgIndex);
}

function nextImg() {
  currentImgIndex = (currentImgIndex + 1) % imgs.length;
  openImg(currentImgIndex);
}

//Dialog schließen, wenn man auf backdrop clickt
function handleDialogClick(event) {
  if (!event.target.closest(".dialog-mode-inner")) { //closest sucht nach außen Element mit dieser ID, gibt true zurück (mit ! wird die Aussage auf false gesetzt). Event.targen hat Wert eines clicks (z.B. auf img ist <img>)
    closeImg();
  }
}

dialogRef.addEventListener("click", handleDialogClick); //Wenn irgendwo im Dialog geklickt wird, wird die Funktion handleDialogClick aufgerufen

//Keyboard fuction global
function handleKey(event, action) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}

//Dialog schließen
document.getElementById("closeDialog")
  .addEventListener("keydown", function (e) {
    handleKey(e, closeImg);
  });

// Pfeiltastensteuerung
document.addEventListener("keydown", function (event) {

  if (!dialogRef.open) return;//weiter nur, wenn Dialog geöffnet ist

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousImg();
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextImg();
  }
});