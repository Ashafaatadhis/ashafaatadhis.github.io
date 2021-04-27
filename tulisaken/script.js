
let img;
function preload() {
  img = loadImage('buku.jpg');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0, 400, 800);
}