let dan ={
    datum:"2021/05/17",
    kisa: true,
    sunce: true,
    oblacno:true,
    temperature:[10,15,17,21,18,21,13,11],
    //1. Metoda:Određuje prosečnu temperaturu izmerenu tog dana.
    prosecna:function(){
        let suma=0;
        this.temperature.forEach(temp=>{
            suma+=temp;
        });
        return suma/this.temperature.length;
    },
    //2.Metoda:Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna:function(){
        let average=this.prosecna();
        let broj=0;
        this.temperature.forEach(element=>{  //krecemo se nizom temperature
            if(element>average){
                broj+=1;
            }
        });
        return broj;            
    },
    //3.Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

maksimalna:function(){
    let maks=this.temperature[0];
    /*
    for(let i =0;i<this.temperature.length;i++){
        if(maks<this.temperature[i]){
            maks=this.temperature[i];
        }
    }
    return maks;
}
*/
this.temperature.forEach(element=>{
    if(maks<element){
        maks=element;
    }
});
return maks;
},
brojMaksimalnih:function(){
    let maks=this.maksimalna();
    let brMaks=0;
    this.temperature.forEach(element=>{
        if(element==maks){
            brMaks++;
        }
    });
    return brMaks;
},
//4.Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
parametri:function(a,b){
    let broj=0;
    this.temperature.forEach(elem=>{
        if(elem>a && elem<b){
            broj+=1;
        }
    });
    return broj;
},
//5.Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
//drugi nacin
/*vecinomNatprosecna:function(){
    let average=this.prosecna(); //ovo i ne treba onda
    let iznad=this.natprosecna();
    let ispod=this.temperature.length-iznad;
    return iznad>ispod;
    //if(iznad >ispod){
     //   return true;
    //}
    //else{
     //   return false;
    //}
}
};
*/
vise:function(){
    let iznadproseka=this.prosecna();
    let broj=0;
    this.temperature.forEach(elem=>{
        if(elem>iznadproseka){
            broj+=1;
        }
    });
    return broj;
},
manje:function(){
    let iznadproseka=this.prosecna();
    let broj=0;
    this.temperature.forEach(elem=>{
        if(elem<iznadproseka){
            broj+=1;
        }
    });
    return broj;
},
vecinaDana:function(){
    if(this.vise()>this.manje()){
        return true;
    }
    else{
        return false;
    }
},
//6.Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
ledenDan:function(){
    let leden = true;
    this.temperature.forEach(element=>{
        if(element>=0){
            leden=false;
        }
    });
    return leden;
    /*Drugi nacin
    for(let i=0;i<this.temperature.length;i++){
        if(this.temperature[i]>=0){
            return false;
        }
    }
    return true;

    //treci nacin-hibrid prvog i drugog
    let leden=true;
    for(let i=0;i<this.temperature.length;i++){
        if(this.temperature[i]>=0){
            leden =false;
            break;
        }
    }
    return leden;
    */
},
//7.Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
tropskiDan:function(){
    let tropski = true;
    this.temperature.forEach(element=>{
        if(element<24){
            tropski=false;
        }
    });
    return tropski;
},
//8.Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
DanNepovoljan:function(){
    let nepovoljan=false;
    for(let i=0;i<this.temperature.length - 1; i++){
        if(Math.abs(this.temperature[i] - this.temperature[i+1]) > 8){
            nepovoljan =true;
        }
    }
    return nepovoljan
}


};


//1. Metoda:Određuje prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());
//2.Metoda:Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());
//3.Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.brojMaksimalnih());
//4.Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.parametri(5,15));
//5.Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.vise());
console.log(dan.manje());
console.log(dan.vecinaDana());
//console.log(dan.vecinomNatprosecna());

//6.Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.ledenDan());

//7.Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropskiDan());

//8.Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
console.log(dan.DanNepovoljan());