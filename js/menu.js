const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }

const nav = document.getElementById('nav')
nav.classList.toggle('active')

const active = nav.classList.contains('active')
event.currentTarget.setAttribute('aria-expanded', active)

if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
} else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
}

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu) 


function toggleSubmenu() {
    const hasSubmenu1 = document.querySelector(".hasSubmenu-1");
  
    hasSubmenu1.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu1 = document.querySelector(".submenu-1");
  
      submenu1.classList.toggle("ativo");
    });
  
    const hasSubmenu2 = document.querySelector(".hasSubmenu-2");
  
    hasSubmenu2.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu2 = document.querySelector(".submenu-2");
  
      submenu2.classList.toggle("ativo");
    });

    const hasSubmenu3 = document.querySelector(".hasSubmenu-3");
  
    hasSubmenu3.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu3 = document.querySelector(".submenu-3");
  
      submenu3.classList.toggle("ativo");
    });
  
  }
  toggleSubmenu();