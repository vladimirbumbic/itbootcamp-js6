let getTodos = resource =>{ // prosledjujemo
    // 1. Kreiranje XML objekat
let request = new XMLHttpRequest();


// 2. Otvaranje kreiranog zahteva
request.open("GET", resource)

// 3. Saljemo request
request.send();

return new Promise( (resolve, reject)=>{ //new -pravi novi objekat
    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
            //Aok je sve OK
            //console.log(request.responseText);
            //callback(request.responseText, undefined); // pozivamo (to je za "data" i "error")
            resolve(request.responseText); //kolbek f-ja
        }
        else if(request.readyState===4){
            //console.log("Ne mogu da dohvatim podatke");
            //callback(undefined, "Ne mogu da dohvatim podatke"); // pozivamo (data, err)
            reject("Ne mogu da dohvatim podatke"); //kolbek f-ja
            }
        });
    });
}

getTodos("../JSON/fruits.json").then(data=>{
    console.log("Promise fruits resolved", data);
   return getTodos("../JSON/vegetables.json");
}).then(data=>{
    console.log("Promise vegetables resolved", data);
    return getTodos("../JSON/cereals.json")
}).then(data=>{
    console.log("Promise cereals resolved", data)
}).catch(err=>{
    console.log("Promise rejected", err);
    
});

console.log("Kraj");