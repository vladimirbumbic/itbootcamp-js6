export class Film {
    constructor(n , r , gi, o){ // napravimo da je "o" ceo niz
        this.naslov=n;
        this.reziser=r;
        this.godinaIzdanja=gi;
        this.ocene=o;
    }
    stampaj(){
        console.log(`${this.naslov} bla bla`);
    }
    //Napraviti metod prosek koji vraća prosečnu ocenu --vraca prosek iz niza

    prosek(){
        let suma=0;
        this.ocene.forEach(elem => {
            suma+=elem;
        });
        return suma/this.ocene.length;
    }

    set naslov(x){
        this._naslov=x;
    }
    set reziser(x){
        this._reziser=x;
    }
    set godinaIzdanja(x){
        if(x>1800){
        this._godinaIzdanja=x;
        }
        else{
            this._godinaIzdanja=1800;
        }
    }

    set ocene(niz){
        this._ocene=niz;
    }
    get ocene(){
        return this._ocene;
    }

    get naslov(){
        return this._naslov;
    }
    get reziser(){
        return this._reziser;
    }
    get godinaIzdanja(){
        return this._godinaIzdanja;
    }
}
/*
let film1 = new Film("Naslov1", "Reziser1", 1750);
let film2 = new Film("Naslov2", "Reziser2", 2001);
let film3 = new Film("Naslov3", "Reziser3", 2002);

console.log(film3.reziser);
film3.reziser="Novi reziser";
console.log(film3.reziser);
console.log(film1.godinaIzdanja);
console.log(film2.godinaIzdanja);
console.log(film2.naslov);

film2.stampaj();
film3.stampaj();

///////////////////////////////////////////////////////

class Pacijent {
    constructor(i, v, t){
        this.ime=i;
        this.visina=v;
        this.tezina=t;
    }

    stampaj1(){
        console.log(`${this.ime}, ${this.visina}, ${this.tezina}`);
    }

    Bmi(){
        let bmi=this.tezina/this.visina**2;
        return bmi;
    }

    Kritican(){
        if(this.Bmi()<15 || this.Bmi()>40){
            return true
        }
        else{
            return false
        }
    }
    set ime(x){
        this._ime=x;
    }
    set visina(x){
        if(x>0 && x<250){
        this._visina=x;
        }
        else{
            this._visina=1;  
        }
    }
    set tezina(x){
        if(x>0 && x<550){
        this._tezina=x;
    }
    else{
        this._tezina=1; 
    }
    }

    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }
}

let pacijent1 = new Pacijent("Ime1", 1.80, 80);
let pacijent2 = new Pacijent("Ime2", 1.90, 90);
let pacijent3 = new Pacijent("Ime3", 2.00, 100);

console.log(pacijent1.visina);
pacijent1.stampaj1();
console.log(pacijent1.Bmi());
console.log(pacijent1.Kritican());

*/