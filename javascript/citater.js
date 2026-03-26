const citater = [
    {
        quote: "“Jeg har selv været mega glad for at arbejde hos Danmission. Jeg er blevet mere selvsikker i mig selv og mine evner!”",
        name: "Josefine Hansen, 20 år",
        job: "Frivillig ekspedient",
    },
    {
        quote: "“Det er dejligt arbejde at lave i fritiden. Jeg føler at jeg laver noget der gavner andre.”",
        name: "Nicolai Andersen, 24 år",
        job: "Frivillig chauffør",
    },
    {
        quote: "“Jeg elsker at lege med opslag på sociale medier, så det her fritids-gig er perfekt for mig.”",
        name: "Kristine Nielsen, 21 år",
        job: "Frivillig SoMe-hjælper",
    },
];

const quoteContainer = document.getElementsByClassName("quotes__elements")[0];

function visCitater () {
    for (let i = 0; i < citater.length; i++) {
        quoteContainer.innerHTML += `
        <div class="quotes__card"> 
            <p class="quotes__card-quote">${citater[i].quote}</p> 
            <div class="quotes__card-flex"> 
                <div> <i class="fa-solid fa-circle-user quotes__card-icon"></i> 
            </div> 
            <div> 
                <h3 class="quotes__card-name">${citater[i].name}</h3> 
                <p class="quotes__card-job">${citater[i].job}</p> 
            </div> 
            </div> 
        </div>`;

        if (i == 2) {
            console.log("Der er 3 citater");
        }
        else if (i > 2) {
            console.log("Der er mere end 3 citater");
        }
    }
}

visCitater();