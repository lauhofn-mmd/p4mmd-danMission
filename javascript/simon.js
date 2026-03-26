const nyhed =[
    {
        for: "firstname",
        overskrift: "Fornavn",
        type: "text",
        id: "fornavn",
        name: "firstname",
        placeholder: "Fornavn",
        class: "input"
    },
    {
        for: "lastname",
        overskrift: "Efternavn",
        type: "text",
        id: "lastname",
        name: "lastname",
        placeholder: "Efternavn",
        class: "input"
    },
    {
        for: "email",
        overskrift: "Email",
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Email",
        class: "input"
    }
];

const form = document.getElementsByClassName("newsletter__input")[0];

function visForm() {
    for (let i = 0; i < nyhed.length; i++) {
       nyhed.innerHTML += `
       <div><label for="${nyhed[i].for}" class="label">${nyhed[i].overskrift}</label><p class="input__required-red">*</p></div>
        <input required type="${nyhed[i].type}" id="${nyhed[i].id}" name="${nyhed[i].name}" placeholder="${nyhed[i].placeholder}" class="${nyhed[i].class}">`
    
        if (i == 2) {
            console.log("Formen er færdig");
        }
    }
}

visForm();