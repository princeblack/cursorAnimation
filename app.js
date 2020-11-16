const mouseCurser =  document.querySelector('.cursor');

const navList = document.querySelectorAll('.nav-list li');

const image = document.querySelector('.front-cover');
console.log(image);

window.addEventListener('mousemove', cursor);
function cursor(e){
    mouseCurser.style.top = e.pageY + "px"
    mouseCurser.style.left = e.pageX + "px"
}

navList.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
        mouseCurser.classList.add("link-grow")
        link.classList.add("hovered-link")
    })
    link.addEventListener("mouseleave", ()=>{
       
        mouseCurser.classList.remove("link-grow")
        link.classList.remove("hovered-link")
    })
})

image.addEventListener("mouseover",(e)=>{
    mouseCurser.style.borderWidth = '1px' ;
    mouseCurser.style.width = '8rem';
    mouseCurser.style.height = "8rem";

})

image.addEventListener("mouseleave",(e)=>{
    mouseCurser.style.borderWidth = "2px";
    mouseCurser.style.width = '3rem';
    mouseCurser.style.height = "3rem";


})