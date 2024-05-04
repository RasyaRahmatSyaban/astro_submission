const scrollContainer = document.querySelector(".container2 .cont2");
let prevButton = document.getElementById("prev"); 
let nextButton = document.getElementById("next"); 

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1200;
})
prevButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1200;
})