console.log(db);

// Pristup kolekciji
let coll1 = db.collection("customers");
console.log(coll1);

// Pristup dokumentu
let doc1 = coll1.doc("customer-01");
console.log(doc1);

let doc2 = db.doc("customers/customer-02");
console.log(doc2);

/*
Za pristup dokumentu:
let doc = db.collection("...").doc("...");
Kod dokumenata imamo sledece metode:
 CRUD (Create, Read, Update, Delete)
 doc.set(...)    ->   Create
 doc.get(...)    ->   Read
 doc.update(...) ->   Update
 doc.delete(...) ->   Delete

Sve 4 metode kao rezultat vracaju PROMISE
Nakon poziva potrebno je lancati
.then() i .catch()

*/


// 1. Create
let c3 = {
    name: "Mika",
    age: 38,
    addresses:["Loznica", "Cacak"],
    salary: 406.23
}; //JS objekat -> na osnovu njega zelimo dokument u bazu

db.collection("customers").doc("customer-03")
.set(c3)
.then(function(){
    console.log("Uspesno dodat dokument u kolekciju customers");
})
.catch(function(error){ //ne mora error, kao gore kod then
    console.log(`Greska prilikom dodavanja dokumenta: ${error}`)
});

let date1 = new Date("2021-06-15 11:15:00");
let date2 = new Date("2021-06-15 13:00:00");

db.collection("tasks").doc("task-02")
.set({
    title: "Voznja bicikla",
    start_date: firebase.firestore.Timestamp.fromDate(date1),
    due_date: date2,
    priority: false,
    description: " Rekreacija pred cas ITBootcamp"
}, {merge:true}) //ovde nije ni trebao merge, jer smo kreirali novi objekat, a ne dodavali u postojeci
.then(()=>{
    console.log("Uspesno dodat dokument");
})
.catch(err=>{
    console.log(`Greska: ${err}`);
});

