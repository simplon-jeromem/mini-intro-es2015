console.log('hello es6');

/*
 définitions de classes :
 description d'entités et de leurs méthodes/fonctions
 */
class Panier {
    /** fonction constructeur :
     apellé au moment de la création de chaque instance */
    constructor() {
        // initialise la liste d'utilisateurs
        this.produits = [];
    }

    /** fonction d'ajout de produit au panier */
    ajouteProduit(produit) {
        this.produits.push(produit);
        console.log('produit ajouté : ', produit.nom);
    }

    get totalTTC(){
        return produits.reduce((total,p ) => total + p.prixTTC )
    }
}

/**
 * définition d'une classe de description de produit
 * permet principalement de définir une structure de données
 */
class Produit {

    /**
     * getter : renvoie prix TTC calculé
     * @returns {number}
     */
    get prixTTC() {
        return this.prixHT *  (1 + this.tva);
    }

    /**
     * constructeur avec valeur par défaut pour param tva
     */
    constructor(nom, prixHT, tva = 0.2) {
        this.nom = nom;
        this.prixHT = prixHT;
        this.tva = tva;
    }
}

var panier = new Panier();
var produit = new Produit('pain',0.8);
console.log('pain ttc', produit.prixTTC);
panier.ajouteProduit(produit);


/**
 * exemple de classe avec methode/fonction static
 */
class Math {
    /* v0 : 2 paramètres
     static addition(a,b){
     return a + b;
     }*/

    /**
     * nombres de parametres "libre"
     */
    static addition(...values) {
        /*
         * on utilise la fonction reduce qui parcourt un tableau en calculant
         */
        return values.reduce((total, courant) => total + courant);

        /* équivaut à

         var res = 0;
         for(var i = 0 ; i < values.length ; i ++){
         res += values[i];
         }
         ou avec un reduce classique avec function :
         values.reduce(function (total, courant){
         return total+courant;
         } );
         */

    }
}

console.log('sum 10,2', Math.addition(10, 2));
console.log('sum 1,2,3,4', Math.addition(1, 2, 3, 4));

const nombres = [23, 34, 12];

// la syntaxe ...nombres permet de passer le contenu d'un tableau sous forme "décomposée"
// équivaut Math.addition(23,34,12);
console.log('sum [23, 34, 12]', Math.addition(...nombres));

/*
 * Exemple d'utilisation : calcul de la moyenne d'âge d'une liste de User
 */
class User {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}

const users = [
    new User('Jack', 30),
    new User('Lea', 19),
    new User('Luc', 25)
];

/*
 * calcul de la moyenne d'âge des users
 * on utilise la fonction addition(...valeurs) défini plus haut
 * » users.map(u => u.age) renvoie un tableau avec les ages des objets du tableau users
 * » Math.addition(...users.map(u => u.age)) permet de passer la liste des ages
 */
const moyenneAge1 = Math.addition(...users.map(u => u.age)) / users.length;
console.log('moyenneAge1', moyenneAge1);

/**
 * calcul de la moyenne à l'aide de reduce(...)
 * @type {number}
 */
const moyenneAge2 = users.map(u => u.age)
        .reduce((total, age) => total + age) / users.length;
console.log('moyenneAge2', moyenneAge2);

/*
 * FONCTIONS
 */
var substract = (a, b) => a - b;
console.log('substract', substract(6, 3));
/* ou en version plus longue
 var substract = (a,b) => {
 var res = a - b;
 return res;
 }
 */

/*
exemple 2 : recupérer liste des noms d'une liste de produits
*/
var produits = [
    new Produit("lait", 1),
    new Produit("eau", 1),
    new Produit('Pain', 0.95)
];

// fonction fléchée
const noms = produits.map(produit => produits.nom);

// fonction classique
const nom2 = produits.map(function (produit) {
    return produits.nom
});

/*
 TEMPLATES
 */
const nom = 'Bob';
console.log(`salut ${nom} !`); // équivaut à : console.log('salut ' + nom + ' !');

/*
* object litterals
* - nom est automatiquement attribué basé sur la const nom déclarée + haut
 */

const participant = {
    nom,
    age: 42,
    ville: 'Lyon'
};
console.log(unObject.nom);

/*
déstructuration
 */
const {age, ville} = participant;
// on a recuperé 2 const age et ville à partir des propriétés age & ville de participant
/* equivaut à
var age = unObject.age;
var ville = unObject.ville;
 */
console.log("age", age);
