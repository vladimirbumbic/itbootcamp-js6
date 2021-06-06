/*export*/ let ime = "Stefan";  //moze i ovako pojedinacno export, ili dole linija 12

function ispis(poruka){
    console.log(poruka);
}

/*export*/ function zdravo(ime){ //ovo ime je parametar i nema veze sa globalnom promenljivom ime od let ime=Stefan
    ispis(ime);
}

//Nudim promenljivu ime i funkciju zdravo
export{ime, zdravo};