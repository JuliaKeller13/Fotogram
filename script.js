const dialogRef = document.getElementById("dialogMode");

const imgs = [
  "./img/bird.jpg",
  "./img/clouded.png",
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

function openImg() {
  dialogRef.showModal();
}

function closeImg() {
  dialogRef.close();
}


function generateImgs() {
  const galerieRef = document.getElementById("galerie");

  for (let i = 0; i < imgs.length; i++) {
    galerieRef.innerHTML += getNotesHtml(i);
  }
}

function getNotesHtml(i) {
  return `<img class="img-klein-ansicht" src="${imgs[i]}" alt="Bild ${i + 1}" onclick="openImg()">`;
}

//Nummer vom Bild

function getNumberInDialog() {
  const imgNumber = document.getElementById("imgNumber");

  for (let i = 0; i < imgs.length; i++) {
     imgNumber.innerHTML += `<p>${imgs[i]}/12</p>`;
  }

}