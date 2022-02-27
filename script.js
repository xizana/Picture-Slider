const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img")

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let count = 1;
const size = images[0].clientWidth;

slide.style.transform ='translateX(' + (-size * count) +'px)';

nextBtn.addEventListener("click", () =>{
    if(count >= images.length -1) return;
    slide.style.transition = "transform 0.4s ease-inout"
    count++;
    slide.style.transform ='translateX(' + (-size * count) +'px)';    
});


prevBtn.addEventListener("click", () =>{
    if(count <= 0) return;
    slide.style.transition = "transform 0.4s ease-inout"
    count--;
    slide.style.transform ='translateX(' + (-size * count) +'px)';
});
   

slide.addEventListener("transitioned", ()=>{
    if(images[count].id  === "lastClone"){
        slide.style.transition = "none";
        count = images.length - 2;
        slide.style.transform ='translateX(' + (-size * count) +'px)';
    }
    if(images[count].id  === "firstClone"){
        slide.style.transition = "none";
        count = images.length - count;
        slide.style.transform ='translateX(' + (-size * count) +'px)';
    }
} )












































