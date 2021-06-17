// Dohvatanje JEDNOG dokumenta iz kolekcije
/*db.collection("customers").doc("customer-01")
.get()
.then(doc=>{
    console.log(doc);
    if(doc.exists){
        let t = doc.data(); //data je metoda  t je objekat koji odgovara sadrzaju dokumenta koji postoji
        console.log(t);
    }
    else{
        console.log(`No document with id: ${doc.id}`)
    }
})
.catch(err=>{
    console.log(`Desila se greska: ${err}`);
});

// Dohvatanje SVIH dokumenata iz kolekcije
db.collection("customers")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});

// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
db.collection("users")
.orderBy("surname", "asc")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/
// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
// (Isto kao i malopre, samo se sortira po vise polja)
/*db.collection("users")
.orderBy("surname", "asc")
.orderBy("name", "asc")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje ogranicenog broja dokumenata iz kolekcije
/*db.collection("users")
.orderBy("surname", "asc")
.orderBy("name", "asc")
.limit(2) //moze limit i kad se zakomentarisu oba .orderBy
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove(filtriranje dokumenata)
/*
// Dohvati sve korisnike mladje od 30 godina
db.collection("customers")
.where("age", "<", 30)
//.orderBy("age", "asc") 
//.orderBy("name", "desc")
//.limit(2)
//---where i orderBy mogu da se kombinuju po razlicitim poljima, ali to povlaci--
// 1. Da se sva polja navedena u where nalaze i u orderBy
// 2. Da postoji kompozitni index za sva polja i redoslede navedene u orderBy
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike cija je adresa u Nisu
/*db.collection("customers")
.where("addresses", "array-contains", "Beograd")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji imaju 25 ili 31 godinu
/*db.collection("customers")
.where("age", "in", [25,31])
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve koji se zovu Pera ili Mika
/*db.collection("customers")
.where("name", "in", ["Pera","Mika"])
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Dohvatit sve korisnike koji zive u Nisu ili Loznici
/*db.collection("customers")
.where("addresses", "array-contains-any", ["Nis","Loznica"])
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
/*
db.collection("customers")
.orderBy("name", "asc")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije customers, pročitati sve klijente koji:
//Imaju adresu u Nišu,
/*
db.collection("customers")
.where("addresses","array-contains", "Nis")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

// Imaju platu veću ili jednaku od 500,
/*
db.collection("customers")
.where("salary",">=", 500)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/


//Imaju platu između 300 i 800,
/*
db.collection("customers")
.where("salary",">=", 300)
.where("salary","<=", 800)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/


//Imaju platu manju od 900, i imaju 30 godina,
/*
db.collection("customers")
.where("salary","<", 900)
.where("age", "==", 30) //dolazi do kreiranja indeksa jer su razliciti whereovi-salary-age
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Imaju adresu u Nišu ili Beogradu,
/*
db.collection("customers")
.where("addresses","array-contains-any", ["Nis","Beograd"])
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Imaju 22, 25 ili 28 godina.
/*
db.collection("customers")
.where("age","in", [22,25,28])  //in je za prosta polja, ne za nizove, za sta ide array-contains-any
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
/*
db.collection("tasks")
.orderBy("title")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije tasks, pročitati sve zadatke, i koji:
//Su prioritetni,
/*
db.collection("tasks")
.where("priority", "==", true)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Treba da se izvrše u tekućoj godini,
/*
let sada=new Date();
let godina=sada.getFullYear();
let datum1=new Date(godina, 0, 1); //Prvi januar tekuce godine
let datum2=new Date(godina+1, 0, 1); //Prvi januar sledece godine

//let datum1=new Date("2021-01-01")
//let datum2=new Date("2021-12-31")
db.collection("tasks")
.where("due_date", ">=", datum1)
.where("due_date", "<", datum2)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/


//Su završeni,
/*
let datum3=new Date("2021-06-20")
let datum = new Date()
db.collection("tasks")
.where("due_date", "<", datum3) //datum
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/
//Tek treba da počnu.
/*
let datum4=new Date("2021-06-14 09:30:00")
let datum = new Date()
db.collection("tasks")
.where("start_date", ">", datum4) //datum
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/


//Iz kolekcije movies, pročitati sve filmove:
//Koje je režirao George Lucas,
/*
db.collection("movies")
.where("Director.ime", "==", "Frank")
.where("Director.prezime", "==", "Darabont")
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Čija je ocena između 5 i 10,
/*
db.collection("movies")
.where("Rating", ">=", 5)
.where("Rating", "<=", 10)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Kojima je žanr komedija, tragedija ili drama,
/*
db.collection("movies")
.where("Genres","array-contains-any", ["Comedy","Tragedy", "Drama"])
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Koji su izašli u 21. veku.
/*
db.collection("movies")
.where("Release_year",">=", 2001)
.where("Release_year","<=", 2100)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Prikazati sve informacije o najbolje rangiranom filmu.
/*
db.collection("movies")
.orderBy("Rating", "desc")
.limit(1)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/

//Prikazati sve informacije o najslabije rangiranoj drami.
/*
db.collection("movies")
.orderBy("Rating", "asc")
.limit(1)
.get()
.then(documents=>{
    documents.forEach(doc => {
        let t = doc.data();
        let id= doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`Error: ${err}`);
});
*/