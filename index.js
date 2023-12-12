const menu =  document.querySelector(".menu");
let navLinks = document.querySelector(".nav-ul");
console.log(navLinks);
menu.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("show");
    console.log(navLinks);
})


 

