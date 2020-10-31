
let x = 0;
let y = 0;
let n = 0;
let rollAntiSpam = 0;
let hitung = n;
let koordinat = [[18, 400]];
    // :{
    //     x:18,
    //     y:400
    // }
    
    // "1":{
    //     x:90,
    //     y:400
    // },
    // "2":{
    //     x:130,
    //     y:400
    // },
    // "3":{
    //     x:170,
    //     y:400
    // },
    // "4":{
    //     x:220,
    //     y:400
    // },
    // "5":{
    //     x:260,
    //     y:400
    // },
    // "6":{
    //     x:300,
    //     y:400
    // },
    // "7":{
    //     x:340,
    //     y:400
    // },
    // "8":{
    //     x:380,
    //     y:400
    // },
    // "9":{
    //     x:420,
    //     y:400
    // },
    // "10":{
    //     x:460,
    //     y:400
    // },
    // "11":{
    //     x:460,
    //     y:367
    // },
    // "12":{
    //     x:420,
    //     y:367
    // }



let loopKoorX = 90;
let loopKoorY = 400;
//meloop let koordinat
for(let i = 1; i <= 100; i++){
   
   if(i == 11 || i == 31 ||  i == 51 || i == 71 ||  i == 91){
        loopKoorY -= 33;
        for(let j = 1; j <= 10; j++){
            if(j == 10){
                if(i == 11){
                    i = 20;  
                  }else if(i == 31){
                      i = 40;
                  }else if(i == 51){
                      i = 60;
                  }else if(i == 71){
                      i = 80;
                  }else if(i == 91){
                      i = 100;
                  }
            }
            loopKoorX -= 40;
            koordinat.push([loopKoorX, loopKoorY]);
            
        }// akhir else if ganjil dalam
       
        
    }else if(i == 1 || i == 21 || i == 41 || i == 61 || i == 81){
        if(i !== 1){
            loopKoorY -= 33;
        }
        
        for(let j = 1; j <= 10; j++){
            if(j == 10){
                if(i == 1){
                    i = 10;
                }else if(i == 21){
                    i == 30;
                }else if(i == 41){
                    i = 50;
                }else if(i == 61){
                    i = 70;
                }else if(i == 81){
                    i = 90;
                }
                
            }
        koordinat.push([loopKoorX, loopKoorY]);
        loopKoorX = (loopKoorX+40);
        }
        
    }
     
 }

 //akhir loop

 console.log(koordinat[21].push(' <iframe class="music" width="560" height="315" src="https://www.youtuberepeater.com/watch?v=IlXel6NSYZU&autoplay=1" allow="autoplay" allowfullscreen></iframe>'));
 console.log(koordinat[9]);

//jika dibuka di HP
if(innerWidth <= 576){

    widthHP(15);
}else if(innerWidth >= 577 && innerWidth <= 1500){
    widthPC(10);
}

// if(innerWidth > 500 && innerWidth <= 576){
//     koordinat[2].x = 120;
//     koordinat[3].x = 160;
//     koordinat[4].x = 200;
//     koordinat[5].x = 242;
//     koordinat[6].x = 280;
//     koordinat[7].x = 325;
//     koordinat[8].x = 362;
// }
// let koorSaatIniY = koordinat[0].y;
// let koorSaatIniX = koordinat[0].x;

//tombol mulai dipencet
const tombolMulai = document.querySelector('.mulai');

tombolMulai.addEventListener('click', function(){
    
    const gambar = clearBody();
 
        gambar.style.width = '15px';
      
    permainan(gambar);
    


});

//kumpulan function 
//=========================================================================================================

