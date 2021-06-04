let lista = document.querySelectorAll("li");

lista.forEach(li=>{
    li.addEventListener("click", ()=>{
        if(li.style.textDecoration == "line-through"){
            li.style.textDecoration = "none";
        }
        else{
            li.style.textDecoration = "line-through";
        }
    });
});

/*let elementiListe = document.querySelectorAll(".mojaLista li");

  elementiListe.forEach(li=>{
    li.addEventListener("click", ()=>{
        li.classList.toggle("precrtano");
     });
  });
*/