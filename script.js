const list = document.querySelector('.list');
const button = document.querySelector('.button');

var img1 = 'url("img/11.jpg")';
var img2 = 'url("img/5.jpg")';
var img3 = 'url("img/3.jpg")';
var img4 = 'url("img/6.jpg")';
var img5 = 'url("img/10.jpg")';
var img6 = 'url("img/7.jpg")';
var img7 = 'url("img/4.jpg")';
var img8 = 'url("img/2.jpg")';
var img9 = 'url("img/8.jpg")';
var img10 = 'url("img/12.jpg")';
var img11 = 'url("img/1.jpg")';
var img12 = 'url("img/9.jpg")';
var images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6, 7: img7, 8: img8, 9: img9, 10: img10, 11: img11, 12: img12 };


const showPics=()=>{
    for (var key in images) {
        pic = images[key];
        console.log(key, pic);
        document.getElementById(key).style.backgroundImage = pic;
        document.getElementById(key).style.backgroundRepeat = "no-repeat";
        document.getElementById(key).style.backgroundSize = "100%, 100%";
    }
}

const selectİmage=(e)=>{
    element = e.target;

    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        for (var i = 0; i < selecteds.length; i++) {
            if (selecteds[i] == element.value) {
                selecteds.splice(i, 1);
            }
        }

        console.log(selecteds);
    }
    else {
        element.classList.add('selected');
        selecteds.push(element.value);
        console.log(selecteds);

    }

}
list.addEventListener("click",selectİmage);
