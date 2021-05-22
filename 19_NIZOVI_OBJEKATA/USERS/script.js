let blog1={
    title:"HTML",
    likes:50,
    dislikes:3
};
let blog2={
    title:"CSS",
    likes:170,
    dislikes:105
};
let blog3={
    title:"JS",
    likes:205,
    dislikes:110
};

let user1 ={
    username:"Stefan",
    age:31,
    blogs:[blog1, blog2, blog3],
    logBlogs:function(){
        this.blogs.forEach(elem=>{
            console.log(elem.title);
        });
    },
    sumLikes:function(){
        let sum =0;
        this.blogs.forEach(blog=>{
            sum+= blog.likes;
        });
        return sum;
    }
};

user1.logBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user2={
    username:"Jelena",
    age:26,
    blogs:[blog2, blog3],
    sumLikes:function(){
        let sum =0;
        this.blogs.forEach(blog=>{
            sum+= blog.likes;
        });
        return sum;
    }
};

let user3={
    username:"Milena",
    age:14,
    blogs: [blog1],
    sumLikes:function(){
        let sum =0;
        this.blogs.forEach(blog=>{
            sum+= blog.likes;
        });
        return sum;
    }
};

let users =[user1, user2, user3];

// Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(elem=>{
    let godine=elem.age;
    if(godine< 18){             //ili  elem.age<18
        console.log(elem.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(elem=>{
    let userBlogs=elem.blogs; // Izdvojimo niz blogova tekuceg korisnika
    userBlogs.forEach(blog=>{
        if(blog.likes>50){
            console.log(blog.title);
        }
    });
});

//Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach(user=>{
    if(user.username=="Milena"){
        user.blogs.forEach(blog=>{
            console.log(blog.title, user.username);
        });
    }
});

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
//1. nacin
users.forEach(user=>{
    let userBlogs=user.blogs;
    let sumLikes=0;
    userBlogs.forEach(blog=>{
        sumLikes+=blog.likes;
        console.log(blog.likes); //50+170+205-s... 170,205-j... 50,170-m
    });
    if(sumLikes>100){
        console.log(user.username);
    }
});

//2. nacin
//ubacujemo metode u user1-2-3
users.forEach(user=>{
    if(user.sumLikes()> 100){
        console.log(user.username);
    }
    });

//3. nacin
let sum=blogs=>{
    let s =0;
    blogs.forEach(blog=>{
        s+=blog.likes;
    });
    return s;
}
users.forEach(user=>{
    let userBlogs=user.blogs;
    let likes=sum(userBlogs);
    if(likes>100){
        console.log(user.username);
    }
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let avgGeneral; //Prosecna ocena u odnosu na sve blogove svih korisnika. Moze i da se stavi let avgGeneral=0;
let sumGeneral = 0;
let countGeneral = 0;
//1. nacin odredjivanja proseka
users.forEach(user=>{
    user.blogs.forEach(blog=> { //uzmemo blogove korisnika i krecemo se kroz njih
        sumGeneral+=blog.likes;
        countGeneral+=1;
    });
});
avgGeneral = sumGeneral / countGeneral;  //odredjujemo prosek svih blogova korisnika
console.log(avgGeneral);

//2. nacin iskoriscavanje sumLikes od gore
/*user.forEach(user=>{
    sumGeneral+= user.sumLikes() // sumLikes od S, J i M
    countGeneral +=user.blogs.length;
});
avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);
*/
users.forEach(user=>{
    user.blogs.forEach(blog=>{
        if(blog.likes>avgGeneral){
            console.log(blog.title);
        }
    });
});
