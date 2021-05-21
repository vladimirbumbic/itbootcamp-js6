let blog={
    title: "Objekti",
    content: "Ovo su objekti...",
    author: "Jelena"
};
console.log(blog);
console.log(typeof blog);

/*
Proveriti tip bilo koje promenljive
let x=5;
console.log(typeof x);
*/

//Pristup osobini/propertiju u objektu
console.log(blog.title);
console.log(blog[`content`]);

//Izmena jedne osobine/propertija u objektu
blog.content="Objekti su slozeni tipovi podataka";
console.log(blog.content);

blog["author"]="Jelena Matejic";
console.log(blog["author"]);

//////////////////////////////////////////////////////

let user={
    username:"John",
    age:32,
    blogs:["Minimum", "Maksimum", "Average"],
    login: function(){      // funkcija u objektu se zove metod
        console.log("Ulogovani ste!");
    },
    logBlogs:function(){
       // console.log(this.blogs);//kad u objektu prostupamo sopstvenim propertijima-this-
       this.blogs.forEach(blog=>{ //umesto blog- elem=> console.log(elem)
            console.log(blog);
       });
    },
    racunaj:function(x,y){
        console.log(x+y);
    },
    test:function(){
        console.log(this);
    }
};

console.log(user);
user.login();
user.logBlogs();
user.racunaj(3,5);
user.test(); //Daje informacije o objektu u kom se nalazi
console.log(this);

