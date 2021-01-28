# actutu

function afficheLivres(prixMax){ 
    tableauLivre.forEach(function (tableauLivre) {
        if (tableauLivre.prix <= prixMax) {
           console.log(tableauLivre); 
        }
     }
    )}
afficheLivres(20)   */

 
function afficheLivre(tableauLivre) {
    document.getElementById('articles').innerHTML = '';
    for (let troisLivres of tableauLivre) {
        let noeudLivres = document.createElement('p');
        noeudLivres.classList.add('livres');
        noeudLivres.innerText = troisLivres;
        document.getElementById('articles').appendChild(noeudLivres);
    }
}  */