function widthPC(pc){

    for(let i = 1; i <= 100; i++){
    if(i == 1 || i == 20 || i == 21 || i == 40 || i == 41 || i == 60 || i == 61 || i == 80 || i == 81 || i == 100 ){
        koordinat[i][0] -= (pc-2);
    }else if(i == 3 || i == 18 || i == 23 || i == 38 || i == 43 || i == 58 || i == 63 || i == 78 || i == 83 || i == 98){
        koordinat[i][0] -= (pc-10);
    }else if(i == 4 || i == 17 || i == 24 || i == 37 || i == 44 || i == 57 || i == 64 || i == 77 || i == 84 || i == 97){
        koordinat[i][0] -= (pc-13);
    }else if(i == 5 || i == 16 || i == 25 || i == 36 || i == 45 || i == 56 || i == 65 || i == 76 || i == 85 || i == 96){
        koordinat[i][0] -= (pc-17);
    }else if(i == 6 || i == 15 || i == 26 || i == 35 || i == 46 || i == 55 || i == 66 || i == 75 || i == 86 || i == 95){
        koordinat[i][0] -= (pc-20);
    }else if(i == 7 || i == 14 || i == 27 || i == 34 || i == 47 || i == 54 || i == 67 || i == 74 || i == 87 || i == 94){
        koordinat[i][0] -= (pc-23);
    }else if(i == 8 || i == 13 || i == 28 || i == 33 || i == 48 || i == 53 || i == 68 || i == 73 || i == 88 || i == 93){
        koordinat[i][0] -= (pc-25);
    }else if(i == 9 || i == 12 || i == 29 || i == 32 || i == 49 || i == 52 || i == 69 || i == 72 || i == 89 || i == 92){
        koordinat[i][0] -= (pc-27);
    }else if(i == 10 || i == 11 || i == 30 || i == 31 || i == 50 || i == 51 || i == 70 || i == 71 || i == 90 || i == 91){
        koordinat[i][0] -= (pc-34);
    }
    else{
        koordinat[i][0] -= (pc-7);
    }
            
        
        
    }
}

//=========================================================================================================

function widthHP(hp){

    for(let i = 1; i <= 100; i++){
        // if(i == 1 || i == 10 || i == 20){
        //    koordinat[i][0] = (hp+65); 
        // }else if(i == 2 || i == 3){
        //     koordinat[i][0] -= (hp-5);
        // }
        //     console.log(`ini ${i} ${koordinat[i][0] -= (hp+5)}` );
            koordinat[i][0] -= (hp-7);
        
        
    }
    // koordinat[1].x = (hp+65);
    // koordinat[2].x -= (hp-5);
    // koordinat[3].x -= (hp-5);
    // koordinat[4].x -= (hp+5);
    // koordinat[5].x -= (hp+5);
    // koordinat[6].x -= (hp+5);
    // koordinat[7].x -= (hp+5);
    // koordinat[8].x -= (hp+5);
    // koordinat[9].x -= (hp+5);
    // koordinat[10].x -= (hp+5);
    // koordinat[11].x -= (hp+5);
    // koordinat[12].x -= (hp+5);
}

//=========================================================================================================
function clearBody(){
    document.querySelector('.judul').innerHTML = '';
    document.querySelector('.mulai').innerHTML = '';
    document.querySelector('body').innerHTML += `<img class="ppn"  src="ulartangga.jpg" alt="">`;
    document.querySelector('body').innerHTML += `<div class="rollUtama"><button class="roll">roll</button></div>`;
    document.querySelector('body').innerHTML += `<div class="rollan"></div>`;
    document.querySelector('.permainan').innerHTML = `<img src="ludo.png" width="20" style="position:relative;left:${koordinat[0][0]-20}px; top:${koordinat[0][1]-35}px;" class="gambar" alt="">`;
    return document.querySelector('.gambar');
}

//=========================================================================================================
function roll(){
    const getRandom = function(max = 7) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        if(getRandom() === 1){
            return '1';
        }
        else if(getRandom() === 2){
            return '2';
        
        }else if(getRandom() === 3){
            return '3';
        
        }else if(getRandom() === 4){
            return '4';
        
        }else if(getRandom() === 5){
            return '5';
        
        }else if(getRandom() === 6){
            return '6';
        }else if(getRandom() === 0){
            return '3';
        }else{
            return '2';
        }
}

//=========================================================================================================
function koorX(awal){
    return koordinat[(awal+1)][0];
}

//=========================================================================================================
function koorY(awal){
    //awal = 0;
    //tambah itu hasil dadu = 4;
    // const ye = [];
    // for(let i = awal; i <= tambah; i++){
    //     ye.push(koordinat[()])
    // }
    // koordinat[(awal+1)]
    
    return koordinat[(awal+1)][1];
}

//=========================================================================================================

