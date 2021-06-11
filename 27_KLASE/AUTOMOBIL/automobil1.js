class Auto {
    constructor(b, m , k){
        this.boja=b; //this.boja je seter, seter pozivamo kao promenljivu bez navodjenja zagrada iako je metod... dakle brisemo donju crtu  this._boja=b;
        this.marka=m;
        this.krov=k;
    }

    // Seteri - Postavljaju vrednost poljima - Upisuju vrednost u polja
    // Pravimo metod setrer za svako polje
    set boja(x){ // set je metod
        this._boja = x;  // sa crticom su polja.. polju dodeljujemo vrednost x
    }
    set marka(x){
        this._marka = x;
    }
    set krov(x){
        if(x === true || x === false){
        this._krov = x;
    }
    else{ // ukoliko unese bilo sta drugo, npr. x, stavljamo da je po difoltu tacno
        this._krov = true; //mozemo staviti ovde i alert da npr. mora biti true ili false
    }
  }

  // Geteri - Vracaju vrednost polja- Citaju vrednost iz polja
  get boja(){
      return this._boja;
  }
  get marka(){
      return this._marka;
  }
  get krov(){
      return this._krov;
  }
}

let auto1 = new Auto("red", "Fiat", true);
// Ovako NE!!!
//console.log(auto1._boja);  ne pristupamo polju, nego geteru i seteru
//auto1._boja="white";
//console.log(auto1._boja);

//Ovako DA
//Pristup poljima iskljucivo preko getera i setera
console.log(auto1.boja); //geteru pristupamo, ali bez zagrada, dakle ne auto1.boja()
auto1.boja = "white"; //pristupam seteru za boju, opet bez zagrada
console.log(auto1.boja);