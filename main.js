const menuBurger = document.getElementById("burger");
const navbar1 = document.getElementById("nav1");
const navbar2 = document.getElementById("nav2");


menuBurger.addEventListener('click',()=>{ 
    navbar1.classList.toggle('active');
    navbar2.classList.toggle('active');
}) 
 

let tableauLivre = [
    {  titre: "La peau de chagrin",
       auteur: "Honoré de Balzac" ,
       prix: 18 ,
       image: "" ,
       résumé: " Raphaël de Valentin est un jeune marquis malchanceux, ruiné et solitaire, au bord du suicide. Il doit sa survie à un antiquaire, chez qui il trouve par hasard un talisman, une peau de chagrin censée exaucer le moindre de ses désirs." 
} ,
{      titre: "Crime et Châtiment",
       auteur: "Fiodor Dostoievski" ,
       prix: 15 ,
       image: "" ,
       résumé: "Crime et Châtiment est un roman de Fedor Dostoïevski, l'un des fondateurs du roman moderne. Ce roman raconte l'histoire d'une rédemption et soulève la question de la responsabilité des actes de chaque individu, sur fond de lutte entre Dieu, la morale et la théorie du Surhomme." 
} ,
{      titre:"Bel-Ami",
       auteur: "Guy de Maupassant" ,
       prix: 20 ,
       image: "" ,
       résumé:"Le roman retrace l'ascension sociale de Georges Duroy (ou Georges Du Roy de Cantel), homme ambitieux et séducteur sans scrupules (arriviste et opportuniste), employé au bureau des chemins de fer du Nord, parvenu au sommet de la pyramide sociale parisienne grâce à ses maîtresses et à la collusion entre la finance, la ..." 
} ,
{      titre: "L'homme Qui Rit",
       auteur: "Victor Hugo" ,
       prix: 23 ,
       image: "" ,
       résumé: "Les principales scènes de cet étrange roman se passent en Angleterre sous, le règne de la reine Anne. Un vieux bateleur très savant, Ursus, misanthrope, mais excellent homme, parcourt le sud de l'Angleterre avec sa carriole et son seul ami, un loup qui s'appelle Homo." 
} ,
{      titre: "Le Chevalier à la peau de panthère" ,
       auteur: "Chota Roustavéli" ,
       prix: 25 , 
       image: "",
       résumé: "L'histoire se passe en Inde et en Arabie ; elle raconte l'amitié qui unit les deux héros, Avtandil et Tariel, et la quête pour retrouver l'objet de l'amour de ce dernier, Nestane. Dédicacée à la reine Tamar qui sert de modèle à Nestane, l'œuvre vante la grandeur et la stabilité du royaume de Géorgie à son âge d'or"
}
]
//console.log(tableauLivre);



/*function affichRecommandations() {
   console.log(tableauLivre[0], tableauLivre[1], tableauLivre[2]);
}
affichRecommandations();*/




/*function afficheRecommandation() {
    livreRand1 = Math.floor(Math.random() * tableauLivre.length);
    livreRand2 = Math.floor(Math.random() * tableauLivre.length);
    livreRand3 = Math.floor(Math.random() * tableauLivre.length);
}
nb = afficheRecommandation();
console.log(tableauLivre[livreRand1], tableauLivre[livreRand2], 
            tableauLivre[livreRand3]);  */
 



/*function afficheRecommandation() {
    console.log (tableauLivre [Math.floor(Math.random() * tableauLivre.length)])
} 
console.log(afficheRecommandation())  */




/*function afficheRecommandation() {
    let livreRand = tableauLivre [Math.floor(Math.random() * tableauLivre.length)];
    console.log(livreRand)
} 
afficheRecommandation()  */




/*function afficheRecommandation() {
    let livreRand1 = tableauLivre [Math.floor(Math.random() * tableauLivre.length)];
    let livreRand2 = tableauLivre [Math.floor(Math.random() * tableauLivre.length)];
    let livreRand3 = tableauLivre [Math.floor(Math.random() * tableauLivre.length)];
    let livreRand =[livreRand1, livreRand2, livreRand3 ];
    console.log(livreRand)
} 
afficheRecommandation()  */



 

/*function afficheLivres(livreRand) {
    document.getElementById('articles').innerHTML = '';
    for (let troisLivres of livreRand) {
        let noeudLivres = document.createElement('p');
        noeudLivres.classList.add('livresJS');
        noeudLivres.innerText = troisLivres;
        document.getElementById('articles').appendChild(noeudLivres);
    }
}  */



let prixMax = 20;
tableauLivre.forEach(function afficheLivres(prixMax) {
        if (tableauLivre.prix <= prixMax) {
           console.log(tableauLivre); 
        }
     }
    )