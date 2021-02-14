const tableauLivres= [
    {  titre: "La peau de chagrin",
       auteur: "Honoré de Balzac" ,
       prix: 18 ,
       image: "https://i0.wp.com/lyber.org/wp-content/uploads/2019/07/ob_8fec4b_adc72fa84a393cd5ff248ce6269aa3971f7f2a.jpg?fit=600%2C317&ssl=1" ,
       resume: " Raphaël de Valentin est un jeune marquis malchanceux, ruiné et solitaire, au bord du suicide. Il doit sa survie à un antiquaire, chez qui il trouve par hasard un talisman, une peau de chagrin censée exaucer le moindre de ses désirs." 
} ,
{      titre: "Crime et Châtiment",
       auteur: "Fiodor Dostoievski" ,
       prix: 15 ,
       image: "https://static.fnac-static.com/multimedia/Images/FR/NR/92/fd/a7/11009426/1507-1/tsp20190815081327/Crime-et-chatiment.jpg" ,
       resume: "Crime et Châtiment est un roman de Fedor Dostoïevski, l'un des fondateurs du roman moderne. Ce roman raconte l'histoire d'une rédemption et soulève la question de la responsabilité des actes de chaque individu, sur fond de lutte entre Dieu, la morale et la théorie du Surhomme." 
} ,
{      titre:"Bel-Ami",
       auteur: "Guy de Maupassant" ,
       prix: 20 ,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_Pur5lVkH5zoEfvcOIWSoI3rA6ZyVBWcJQXB9h0ViU6wLNbcNzpivpcVo2K7XbVpK8umPFk5&usqp=CAc" ,
       resume:"Le roman retrace l'ascension sociale de Georges Duroy (ou Georges Du Roy de Cantel), homme ambitieux et séducteur sans scrupules (arriviste et opportuniste), employé au bureau des chemins de fer du Nord, parvenu au sommet de la pyramide sociale parisienne grâce à ses maîtresses et à la collusion entre la finance, la ..." 
} ,
{      titre: "L'homme Qui Rit",
       auteur: "Victor Hugo" ,
       prix: 19 ,
       image: "https://m.media-amazon.com/images/I/51tCtT1+huL.jpg" ,
       resume: "Les principales scènes de cet étrange roman se passent en Angleterre sous, le règne de la reine Anne. Un vieux bateleur très savant, Ursus, misanthrope, mais excellent homme, parcourt le sud de l'Angleterre avec sa carriole et son seul ami, un loup qui s'appelle Homo." 
} ,
{      titre: "Le Chevalier à la peau de panthère" ,
       auteur: "Chota Roustavéli" ,
       prix: 17 , 
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Vepkhistkaosani_zichy.jpg/220px-Vepkhistkaosani_zichy.jpg",
       resume: "L'histoire se passe en Inde et en Arabie ; elle raconte l'amitié qui unit les deux héros, Avtandil et Tariel, et la quête pour retrouver l'objet de l'amour de ce dernier, Nestane. Dédicacée à la reine Tamar qui sert de modèle à Nestane, l'œuvre vante la grandeur et la stabilité du royaume de Géorgie à son âge d'or"
} ,
{      titre: "Le Comte de Monte-Cristo" ,
       auteur: "Alexandre Dumas" ,
       prix: 21 , 
       image: "https://editions.flammarion.com/media/cache/couverture_large/flammarion_img/Couvertures/9782081366503.jpg",
       resume: "1815. Louis XVIII rétabli sur le trône se heurte à une opposition dont l'Empereur, relégué à l'île d'Elbe, songe déjà à profiter. Dans Marseille livrée à la discorde civile, le moment est propice aux règlements de comptes politiques ou privés. C'est ainsi que le marin Edmond Dantès, à la veille de son mariage, se retrouve, sans savoir pourquoi, arrêté et conduit au château d'If... Paru en 1844-1846, Le Comte de Monte-Cristo connut un succès qui ne s'est pas démenti, ce qui en fait une des ouvres les plus populaires de la littérature mondiale."
}
]
//console.log(tableauLivres);

start()

function afficheRecommandations() {

   /* tableauLivres.forEach(livre => {
        console.log(livre) 
     })

   let count = 0;
   for (let livre of tableauLivres) {
       if (count++ >= 2) {
           break;
       }
       console.log(livre);
   }

   for (let i=0; (i < tableauLivres.length & i < 3); i++) {
       let livre = tableauLivres[Math.floor(Math.random()*4)]
       console.log(livre)
   }*/

    tableauLivres.sort(function (a, b) {return 0.5 - Math.random() })

    for (let i=0; i < tableauLivres.length; i++) {

        let livre = tableauLivres[i]

        const imageHTML = document.querySelectorAll('.image')[i];
        const titreHTML = document.querySelectorAll('.titre')[i];
        const auteurHTML = document.querySelectorAll('.auteur')[i];
        const prixHTML = document.querySelectorAll('.prix')[i];

        imageHTML.src = livre.image;
        titreHTML.innerText = livre.titre;
        auteurHTML.innerText = livre.auteur;
        prixHTML.innerText = livre.prix + '€';

        //console.log(livre.auteur)
    }
}

function afficheLivres(prixMax) {

    for (let i=0; i < tableauLivres.length; i++) {
        let livre = tableauLivres[i]

        if(livre.prix >= prixMax) {
            continue;
        }

        const imageHTML = document.querySelectorAll('.image')[i];
        const titreHTML = document.querySelectorAll('.titre')[i];
        const auteurHTML = document.querySelectorAll('.auteur')[i];
        const prixHTML = document.querySelectorAll('.prix')[i];
        const descriptionHTML = document.querySelectorAll('.text')[i];

        imageHTML.src = livre.image;
        titreHTML.innerText = livre.titre;
        auteurHTML.innerText = livre.auteur;
        prixHTML.innerText = livre.prix + '€';
        descriptionHTML.innerText = livre.resume;

        //console.log(livre.titre)
    }
}

function rechercheLivres() {
    
    let input = document.querySelector('#rechercher').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    // .then(reponse => reponse.json()) 
    .then((reponse) => { 
        return reponse.json();  
    })  

    .then((data) => {   
        const livresAPI = data.items;  
        tableauLivres.splice(0, tableauLivres.length)
        //console.log(livresAPI);
        livresAPI.forEach(livre => {

            const livreFormatte = {
                titre: livre.volumeInfo?.title,
                auteur:  livre.volumeInfo?.authors?.join(', '),
                prix: livre.saleInfo?.listPrice?.amount,
                image: livre.volumeInfo?.imageLinks?.thumbnail,
                resume: livre.volumeInfo?.description,
            }
            tableauLivres.push(livreFormatte)
        });
    })
    afficheRecommandations();
    afficheLivres(20);
}

function initSubmitForm() {
 
    document.querySelector('#form').addEventListener('submit', (ev) => {
        ev.preventDefault()
        rechercheLivres(document.querySelector('#rechercher').value)
    })
}

function start() {
    initSubmitForm()
    rechercheLivres();
}

