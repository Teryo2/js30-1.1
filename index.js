const button = document.querySelector('button');

function toggleBtn() {
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);

const portfolioButt = document.querySelector(".nav-list");
const portfolioImg = document.querySelector(".img-container");


const choiceActive = (event) =>{
    portfolioButt.querySelectorAll(".nav-item")
    .forEach( but =>{
        but.classList.remove("active");
    })
    if(event.target.classList.contains("nav-item")){
        event.target.classList.add("active");
    }
}

portfolioButt.addEventListener("click", choiceActive);

function l_image (a) {
    document.example_img.src = a;
}