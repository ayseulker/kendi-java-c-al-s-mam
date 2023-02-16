
// DEĞER VE REFERANS TİPLER

//! Değer Tipler (primitive(ilkel)veri tipleri : string-number-boolean-undifined-null-symbol)

//? referans tipler (Referece(ilkel olmayan) veri tipleri : object-array-Function)

//referans veri tipleri örnekler

let dizi = [1,2,3,4];

let obje ={
    name:"Ayşe",
    password: "fhjskjfkds",
}


//todo Referans ve değer tipleri arasındaki fark ram bellekte değer tipler stack bölümünde depolanır,  referans heap bölümünde depolanır. 
//todo Değer tiplerde değişkenler birbirini etkilemez bağımsız olarak çalışır


let a = 5;
let b = a; 

console.log("a :" + a); // consolda a:5 
console.log("b :" + b); // consolda b:5

console.log("-----------------------");

b = 10;

console.log("a :" + a); // consolda a:5 
console.log("b :" + b); // consolda b:10



/*
let dizi1 = [1,2,3];
let dizi2 = dizi1; // bu şekilde tyazarak aynı referansa ulaşılır.
let dizi3 = [1,2,3];

console.log(dizi1); // 1, 2, 3
console.log(dizi2); //1, 2, 3
console.log(dizi3); // 1, 2, 3

if(dizi1==dizi2){
    console.log("Eşittir");
}else{
    console.log("Eşit değildir.") ;
} // consolda eşittir çıktıısı alınır.


if(dizi1==dizi3){
    console.log("Eşittir");
}else{
    console.log("Eşit değildir.") ;
} // consolda eşit değildir çıktıısı alınır.

.//?? referans veri tiplerinde değerlerin eşit olup olmadığına bakmaz o yüzden değerin bir önemi yoktur.

*/

/*
let dizi1 = [1,2,3];
let dizi2 = dizi1;

dizi2.push(12);

console.log(dizi1); // consolda 1, 2, 3, 12 çıktısı alınır
console.log(dizi2); // consolda 1, 2, 3, 12 çıktısı alınır

.//! referans veri tiplerindebirbirlerini etkilerler. biz değişliği dizi2 üzerinden yapsakta dizi1 de etkileniyorlar
*/

let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 = dizi2;

dizi3.push(7);
dizi2.push(8);

console.log(dizi1); // consolda 1, 2, 3, 7 ,8 çıktısı alınır
console.log(dizi2); // consolda 1, 2, 3, 7 ,8 çıktısı alınır
console.log(dizi3); // consolda 1, 2, 3, 7 ,8 çıktısı alınır