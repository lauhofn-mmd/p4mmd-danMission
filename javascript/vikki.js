const stillinger = [
    {
        img: "images/Ekspedient.webp",
        alt: "Ekspedient billedet",
        title: "Ekspedient",
        beskrivelse: "Vær med til at give kunderne en god oplevelse.",
        link: "ekspedient.html",

    },

    {
        img: "images/Tøjkender.webp",
        alt: "Tøjkender billede",
        title: "Tøj-kender",
        beskrivelse: "Vær med til at sortere og prissætte genbrugstøj.",
        link: "tøjkender.html",

    },

    {
        img: "images/SoMe.webp",
        alt: "Sociale Medier redaktør billede",
        title: "SoMe-redaktør",
        beskrivelse: "Skab kreativt indhold på sociale medier.",
        link: "some.html",

    },

    {
        img: "images/Chauffør.webp",
        alt: "Chauffør billede",
        title: "Chauffør",
        beskrivelse: "Afhent og levér møbler i den gode sags tjeneste.",
        link: "chauffeur.html",

    },

    {
        img: "images/Syerske.webp",
        alt: "Syerske billede",
        title: "Syerske",
        beskrivelse: "Sy muleposer af genbrugsstof i den gode sags tjeneste.",
        link: "syerske.html",

    },
];

const stillingerContainer = document.getElementsByClassName("stillingerne__cards")[0];

for (let i = 0; i < stillinger.length; i++) {
    stillingerContainer.innerHTML += `
        <div class="stillingerne__cards-element">
            <div class="stillingerne__cards-image">
                <img src="${stillinger[i].img}" alt="${stillinger[i].alt}">
            </div>
            <h3>${stillinger[i].title}</h3>
            <p class="stillingerne__cards-desc">
                ${stillinger[i].beskrivelse}
            </p>
            <button type="button" class="button"
                onclick="window.location.href='${stillinger[i].link}'">
                LÆS MERE
            </button>
        </div>`; 
        
        if (i == 4) {
            console.log("Der er 5 stillinger");
        }
        else if (i > 4) {
            console.log("Der er mere end 5 stillinger");
        }
        }