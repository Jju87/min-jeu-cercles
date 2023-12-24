console.log('connecté'); 

document.getElementById("titre").style.color="lightblue";
let titre = document.getElementById("titre")
//console.log(titre)
//ICI, titre.innerText = compteur NE FONCTIONNE PAS HORS DE SA FONCTION ADD()

let compteur = 0
//SELECTION STOCK
const btnRed = document.getElementById("btn-red")
const btnBlue = document.getElementById("btn-blue")
//console.log(btnRed, "bouton rouge")

//ACTION AU CLICK
btnRed.addEventListener("click", ()=>{
    //console.log("jai cliqué")
    //INCREMENTATION DU COMPTEUR
    
    //console.log("La valeur du compteur au démarrage est de : " + compteur)
    //INCREMENTATION DE 1
    compteur+=20
    console.log(compteur)
    titre.innerText = compteur
})
btnBlue.addEventListener("click",()=>{
    add()
})

function add(){
    compteur++
    console.log(compteur)
    titre.innerText = compteur
}

const btnblack = document.getElementById("btn-black")
btnblack.addEventListener("click", ()=> {
    compteur-=10;
    titre.innerText=compteur
})



setTimeout(function(){
    
    let over = document.getElementById("over")
    over.style.display = "block"
    over.innerText = "Ton score est de " + compteur +" points...T'es nul! Essaies de faire au moins 10 points !"
    over.style.border = "2px solid black"
    
    over.style.boxShadow = "5px 6px 10px 10px rgba(0,0,0,0.8)"
    btnBlue.remove()
    btnRed.remove()
    btnblack.remove()
    titre.remove()
    let jamais = document.getElementById("jamais")
    jamais.remove()
    if(compteur > 9){
        if(compteur > 9){
            over.innerHTML = `Bon allez je t'aide, tu me fais de la peine. Le cercle <span class="red">rouge</span> vaut 20 points! Tu devrais pouvoir faire mieux que tes misérables ${compteur} points! Essaies de faire au moins 100 points !`
        }    }
    if(compteur > 99){
        over.innerText = compteur + " points! Pas mal pour un loser! Tu n'arriveras jamais à 200 points je parie..."
    }
    if(compteur > 199){
        over.innerText = compteur + " points... Mmmouais. Un papy pourrait y arriver... Pas mal, mais c'est pas non plus 300 points..."
    }
    if(compteur > 299){
        over.innerText = compteur + " points! Tu es la plus forte personne de l'univers, et je te félicite! Je plaisante. Tu serais la plus forte personne de l'univers avec 400 points par contre!"
    }
    if(compteur > 399){
        over.innerText = compteur + " points! Eeuuuh. Tu as triché? Tu as terminé le meilleur jeu de la terre. BRAVO! Tu mérites ceci :)!"
        let coeur = document.createElement("img")
        coeur.src = "heart-png-38780.png"  
        document.body.appendChild(coeur)
        rejouer.remove()
    }

    let rejouer = document.querySelector(".rejouer")
    rejouer.innerText = "REJOUER!"
    rejouer.style.display = "block"
    rejouer.style.border = "2px solid white"
    rejouer.style.boxShadow = "5px 6px 10px 10px rgba(0,0,0,0.8)"
    
}, 20000)



