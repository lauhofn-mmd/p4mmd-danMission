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
    {a: "#støt", div:"Støt"},
    {dt: "Genbrug"},
    {a: "index.html", dd: "Bliv Frivillig"},
    {dd: "Find Butik"},
    {dd: "Om Os"},
    {a: "#voresArbejde", div:"Vores arbejde"},
];

const menuContainer = document.getElementById("LinksMenu");

//Loop
for (let links in MenuLinks) {
    console.log(links, MenuLinks[links]);
}

//Desktop Dropdown
function myFunction() {
    document.getElementById("genbrugDropdown").classList.toggle("show");
}

//Extra steps...
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

