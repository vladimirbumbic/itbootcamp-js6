let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            //console.log(request.responseText);
            let data = JSON.parse(request.responseText); // sa ovim string postaje objekat
            func(data);
        }
        else if (request.readyState == 4) {
            console.log("Could not fetch data");
        }

    });
    request.open("GET", resource);
    request.send();
}

let click1 = event =>{
event.preventDefault(); // da se ne submituje forma
let capacity = inputOrder.value; //ovo samo da vidimo da li forma radi
console.log(capacity);//

let itemsNoStock = [];
getItems("json/stock.json", data => {
    //Logika da se dohvate objekti koji nisu na stanju
    //console.log(data);
    data.forEach(item => { //za svaki artiklal u stock.json
        if (item.stock == 0) {
            itemsNoStock.push(item.id); //previse da se sastoji iz objekata, da pusujemo ceo objekat, pa mu stavimo samo njegov id
            //to su id-ovi onih koje nemamo na stanju tj. stock=0
        }
    });
    //console.log(itemsNoStock);
    getItems("json/weights.json", data => {
        //Logika za tezine artikala
        //console.log(data);
        let totalWeight = 0;
        data.forEach(item => {
            //Da li niz itemsNoStock sadrzi itemsNoStock.id
            if (itemsNoStock.includes(item.id)) {
                //Potrebna je tezina artikla
                //pa gore dodajemo totalWeight
                totalWeight += item.weight;
            }
        });
        //console.log(totalWeight); // tezina svih koji nisu na stanju
        if (totalWeight > capacity) { //vecaod kapaciteta kamiona
            let pMessage = document.createElement("p");
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "24px";
            pMessage.textContent = "Not enought capacity in truck";
            //  ili ovako ---pMessage.innerHTML...
            divOrder.appendChild(pMessage);
            //posto je 35, kad upisemo broj manji od 35 u input polje izbacice poruku
        }
        else {
            getItems("json/prices.json", data => {
                //Logika za cene artikala
                //console.log(data);
                let totalPrice = 0;
                data.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        totalPrice += item.price;
                    }
                });
                let pMessage = document.createElement("p"); //moze isto pMessage jer let vazi u bloku gde je definisan
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = `Total order price : ${totalPrice}RSD`
                divOrder.appendChild(pMessage);
            });
        }
    });
});
}

//Funkcija click1 je tacna ali neprakticna jer je kolbek hel

//formOrder.addEventListener("submit", click1);

/////////////////////////////////////////////////////////////////////
// Promis je objekat koji ceka asinhroni poziv
// Zahvaljujuci njemu postoje then() i catch() metode
function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject)=>{
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
               
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState == 4) {
                reject("Could not fetch data");
            }
    
        });
        request.open("GET", resource);
        request.send();
    });
   
}
// formOrder.addEventListener("submit", click2=(event)=>{;  ili ovako
let click2= event =>{
    event.preventDefault();
    //let tabela=document.createElement("table");
    //divOrder.appendChild(tabela);
    let capacity = inputOrder.value;
    let itemsNoStock =[];
    getItemsReturnPromise("json/stock.json")
    .then((data)=>{
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        return getItemsReturnPromise("json/weights.json");
    })
    .then(data=>{
        let totalWeight = 0;
        data.forEach(item => {
            //Da li niz itemsNoStock sadrzi itemsNoStock.id
            if (itemsNoStock.includes(item.id)) {
                //Potrebna je tezina artikla
                //pa gore dodajemo totalWeight
                totalWeight += item.weight;
            }
        });
        //console.log(totalWeight); // tezina svih koji nisu na stanju
        if (totalWeight > capacity) { //vecaod kapaciteta kamiona
            let pMessage = document.createElement("p");
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "24px";
            pMessage.textContent = "Not enought capacity in truck";
            //  ili ovako ---pMessage.innerHTML...
            divOrder.appendChild(pMessage);
            //posto je 35, kad upisemo broj manji od 35 u input polje izbacice poruku
        }
        else{
            return getItemsReturnPromise("json/prices.json");
        }
    })
    .then(data=>{
        if(data !== undefined){ //zato sto...
        let totalPrice = 0;
        let tabela=document.createElement("table");
        divOrder.appendChild(tabela);
                data.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        let red = document.createElement("tr");
                        let kolona = document.createElement("td");
                        kolona.textContent=item.item;
                        let kolona2= document.createElement("td");
                        kolona2.textContent=item.price;
                        red.appendChild(kolona);
                        red.appendChild(kolona2);
                        tabela.appendChild(red);
                        totalPrice += item.price;
                    }
                });
                let red2=document.createElement("tr");
                let kolona3=document.createElement("td");
                let kolona4=document.createElement("td");
                kolona3.textContent="UKUPNO";
                kolona4.textContent=totalPrice;
                red2.appendChild(kolona3);
                red2.appendChild(kolona4);
                tabela.appendChild(red2);
                tabela.setAttribute("border", "9");
               // let pMessage = document.createElement("p"); //moze isto pMessage jer let vazi u bloku gde je definisan
                //pMessage.style.fontWeight = "bold";
                //pMessage.style.fontSize = "24px";
                //pMessage.textContent = `Total order price : ${totalPrice}RSD`
                //divOrder.appendChild(pMessage);

                
            }
    })
    .catch((error)=>{
        console.log(error);
    })
} //);
   
//formOrder.addEventListener("submit", click2);

async function clickGetItems(){
    let data1 = await getItemsReturnPromise("json/stock.json");
    let capacity = inputOrder.value;
    let itemsNoStock = [];
        data1.forEach(item => {
            if(item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
    let data2 = await getItemsReturnPromise("json/weights.json");
    let totalWeight = 0;
        data2.forEach(item => {
            //Da li niz itemsNoStock sadrzi item.id
            if(itemsNoStock.includes(item.id)) {
                totalWeight += item.weight;
            }
        });
        //console.log(totalWeight);
        let pMessage = document.createElement('p');
        if(totalWeight > capacity) {            
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "24px";
            pMessage.textContent = "Not enough capacity in truck!!";
        }
        else {
            let data3 = await getItemsReturnPromise("json/prices.json");
            let totalPrice = 0;
            data3.forEach(item => {
                if(itemsNoStock.includes(item.id)) {
                    totalPrice += item.price;
                }
            });
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "24px";
            pMessage.textContent = `Total order price: ${totalPrice}RSD`;            
        }        
        return pMessage;
}
let click3 = event => {
    event.preventDefault();
    clickGetItems()
    .then(para => {
        divOrder.appendChild(para);
    })
    .catch(err => {
        console.log(err);
    });
}
formOrder.addEventListener("submit", click3);