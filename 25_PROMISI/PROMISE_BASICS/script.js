let getSOmething = ()=>{
    return new Promise((resolve, reject)=>{
       // resolve("Nesto resolve...");
        reject("Nesto reject...");
    });

    /*
    --ili ovako-- umesto  return new Promise();

    let obj = new Promise();
    return obj
    */
}
// console.log(getSOmething());  otkomentarisi vidi

//getSomething vraca resolve ili reject
//Ako vrati resolve onda se izvrsava then grana
getSOmething().then(data =>{
    console.log(data);
}).catch( err=>{
console.log(err);
});