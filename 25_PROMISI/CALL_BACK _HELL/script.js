let getTodos = (resource, callback) =>{ // prosledjujemo
    // 1. Kreiranje XML objekat
let request = new XMLHttpRequest();

request.addEventListener("readystatechange",()=>{
    if(request.readyState==4 && request.status==200){
        //Aok je sve OK
        //console.log(request.responseText);
        callback(request.responseText, undefined); // pozivamo (to je za "data" i "error")
    }
    else if(request.readyState===4){
        //console.log("Ne mogu da dohvatim podatke");
        callback(undefined, "Ne mogu da dohvatim podatke"); // pozivamo (data, err)
    }
});

// 2. Otvaranje kreiranog zahteva
request.open("GET", resource)

// 3. Saljemo request
request.send();
}

//getTodos("../JSON/todos.json", ()=>{});  dva parametra, string i funkcija

//CALLBACK HELL
getTodos("../JSON/todos.json",(data, err)=>{
    console.log("Callback okinuta");
    // Ako je err==true, ispisati tu gresku
    if(err/*==true*/){
        console.log(err); // Ispisuje gresku
    }
        else{
            console.log(data); //Ispisuje podatke sa kojim mozete dalje da raspolazete
            // Nakon sto se ucita todos.json, neka se ucita fruits.json
            getTodos("../JSON/fruits.json", (data, err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    // Nakon sto se ucita fruits.json, ucitati vegetables.json
                    getTodos("../JSON/vegetables.json", (data,err)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log(data);
                            getTodos("../JSON/cereals.json", (data,err)=>{
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    console.log(data);
                                }

                            });
                        }
                    });
                }
            });
        }

});
console.log("Kraj");