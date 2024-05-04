const scrollContainer = document.querySelectorAll(".container2 .cont2");
let prevButton = document.querySelectorAll(".prev"); 
let nextButton = document.querySelectorAll(".next"); 


for(let i = 0; i < scrollContainer.length; i++){
scrollContainer[i].addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer[i].scrollLeft += evt.deltaY;
});

nextButton[i].addEventListener("click", ()=>{
    scrollContainer[i].style.scrollBehavior = "smooth";
    scrollContainer[i].scrollLeft += 1200;
})
prevButton[i].addEventListener("click", ()=>{
    scrollContainer[i].style.scrollBehavior = "smooth";
    scrollContainer[i].scrollLeft -= 1200;
})}