
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


    let requiredName = document.getElementById("fornavn");
    let requiredMail = document.getElementById("e-mail");
    let requiredPhone = document.getElementById("phonenumber");

    let nameValue = requiredName.value;
    let mailValue = requiredMail.value;
    let phoneValue = requiredPhone.value;

    function alertMessage() {
        console.log(nameValue);
        console.log(mailValue);
        console.log(phoneValue);
    }

    function myFunction() {
        document.getElementsByClassName("kontakt__menu").reset();
    }
    
//