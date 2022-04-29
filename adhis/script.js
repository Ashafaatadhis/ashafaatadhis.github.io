const navigasi = document.querySelector("nav .menu");
const linkLocation = location.href.split("/").reverse()[0].split(".")[0];
console.log(navigasi.children[0]);
for (let i = 0; i < navigasi.children.length; i++) {
  if (navigasi.children[i].innerHTML.toLowerCase() == linkLocation) {
    navigasi.children[i].classList.add("active");
  }
}

// Swal.fire("Website ini masih dalam tahap pengembangan");
