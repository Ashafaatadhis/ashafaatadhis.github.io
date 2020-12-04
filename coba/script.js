const play = (e) => {
    e.style.display = 'none';
    if(innerWidth >= 1028){
        document.querySelector('.container').style.backgroundImage = "url('ultahBGfull.jpg')";
        document.querySelector('.container').style.backgroundSize = "cover";
    }else{
    document.querySelector('.container').style.backgroundImage = "url('ultahBG.jpg')";
    document.querySelector('.container').style.backgroundSize = "cover";
    }

    
    document.querySelector('.container').innerHTML = `
        <iframe id="viddeo" src="https://www.YoutubeRepeater.com/watch?v=gsMdSS1qwXE&s=14&autoplay=1"  allow='autoplay' allowfullscreen></iframe>
        <div class="gambarGif1"></div>
        <div class="gambarGif2"></div>
    `;

    document.querySelector('#viddeo').style.display = 'none';
    document.querySelector('.gambarGif1').style.backgroundImage = "url('gifult1.gif')";
    document.querySelector('.gambarGif1').style.backgroundSize = "cover";
    document.querySelector('.gambarGif1').style.backgroundRepeat = "no-repeat";
    
    document.querySelector('.gambarGif1').style.position = 'absolute';
    
    document.querySelector('.gambarGif2').style.backgroundImage = "url('gifult2.gif')";
    document.querySelector('.gambarGif2').style.backgroundSize = "cover";
    document.querySelector('.gambarGif2').style.backgroundRepeat = "no-repeat";
    
    document.querySelector('.gambarGif2').style.position = 'absolute';

    if(innerWidth >= 1028){
        document.querySelector('.gambarGif1').style.top = '400px';
        document.querySelector('.gambarGif1').style.left = '500px';
        document.querySelector('.gambarGif1').style.width = '600px';
        document.querySelector('.gambarGif1').style.height = '500px';
        
        document.querySelector('.gambarGif2').style.top = '100px';
        document.querySelector('.gambarGif2').style.right = '200px';
        document.querySelector('.gambarGif2').style.width = '600px';
        document.querySelector('.gambarGif2').style.height = '500px';

    }else{
        document.querySelector('.gambarGif1').style.top = '650px';
        document.querySelector('.gambarGif1').style.left = '200px';
        document.querySelector('.gambarGif1').style.width = '400px';
        document.querySelector('.gambarGif1').style.height = '300px';
    
        document.querySelector('.gambarGif2').style.top = '50px';
        document.querySelector('.gambarGif2').style.left = '200px';
        document.querySelector('.gambarGif2').style.width = '400px';
        document.querySelector('.gambarGif2').style.height = '300px';
    }

    setTimeout(() => {
        swal({
            text: "Hehey not bad... habede Dewi ..zz\n\t -Adhis",
            button: "Tutup",
          });
    }, 3000)
};