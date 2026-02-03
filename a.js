const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ['b','b', 'b' ,'c', 'c'];
const titreResultat = document.querySelector(".resultats h2");
const texteResultat= document.querySelector(".note");
const aideResultat= document.querySelector(".aide");
const toutesLesQuestions= document.querySelectorAll(".question-block");
let verifTableau= [];

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    for(i=1; i<=5; i++){
        const reponse = document.querySelector(`input[name="q${i}"]:checked`);
        tableauResultats.push(reponse ? reponse.value : null);
        // tableauResultats.push(document.querySelectorAll(`input[name= "q${i}"]:checked`).value);
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats){
    for(let a=0; a<5; a++){
        if(tabResultats[a]=== reponses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau= [];
}
function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    switch(nbDeFautes){
        case 0:
            titreResultat.innerText= "Bravo, c'est un sans fautes !";
            aideResultat.innerText='';
            texteResultat.innerText= '5/5';
            break;
        case 1:
            titreResultat.innerText= "Vous y etes presque !";
            aideResultat.innerText='Retenter une autre réponse dans les cases rouges puis validez !';
            texteResultat.innerText= '4/5';
            break;
        case 2:
            titreResultat.innerText= "Encore un effort";
            aideResultat.innerText='Retenter une autre reponse dans les cases rouges puis validez !';
            texteResultat.innerText= '3/5';
            break;
        case 3:
            titreResultat.innerText= "Il reste quelques erreurs ";
            aideResultat.innerText='Retenter une autre reponse dans les cases rouges puis validez !';
            texteResultat.innerText= '2/5';
            break;
        case 4:
            titreResultat.innerText= "Peut mieux faire !";
            aideResultat.innerText='Retenter une autre reponse dans les cases rouges puis validez !';
            texteResultat.innerText= '1/5';
            break;
        case 5:
            titreResultat.innerText= "Peut mieux faire !";
            aideResultat.innerText='Retenter une autre reponse dans les cases rouges puis validez !';
            texteResultat.innerText= '0/5';
            break;
        default:
            'Woops, cas innatendu !';
    }
}

function couleursFonction(tabValBool){
    for(let j=0; j< tabValBool.length; j++){
        if(tabValBool[j] === true){4
            toutesLesQuestions[j].computedStyleMap.background= 'lightgreen';
        }else{
            toutesLesQuestions[j].style.backgroundColor= '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() =>{
                toutesLesQuestions[j].classList.remove('echec');
            },500)
        }
    }
}

toutesLesQuestions.forEach(item =>{
    item.addEventListener('click', () =>{
        item.computedStyleMap.background = "whier";
    })
})