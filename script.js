console.log('JS OK');

/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto */

//Creo un array con i membri del team

const teams = [
    {
        image : 'wayne-barnett-founder-ceo.jpg',
        name : 'Wayne Barnett',
        role :  'Founder & CEO',
    },
    {
        image : 'angela-caroll-chief-editor.jpg',
        name : 'Angela Carrol',
        role :  'Chief Editor',
    },
    {
        image : 'walter-gordon-office-manager.jpg',
        name : 'Walter Gordon',
        role :  'Office Manager',
    },
    {
        image : 'angela-lopez-social-media-manager.jpg',
        name : 'Angela Lopez',
        role :  'SMM',
    },
    {
        image : 'scott-estrada-developer.jpg',
        name : 'Scott Estrada',
        role :  'Developer',
    },
    {
        image : 'barbara-ramos-graphic-designer.jpg',
        name : 'Barbara Ramos',
        role :  'Graphic Designer',
    },
];


//Prendo gli elementi dal DOM
const teamCard = document.getElementById('team-card');

//Creo una variabile per il conenuto della card
let teamContent = '';

// Creo un ciclo per generare l HTML
for( let i = 0 ; i < teams.length ; i++){
    teamContent += `
    <div class="col-2 d-flex flex-column my-4">
    <div class="card" style="width: 11rem;">
    <img src="img/${teams[i].image}" alt="${teams[i].name}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${teams[i].name}</h5>
      <p class="card-text">${teams[i].role}</p>
    </div>
  </div>
    </div>
    `
}

//Stampo in pagina
teamCard.innerHTML = teamContent;

