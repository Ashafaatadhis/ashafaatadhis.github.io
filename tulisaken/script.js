let img, font;
let fontSize = 10;
let batasLength = 60;

let isiPesan = document.querySelector('#pesan');
let submitan = document.querySelector('#submit');
let hasilPesan = '';


function preload() {
  img = loadImage('buku.jpg');
  font = loadFont('Nihilschiz Handwriting.ttf');
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



// function resetCan() {
//   hasilPesan = '';
//   redraw();
// }

function drawWords(x) {
  let y = 168;
  fill(0);
  //   filterNewline(`adhis
  // adhis sdfs 
  // sadasd
  //  asdsa
  // adhis bagg`).forEach(element => {
  //     text(element, x, y);

  if (hasilPesan !== '') {

    hitungStr(hasilPesan).forEach(element => {
      text(element, x, y);

      y += (13 + 1.3);

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
  let partisi2 = [];
  let bantuPartisi22 = '';
  let bantuPartisi2 = '';
  let hasilFilter = filterNewline(tulisan);
  // console.log(hasilFilter)
  for (let i = 0; i < hasilFilter.length; i++) {
    partisi.push(hasilFilter[i].split(' '));

  }

  for (let j = 0; j < partisi.length; j++) {
    for (let k = 0; k < partisi[j].length; k++) {
      // countKalimat += partisi[j][k].length;

      if (partisi[j][k].length > batasLength - 10) {

        let bates = Math.ceil(partisi[j][k].length / (batasLength - 10))
        let awal = 0;
        let akhir = batasLength - 10;
        for (let i = 0; i < bates; i++) {
          partisi2.push(partisi[j][k].slice(awal, akhir + 1));
          awal = akhir + 1;
          akhir += batasLength - 10;



        }
        continue;
      }

      bantuPartisi2 += partisi[j][k] + ' ';

      if (bantuPartisi2.length > batasLength) {
        partisi2.push(bantuPartisi22);
        // console.log('titit')
        bantuPartisi2 = '';
        bantuPartisi22 = '';

      }

      bantuPartisi22 += partisi[j][k] + ' ';
      if (k == partisi[j].length - 1) {
        // console.log('edan');
        partisi2.push(bantuPartisi22);
        bantuPartisi2 = '';
        bantuPartisi22 = '';
      }
      // console.log(countKalimat)

    }

    // console.log(partisi[j].join(' '))

  }
  // console.log(partisi2);

  if (partisi2.length >= 36) {
    alert('error');
    window.location.href = "http://localhost/tulisaken/";
    return;
  } else {
    return partisi2;
  }

}

// function hitungStr(tulisan) {
//   let partisi = [];
//   let hasilFilter = filterNewline(tulisan);

//   for (let k = 0; k < hasilFilter.length; k++) {
//     if (hasilFilter[k].length > batasLength) {
//       let bates = Math.ceil(hasilFilter[k].length / batasLength)
//       let awal = 0;
//       let akhir = batasLength;
//       for (let i = 0; i < bates; i++) {
//         partisi.push(hasilFilter[k].slice(awal, akhir+1));
//         awal = akhir + 1;
//         akhir += batasLength;
//       }


//     } else {
//       partisi.push(hasilFilter[k]);

//     }
//   }
//   return partisi;


// }
// function hitungStr(tulisan) {
//   let partisi = [];
//   let hasilFilter = filterNewline(tulisan);

//   for (let k = 0; k < hasilFilter.length; k++) {
//     if (hasilFilter[k].length > batasLength) {
//       let bates = Math.ceil(hasilFilter[k].length / batasLength)
//       let awal = 0;
//       let akhir = batasLength;
//       for (let i = 0; i < bates; i++) {
//         partisi.push(hasilFilter[k].slice(awal, akhir+1));
//         awal = akhir + 1;
//         akhir += batasLength;
//       }


//     } else {
//       partisi.push(hasilFilter[k]);

//     }
//   }
//   return partisi;


// }


// console.log(hitungStr(`Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan
// Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan
// Adhis Mauliyahsa ashafaat bagas kara ibnu fauzi tooam big ilham nur ramadhan`));