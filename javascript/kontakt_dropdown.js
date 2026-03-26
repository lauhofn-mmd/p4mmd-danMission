
// Javascript til Butik Dropdown

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

// Javascript til Butik Dropdown


// Javascript til Job Dropdown

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

// Javascript til Job Dropdown


//  Send knap Alert 

    
    // Kodehjælp fra W3Schools.com "Modal Boxes"

        let modal = document.getElementById("myModal");
        let btn = document.getElementById("send_knap");
        let span = document.getElementsByClassName("modal__container-close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }

        span.onclick = function() {
        modal.style.display = "none";
        }

    // Lukker vindue når man klikker udenfor x
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
//