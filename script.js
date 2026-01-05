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


//Bild im Großformat, Name und Nummer vom Bild anzeigen
function openImg(index) {
  currentImgIndex = index;
  bigImgRef.innerHTML = `<img src="${imgs[index]}" alt="Bild ${imgNames[index]}" class="big-img">`;
  imgNumberRef.textContent = `${index + 1} / ${imgs.length}`; //Nummer anzeigen
  dialogTitle.innerHTML = "";
  dialogTitle.innerHTML += `<h2 id="dialogTitel">${imgNames[index]}</h2>` //Name anzeigen
  dialogRef.showModal();
}

function closeImg() {
  dialogRef.close();
}

//Kleine Vorschaubilder
function generateImgs() {
  const galerieRef = document.getElementById("galerie");

  for (let i = 0; i < imgs.length; i++) {
    galerieRef.innerHTML += getNotesHtml(i);
  }
}

function getNotesHtml(i) {
  return `<img class="img-klein-ansicht" src="${imgs[i]}" alt="Bild ${i + 1}" onclick="openImg(${i})">`;
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