const initSlider = () =>{
    const imagelist = document.querySelector(".img_cont");
    const slideButtons = document.querySelectorAll(".slide_button");

    slideButtons.forEach(button=>{
        button.addEventListener("click", ()=>{
            const direction = button.id === "prev" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({left : scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider);