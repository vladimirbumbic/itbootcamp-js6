//DOM
let ulZadaci = document.querySelector("ul");
let lizadaci = document.querySelectorAll("li");
let inputNoviZadatak = document.querySelector("#unesi");
//let btnDodaj = document.querySelector("#dodaj");
let radioDodajNaPocetak = document.querySelector("#dodajNaPocetak")

// 1. NACIN
// Kada dodamo novi LI nece raditi, jer taj novi LI nece imati event listener koji je vezan za njega
/*lizadaci.forEach(li=>{
    li.addEventListener("click", (e)=>{
        console.log(e);
        console.log(e.target);
        e.target.remove();  skida sve. Ako kliknemo izmedju lijeva, skine ceo ul
    });
});
*/

// 2. NACIN
ulZadaci.addEventListener("click", e=>{
    console.log("Kliknuto na ul");
    //console.log(e);
    if(e.target.tagName == "LI"){
        console.log("Kliknuto na LI");
        e.target.remove(); 
    }
    //e.target.remove(); 
});


/*btnDodaj*/ inputNoviZadatak.addEventListener(/*"click"*/ "keyup", e=>{
    if(e.keyCode == 13){ //13 je enter
      //  console.log(radioDodajNaPocetak.checked);
      let noviZadatak = inputNoviZadatak.value;

      if(noviZadatak=="" || noviZadatak == null){
          alert("Morate uneti novi zadatak");
      }
      else{
        let liNovizadatak = document.createElement("li");
        liNovizadatak.textContent = noviZadatak;
        if(radioDodajNaPocetak.checked/*==true*/){
          ulZadaci.prepend(liNovizadatak);
        }
        else{
          ulZadaci.appendChild(liNovizadatak);
       }
     }
    inputNoviZadatak.value="";
 }
});
