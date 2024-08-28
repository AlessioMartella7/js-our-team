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
//aggiungiamo i dati dei componenti del team al nostro array
//stampiamo in console le informazioni sottoforma di stringa
//stampiamo nel DOM sempre sottoforma di stringa

//recuperiamo gli elementi dal DOM 

const teamListField = document.getElementById('team-list');

//creiamo un array
const team = [
    {firstName: 'Wayne', lastName: 'Barnett', role:'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg' },
    {firstName: 'Angela', lastName: 'Caroll ', role:'Chief Editor', picture: 'angela-caroll-chief-editor.jpg' },
    {firstName: 'Walter', lastName: 'Gordon', role:'Office Manager', picture: 'walter-gordon-office-manager.jpg' },
    {firstName: 'Angela', lastName: 'Lopez', role:'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg' },
    {firstName: 'Scott', lastName: 'Estrada', role:'Developer  ', picture: 'scott-estrada-developer.jpg' },
    {firstName: 'Barbara', lastName: 'Ramos', role:'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg  */' },
];



