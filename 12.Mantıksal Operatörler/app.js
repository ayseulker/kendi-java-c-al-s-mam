// -----------------MANTIKSAL OPERATÖRLER-------------

/*
    && : ve
    || : veya
    ! : değil - birşeyin zıttını alır 

*/

// && operatöründe Birden fazla koşul vardır ve her koşulu sağlamalıdır.

//Yaşınız 18'den büyükse VE 3000 TL para olması  VE Sağlığınızın yerinde olması

let yas = 20;
let para = 3500
let sagliklimi = false;
let hakSayisi = 3;

console.log(yas>18 && para>3000 && sagliklimi==true); //consolda false çıkar
console.log(yas>18 && para>3000 || sagliklimi==true); //consolda True çıkar


console.log(5>3 && 2<1); //consolda false çıkar
console.log(5>3 || 2<1); // consolda true çıkar

console.log( !(5>3) ) ; //consolda ifade true olmasına rağmen false çıkar.

console.log((hakSayisi>1 && para>3000) || (yas>18 && sagliklimi) ); // consolda birisi true olduğu için true çıkar

