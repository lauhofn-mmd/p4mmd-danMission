// Kodehjælp fra shouts.dev (Dropdown Array List)

let butikSelect = document.getElementById("butik_select"); 
let butikElmts = ["Edisonsvej 16, Odense C", "Vindegade 24, Odense C"]; 


function butikDropdown() { 
    for (let i = 0; i < butikElmts.length; i++) { 
        let optn = butikElmts[i]; 
        let el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        butikSelect.appendChild(el); 
    } 
} 

let select = document.getElementById("job_select"); 
let elmts = ["Ekspedient", "Tøj-kender", "SoMe redaktør", "Chauffør", "Syerske"]; 


function jobDropdown() { 
    for (let i = 0; i < elmts.length; i++) { 
        let optn = elmts[i]; 
        let el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        select.appendChild(el); 
    } 
} ;