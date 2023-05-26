const list = document.querySelector('.list');
const button = document.querySelector('.button');

var resim1 = 'url("img/11.jpg")';
var resim2 = 'url("img/5.jpg")';
var resim3 = 'url("img/3.jpg")';
var resim4 = 'url("img/6.jpg")';
var resim5 = 'url("img/10.jpg")';
var resim6 = 'url("img/7.jpg")';
var resim7 = 'url("img/4.jpg")';
var resim8 = 'url("img/2.jpg")';
var resim9 = 'url("img/8.jpg")';
var resim10 = 'url("img/12.jpg")';
var resim11 = 'url("img/1.jpg")';
var resim12 = 'url("img/9.jpg")';
var resimler = { 1: resim1, 2: resim2, 3: resim3, 4: resim4, 5: resim5, 6: resim6, 7: resim7, 8: resim8, 9: resim9, 10: resim10, 11: resim11, 12: resim12 };


const showPics=()=>{
    for (var key in resimler) {
        pic = resimler[key];
        console.log(key, pic);
        document.getElementById(key).style.backgroundImage = pic;
        document.getElementById(key).style.backgroundRepeat = "no-repeat";
        document.getElementById(key).style.backgroundSize = "100%, 100%";
    }
}
