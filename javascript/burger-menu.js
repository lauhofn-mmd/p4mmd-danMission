console.log("Hello");
//Mobile burgermenu
function mobileMenu() {
  var x = document.getElementById("menuLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
} 

//Array Mobile
const MenuLinks = [
    {a: "Støt"},
    {dt: "Genbrug"},
    {dd: "Bliv Frivillig"},
    {dd: "Find Butik"},
    {dd: "Om Os"},
];




//Desktop Dropdown
function myFunction() {
    document.getElementById("genbrugDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
        dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns [i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

