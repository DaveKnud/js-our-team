//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
DATI:
//Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
//Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
//Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
//Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
//Scott Estrada	Developer	scott-estrada-developer.jpg
//Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


//Container 
const elContainer = document.getElementById("container");
console.log(elContainer);

//Crea l’array di oggetti (persone e informazioni)
const membriStaff = 
[
    {
        "name" : "Wayne Barnett",
        "position" : "Founder & CEO",
        "imageURL" : "wayne-barnett-founder-ceo.jpg"
    },

    {
        "name" : "Angela Caroll",
        "position" : "Chief Editor",
        "imageURL" : "angela-caroll-chief-editor.jpg"
    },

    {
        "name" : "Walter Gordon	Office Manager",
        "position" : "Office Manager",
        "imageURL" : "walter-gordon-office-manager.jpg"
    },

    {
        "name" : "Angela Lopez",
        "position" : "Social Media Manager",
        "imageURL" : "angela-lopez-social-media-manager.jpg"
    },

    {
        "name" : "Scott Estrada",
        "position" : "Developer",
        "imageURL" : "scott-estrada-developer.jpg"
    },

    {
        "name" : "Barbara Ramos",
        "position" : "	Graphic Designer",
        "imageURL" : "barbara-ramos-graphic-designer.jpg"
    }

]
