// var - let - const

// Değişken nedir?

/*


int , string, double , float , bloean 

int degiskenIsmi = deger;
int yas = 23;
  Eskiden kullanılan bir yöntem
 */

/*

var/let/const degiskenIsmi = degiskenDegeri;

let sayi = 10;

*/

//  var : function Scope oluyor  - - ram bellekte çok fazla yer kaplıyor.
// let/const : block Scope özelliğine sahiptir

// function selamVer(){
//     var selam = " Herkese Selam"; // Function Scope
//     if(true){
//         var b = 10;
//         let c = 12;
//         console.log(c); 
//         const d = 18
//         console.log(d);
//     }
//     console.log(selam);
//     console.log(b);
// }

// selamVer();

var a = 5;
var a = 10;
console.log(a); //consolda en alttaki yansıltılır.

if(true){
    let a = 5;
    let b = 10; // consolde hata veriliyor aynı değişken ismi iki kere tanımlanamıyor.
    console.log(a);
}

//LET & COST arasındaki fark ?


//const (constrant) : sabit , değişmez

const a = 5;
a = 15;
console.log(a);  //consolda hata veriri ortaya bir değer çıkmaz


let b = 5;
b = 7;
b = 12 ;
console.log(b); // en sondaki değer consola yansıtılır.


const user = {
    username :"Ayse",
    password: "123"
}

user.username ="ayseulker";  // constan sonra yazılan user değiştirilemez, console da hata alınır. {} parantezden sonra yazılan değişekneler console yazılabilir. 

console.log(user);
