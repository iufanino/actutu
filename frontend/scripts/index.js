/////// Menu Burger ////////////////////
const menuBurger = document.getElementById("burger");
const navbar1 = document.getElementById("nav1");
const navbar2 = document.getElementById("nav2");


menuBurger.addEventListener('click',()=>{ 
    navbar1.classList.toggle('active');
    navbar2.classList.toggle('active');
}) 
//////////////////////////////////////////

//////// Animation Input /////////////////
const searchInput = document.querySelector('#rechercher');

searchInput.addEventListener('input', function (e) {
    if(e.target.value !== "") {
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }
})
//////////////////////////////////////////