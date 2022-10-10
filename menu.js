const menu = document.querySelector(".lista");
const openMenuBotton = document.querySelector(".abrir-menu");
const closeMenuBotton = document.querySelector(".cerrar-menu");

function cambiarMenu() {
  menu.classList.toggle("menu_opened");
}
openMenuBotton.addEventListener("click", cambiarMenu);
closeMenuBotton.addEventListener("click", cambiarMenu);

const menuLinks=document.querySelectorAll('.lista a[href^="#"]' )

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click",function(){
   menu.classList.remove("menu_opened");
  })
})
