// Q 1
function Voiture(model, marque, annee, type, carburant){
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

//Q2
const voitures = [
    new Voiture("Civic", "Honda", 2022, "Sedan", "Essence"),
    new Voiture("Mustang", "Ford", 2023, "Coupe", "Essence"),
    new Voiture("A4", "Audi", 2021, "Sedan", "Diesel"),
    new Voiture("Corolla", "Toyota", 2024, "Sedan", "Hybride"),
    new Voiture("C-Class", "Mercedes-Benz", 2022, "Sedan", "Essence")
];

//Q3
function Hyndai(série, hybride){
    this.série = série;
    this.hybride = hybride;
    this.alarmer = ()=>{
        alert(this.série);
    }
}

Hyndai.prototype = Object.create(Voiture.prototype,{
    constructor:{
        value:Hyndai,
        writable:true,
        configurable:true,
        enumerable:false
    }
});

function Ford(option){
    this.option = option;
}

Ford.prototype = Object.create(Voiture.prototype,{
    constructor:{
        value:Ford,
        writable:true,
        configurable:true,
        enumerable:false
    }
});

//Q4
console.table(voitures.sort((a,b)=>a.annee-b.annee));
