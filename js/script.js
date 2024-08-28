/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
 # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg  */


//recuperiamo gli elementi dal DOM 
//creiamo un array
//stampiamo in console le informazioni sottoforma di stringa
//stampiamo nel DOM sempre sottoforma di stringa


//# Preparation Phase

//recuperiamo gli elementi dal DOM 

const teamListField = document.getElementById('team-list');


//# Elaboration Phase

//creiamo un array
const team = [

    //aggiungiamo i dati dei componenti del team al nostro array
    {firstName: 'Wayne', lastName: 'Barnett', role:'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg' },
    {firstName: 'Angela', lastName: 'Caroll ', role:'Chief Editor', picture: 'angela-caroll-chief-editor.jpg' },
    {firstName: 'Walter', lastName: 'Gordon', role:'Office Manager', picture: 'walter-gordon-office-manager.jpg' },
    {firstName: 'Angela', lastName: 'Lopez', role:'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg' },
    {firstName: 'Scott', lastName: 'Estrada', role:'Developer  ', picture: 'scott-estrada-developer.jpg' },
    {firstName: 'Barbara', lastName: 'Ramos', role:'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg' },
];

//stampiamo in console le informazioni sottoforma di stringa

let items='';

for(let i = 0 ; i < team.length ; i++) {
   let teamMember = team[i];
 /*    console.log(` 
        ${teamMember.firstName} ${teamMember.lastName}
        Role : ${teamMember.role}
        ${teamMember.picture} `
        ); */
        
        //# Prepare Data to Send

        //preparo i nomi dei membri del team
        const fullname = `${teamMember['firstName']} ${teamMember['lastName']}`;
        
        //preparo i ruoli dei membri del team
        const memberRole = teamMember['role'];
        
        //preparo le immagini dei memmbri del team
        const memberPicture = teamMember['picture'];

        //assemblo i dati
        items += `
        <li>
            <h3> ${fullname} </h3>
            <h4> Ruolo: ${memberRole} </h4>
            <img src= "../img/${memberPicture}" alt ="${fullname} - picture ">
        </li> `;
        
    }

    //# Output Phase
    //stampiamo nel DOM sempre sottoforma di stringa
    teamListField.innerHTML = items;
    