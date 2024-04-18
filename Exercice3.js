class Vecteur2D{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    affichage(){
        return "x : " + this.x + ", y : " + this.y;
    }
    addition(add_v=(new Vecteur2D(0,0))){
        this.x += add_v.x;
        this.y += add_v.y;
    }
}

const v2d1 = new Vecteur2D();
const v2d2 = new Vecteur2D(10,8);

console.log(v2d1);
console.log(v2d2);


const v2d3 = new Vecteur2D(5,9);
const v2d4 = new Vecteur2D(11,-8);

v2d3.addition(v2d4);

console.log(v2d3);
console.log(v2d4);

class Rectangle {
    constructor(longueur = 2, largeur = 1,nom = "rectangle") {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = nom;
    }

    affichage() {
        console.log(`${this.nom} with length ${this.longueur} and width ${this.largeur}`);
    }

    surface() {
        return this.longueur * this.largeur;
    }
}

class Carre extends Rectangle {
    constructor (length, name='caree') {
        super(length, length, name)
    }
}


class Point {
    constructor (x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor (x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

const r1 = new Rectangle(20, 7, "Rectangle 1");
const c1 = new Carre(5, "Carre 1");

console.log(r1.affichage());
console.log(ca1.affichage());