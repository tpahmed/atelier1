//Q1
const Etudiant = {
    nom:'',
    prenom:'',
    age:0,
    cne:''
}
const Professeur = {
    nom:'',
    age:0,
    cin:''
}
//Q2
Etudiant.étudier =  function(){
    console.log("Hi from Etudiant.étudier")
};

Professeur.enseigner = function(){
    console.log("Hi from Professeur.enseigner");
};
//Q3

const names = [
    { nom: 'Smith', prenom: 'John' },
    { nom: 'Johnson', prenom: 'Emily' },
    { nom: 'Williams', prenom: 'Michael' },
    { nom: 'Brown', prenom: 'Jessica' },
    { nom: 'Jones', prenom: 'Daniel' }
];

const etudiants = [];

for (let i = 0; i < 5; i++) {
    const etudiant = { ...Etudiant };
    const { nom, prenom } = names[i];
    etudiant.nom = nom;
    etudiant.prenom = prenom;
    etudiant.age = 20 + i; // Just an example age
    etudiant.cne = `CNE${i + 1}`;
    etudiants.push(etudiant);
}

console.log("trie par nom :")
console.table(etudiants.sort((a,b)=>a.nom.localeCompare(b.nom)));;
console.log("trie par prenom :")
console.table(etudiants.sort((a,b)=>a.prenom.localeCompare(b.prenom)));
