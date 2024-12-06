var deButton = document.querySelector("header ul button");
var deCloseButton = document.querySelector("header nav button");

deButton.onclick = addMenu;
deCloseButton.onclick = removeMenu;

function addMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

function removeMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}