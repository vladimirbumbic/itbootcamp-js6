// fetch vraca Promise - asocijacija na promise je then i catch
//fetch("../JSON/todos.json") alterativa za prva tri koraka(XML, open, send) 

// Upada u catch granu samo ako je doslo do network error-a

// Sled od 4 koraka:
// 1. fetch .json fajla
// 2. return response.json() koji je promis
// 3. uzeti podatke iz response.json
// 4. catch error
                                  //x,y
fetch("../JSON/todos.json").then(response=>{ //parametar moze biti bilo sta, x,y
    //response je objekat koji nosi sa sobom veliki broj atributa
    console.log("resolved", response); 
    return response.json(); //response.json()  vraca promise... za svaki promis ide .then
}).then(data=>{ //podaci iz response.json();
    console.log(data);
}).catch(err=>{
    console.log("rejected", err);
});

///////////////////////////////////////////////////////////

//                   ASYNC & AWAIT    --cekaj dok se nesto ne izvrsi

//Asinhrona funkcija se prosledjuje kao parametar i ima zagrade ()
//Asinhrona funkcija ispred () mora da ima async
//Kao rezultat vraca promise
let getTodos = async() =>{
    let response = await fetch("../JSON/todos.json"); // Vraca response zbog cega smo ranije koristili then i catch
    //await=Cekaj dok se ne ucita ovaj fajl i izvrsi komanda iza await
    //AWAIT iskljucivo u asinhronoj funkciji
   // console.log(response);

   /*
   moze i ovako nesto sta god... kad ispitujemo status npr.
   if(response.status != 200){
    throw new Error("Ne mogu da dohvatim podatke"); //novi objekat error
   }
   else{
    let data = await response.json();
   }
   */
    let data = await response.json(); // response.json() vraca promise

    //Sa ovim delom krece kad su izvrsene prethodne linije u potpunosti
    response = await fetch("../JSON/fruits.json");
    data = await response.json(); //ovde dobija vrednost poslednjeg, dakle fruit
    return data; // vracam promise, sto znaci da cu za njega morati da radim .then i .catch
}

console.log(1);
console.log(2);
getTodos().then( data=>{
    console.log("resolved",data);
}).catch(err=>{
    console.log("rejected", err);
})
console.log(3);
console.log(4);
/*
--ili ovako-- iskljucivo kad imamo jednu liniju
getTodos()
    .then(data => conslole.log("resolved", data))  //ne sme ; ovde
    .catch(err => conslole.log("rejected", err));
*/