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
    console.log(` 
        ${teamMember.firstName} ${teamMember.lastName}
        Role : ${teamMember.role}
        ${teamMember.picture} `
        );
        
        //# Prepare Data to Send

        //preparo i nomi dei membri del team
        const fullname = `${teamMember['firstName']} ${teamMember['lastName']}`;
        
        //preparo i ruoli dei membri del team
        const memberRole = teamMember['role'];
        
        //preparo le immagini dei memmbri del team
        const memberPicture = teamMember['picture'];

        //assemblo i dati
        items += `

          <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
            <div class="card" style="width: 18rem;">
                <img src="../img/${memberPicture}" class="card-img-top" alt="${fullname} - picture ">
                <div class="card-body">
                    <p class="card-text">
                        <h3> ${fullname} </h3>
                        <h4> Ruolo: ${memberRole} </h4>
                    </p>
                </div>
            </div> 
          </div> `;
        
    }

    //# Output Phase
    //stampiamo nel DOM sempre sottoforma di stringa
    teamListField.innerHTML = items;
    
    