// -----------------ATAMA OPERATÖRLERİ-------------

/*
   = :atama operatörüdür.
   == : eşittir anlamına gelmektedir
   ===
   +=
   *=
   /=
   %=
   **=
*/

// let a = 5;

console.log(5 == 5); //consolda true çıktısı alınır -boolean veri tipi

console.log(5 == 4); //consolda False çıktısı alınır- boolean veri tipidir

let a = 5;
let b = 10
let sonuc = a + b;
console.log(sonuc == 15); //consolda true çıktısı alınır 15 15'e eşittir.


//! aşşağıdaki ifade de çıktı alınırken == operatörü veritiplerinin önemi yoktur.

console.log(3 == "3") // true çıktısı alınır

//! === operatöründe hem veri tiplerinin hemde değerinin eşit olup olmadığına bakar.

console.log(5 === 5); //consolda true çıktısı alınır
console.log(5 === "5"); //consolda false çıktısı alınır çünkü ifadelerin biri string biri number cinsinden

//    let sayi = 4;
//     sayi = sayi + 2 
//    sayi +=2 ; // üsteki ifadeyle aynı anlama gelmektedir. 
//    console.log(sayi); //consolde çıktı 6 olur 

//    let sayi = 4;
//    sayi = sayi - 3
//    sayi -=3 ; // üsteki ifadeyle aynı anlama gelmektedir. 
//    console.log(sayi); //consolde çıktı 1 olur 

//    let sayi = 4;
//    sayi = sayi *5
//    sayi *=5 ; // üsteki ifadeyle aynı anlama gelmektedir. 
//    console.log(sayi); //consolde çıktı 20 olur

// let sayi = 12;
// sayi = sayi / 4
// sayi /= 4; // üsteki ifadeyle aynı anlama gelmektedir. 
// console.log(sayi); //consolde çıktı 3 olur



// let sayi = 12;
// sayi = sayi % 5
// sayi %= 5; // üsteki ifadeyle aynı anlama gelmektedir. 
// console.log(sayi); //consolde çıktı 2 olur


let sayi = 4;
sayi = sayi ** 2
sayi **= 5; // üsteki ifadeyle aynı anlama gelmektedir. 
console.log(sayi); //consolde çıktı 16  olur






