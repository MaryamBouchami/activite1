alert('ceci est un fichier js pour la première activité');
console.log('texte à afficher par la console du navigateur');
var bloc=document.getElementById("contenu");
var paragraphe=document.createElement("p");
paragraphe.textContent="ceci est un texte ajouté en utilisant javascript";
bloc.appendChild(paragraphe);
