export class Pacijent {
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
