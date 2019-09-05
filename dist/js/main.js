//Select DOM (Doument Obj Module) items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
//getting all navItems using querySelectorAll which will save them to a node list which is similar to an array.
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of menu....this.setState if we were in a class based component in react
let showMenu = false;
//event listener on the const menuBtn that we declared above
menuBtn.addEventListener('click', toggleMenu);
//creating a function called toggleMenu that will fire onClick eventListener on menuBtn
function toggleMenu(){
    if(!showMenu){
        //if showMenu is false we are adding the class close
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        //looping through navItems with forEach to assign show class to each item if showMenu is false
        navItems.forEach(elm => elm.classList.add('show'));

        //Set Menu State
        showMenu = true;
    }
    else {
        //doing the same as above but, removing the classes if showMenu is now false;
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(elm => elm.classList.remove('show'));

        //Set Menu State back to false
        showMenu = false;
    }
}

