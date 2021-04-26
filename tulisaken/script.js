let img, font;
let fontSize = 14;
let batasLength = 65;

let isiPesan = document.querySelector('#pesan');
let submitan = document.querySelector('#submit');
let hasilPesan = '';


function preload() {
  img = loadImage('buku.jpg');
  font = loadFont('tulisanTangan.otf');
}

function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(800, 900);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  image(img, 0, 0, 800, 800);
}


function draw() {
  textAlign(LEFT);
  drawWords(800 * 0.38);
}

function drawWords(x) {
  let y = 168;
  let mbuh = 1;
  fill(0);
  //   filterNewline(`adhis
  // adhis sdfs 
  // sadasd
  //  asdsa
  // adhis bagg`).forEach(element => {
  //     text(element, x, y);

  if(hasilPesan !== ''){
  hitungStr(hasilPesan).forEach(element => {
    text(element, x, y);

      y += (13+1.3);

  });
  }

}




function hasil() {
  // console.log(isiPesan.value)
  hasilPesan = isiPesan.value;
  // console.log(filterNewline(hasilPesan))



}

// console.log(filterNewline(`sadaaaaaaaaaa
// sadaaaaaa`))


function filterNewline(tulisan) {
  let hasil = [];
  let kata = '';
  for (let i = 0; i < tulisan.length; i++) {

    if (tulisan[i] !== '\n') {
      kata += tulisan[i];
    }

    if (tulisan[i] == '\n') {
      hasil.push(kata);
      kata = '';
    }

    if (i == tulisan.length - 1) {
      hasil.push(kata);
    }

  }

  return hasil
}


function hitungStr(tulisan) {
  let partisi = [];
  let hasilFilter = filterNewline(tulisan);

  for (let k = 0; k < hasilFilter.length; k++) {
    if (hasilFilter[k].length > batasLength) {
      let bates = Math.ceil(hasilFilter[k].length / batasLength)
      let awal = 0;
      let akhir = batasLength;
      for (let i = 0; i < bates; i++) {
        partisi.push(hasilFilter[k].slice(awal, akhir+1));
        awal = akhir + 1;
        akhir += batasLength;
      }

  
    } else {
      partisi.push(hasilFilter[k]);
  
    }
  }
  console.log(partisi)
  return partisi;


}



// console.log(hitungStr(`Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan
// Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan
// Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan`));