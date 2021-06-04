const request = new XMLHttpRequest();
/*
request.addEventListener("readystatechange", ()=>{ // u principu dovoljno samo ==4
    //console.log(request);
    if(request.readyState==1){
        console.log("Uspostavljena konekcija!");
    }
    else if(request.readyState==2){
        console.log("Poslat zahtev serveru!");
    }
    else if(request.readyState==3){
        console.log("Odgovor je u statusu preuzimanja!");
    }
    else if(request.readyState==4){
        console.log("Preuzet je odgovor sa servera u potpunosti"); 
        console.log(request.responseText);  
    }
});
*/

request.addEventListener("readystatechange", ()=>{
    if(request.readyState===4 && request.status===200){ //ako je ovo, izvrsava se
        let odgovor = request.responseText; //odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor);
       // console.log(odgovor);
        console.log(odgovorJS);
    }
    else if(request.readyState===4){
        console.log("Nemoguce dobiti odgovor od servera!") //ako pogresno napisemo ovaj url dole
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users/4");  // uspostavljanje konekcije(0->1)
request.send(); // slanje HTTP zahteva (1->2)   //zakomentarisi ovo pa vidi konzolu


console.log("Nesto posle 1");
console.log("Nesto posle 2");