async function jalankanTangga(gambar){
    if(n == 3 ){
        n = 21;
        let j = await setInterval(() => { 
            console.log(n == 3);
            console.log(n);
            
            gambar.style.left = `${koordinat[n][0]-20}px`;
            gambar.style.top = `${koordinat[n][1]-35}px`; 
  
            if(n == 21){
                hitung = n;
                clearInterval(j);
            }
            //jika sudah menghitung
        },1000);
        
    
        
    }// akhir if n 3
    else{
        hitung = n;
        
    }
    

}
//=========================================================================================================
function jalankanLagu(n, gambar){
    if(koordinat[n][2] !== undefined){
        console.log('ada cuk tidak undefined')
        document.querySelector('.musicUtama').innerHTML += `${koordinat[n][2]}`;
        console.log(document.querySelector('.musicUtama'));
        document.querySelector('.stoplih').innerHTML = `<button class="stop">Stop</button>`;
        document.querySelector('.stop').addEventListener('click', function(){
                const music = document.querySelector('.musicUtama');
                console.log(music);
                music.innerHTML = '';
                koordinat[n][2] = undefined;
            
                
                if(jalankanLagu(n, gambar) == 'tidak'){
                    document.querySelector('.stoplih').innerHTML = '';
                    gambar.style.position = 'relative';
                    gambar.style.transition = '1s';
                    
                    koorSaatIniX = gambar.style.left;
                    console.log(koordinat[n][2]);
                    console.log('ini n ' + n)
                    koorSaatIniY = gambar.style.top;
                    hitung = n;
                    rollAntiSpam = 0;  
                    console.log('oke sampe')
                    return "tidak";
                }
         
                
                
            });
            return;
    }else if(koordinat[n][2] == undefined){
        console.log('undefined')
        hitung = n;
        return 'tidak';
    }
    // if(document.querySelector('.music').src !== koordinat[n][2]){
    //     return;
    // }
  
}
//=========================================================================================================
function permainan(gambar){

    //tombol roll di tekan
  
    
    document.querySelector('.roll').addEventListener('click', function(){
        
        console.log(rollAntiSpam);
        rollAntiSpam += 1;
        
        console.log(rollAntiSpam == 1);
        
   // ikih ubahen roll()
   if(rollAntiSpam === 1){
      
    const rolla = parseInt(3);
  
    document.querySelector('.rollan').innerHTML = `<center><h1>Hasil Roll : ${rolla}</h1></center>`;
  console.log('ini hitung dadu diklik ' + hitung);
    //koorSaatIniX = koordinat
        // console.log(koorX(n, rolla)[1]);
                    const t =  setInterval(() =>{
                    console.log(`ini diular ke ${n}`)
                    gambar.style.left = `${koorX(n)-20}px`;
                    gambar.style.top = `${koorY(n)-35}px`; 
                    n += 1;
                    //jika sudah menghitung
                    if(n == hitung+rolla){
                        clearInterval(t);
                        
                        jalankanTangga(gambar).then(response => {
                            setTimeout(() => {
                                if(jalankanLagu(n, gambar) == 'tidak'){

                               
                                // document.querySelector('.stop').addEventListener('click', function(){
                                //     const music = document.querySelector('.music');
                                    
                                //     console.log(music);
                                //     music.src = '';
                                //     rollAntiSpam = 0;  
                                //     gambar.style.position = 'relative';
                                //     gambar.style.transition = '1s';
                                    
                                //     koorSaatIniX = gambar.style.left;
                                //     console.log(koordinat[n][2]);
                                //     console.log('ini n ' + n)
                                //     koorSaatIniY = gambar.style.top;
                                //     console.log('oke sampe')
                                //     jalankanLagu(n);
                                    
                                    
                                // });
                            
                                    // stopLagu(gambar);
                                
                                   rollAntiSpam = 0;  
                                }
 
                               
                            }, 1000);
                            
                        })
                        
                        
                    }
                }, 1000);
          

    gambar.style.position = 'relative';
    gambar.style.transition = '1s';
    
    koorSaatIniX = gambar.style.left;
    koorSaatIniY = gambar.style.top;
    console.log('oke sampe')
    }else{
        
    }
    
 
    });//onclick roll

}

// function stopLagu(gambar){
    
//         console.log('close');
//     //     document.querySelector('.musicUtama').innerHTML = '';
//     //     rollAntiSpam = 0;
//     //     gambar.style.position = 'relative';
//     // gambar.style.transition = '1s';
    
//     // koorSaatIniX = gambar.style.left;
//     // koorSaatIniY = gambar.style.top;
//     //     permainan(gambar);
//     //     return;
//     });


  