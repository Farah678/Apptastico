// JavaScript Document
$(document).ready(function () {

   function init(){
    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].clientWidth;
    // set ul's width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    /*.onclike = onClickPrev() will be fired when onload; is this because closure?? */
    prev.onclick = function(){ onClickPrev();};
    next.onclick = function(){ onClickNext();};
}
        
    
/**
* clicking prev. if current image is the first image, ul slide all the way to the last one
* otherwise, it slide to the image on the left of current image.
**/
function onClickPrev(){
    if (currentImage == 0){
        slideTo(imageNumber - 1);
    } 
    else{
        slideTo(currentImage - 1);
    }       
   }
/**
* clicking next. if current image is the last image, ul slide all the way to the first one
* otherwise, it slide to the image on the right of current image.
**/

function onClickNext(){
    if (currentImage == imageNumber - 1){
         slideTo(0);
    }
    else{
        slideTo(currentImage + 1);
    }       
}
});