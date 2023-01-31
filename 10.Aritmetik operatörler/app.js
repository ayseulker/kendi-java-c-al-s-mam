// ARİTMETİK OPERATÖRLER

/*------------------------> = atama operatörü önemli  !
    +
    _
    *
    /
    %
    ++
    --
    **
*/

// let a =5; // buradaki matematikteki eşittir operatörü değildir atama operatörüdür.

// let isim = "Enes";

// string + number  stringnumber şeklinde çıktı alınır.

// let not1 = 60;
// let not2 = 70;
// console.log(not1+not2); //consoleda çıktı 130 olarak  gözükür.

// console.log("Notlarınızın toplamı": +not1+not2) // parantez olmadığı için consolda çıktı notlarınızın toplamı:6070 şeklimde gözükür.
// console.log("Notlarınızın toplamı": +(not1+not2)) // parantez olduğu için consolda çıktı notlarınızın toplamı:130 şeklimde gözükür.


// let sayi1 = "5";
// let sayi2 = 2;

// console.log(sayi1 + sayi2); //consolda çıktı 52 olarak görülür.

// let sayi1 = 5;
// let sayi2 = 2;

// console.log(sayi1 + sayi2); // consolda çıktı 7 olur


// let not1 = 100;
// let not2 = 70;
// console.log(not1-not2); // consolde çıktı 30'dur

//! değişken ismi birleşik yazılmalıdır. ve ü,ö,ş, i, ğ kullanılmamalıdır.

// let sayi1 = 5;
// let sayi2 = 10;

// console.log(sayi1*sayi2);  // consolda 50 çıktısı alınır

let not1 = 100;
let not2 = 70;

let sonuc = (not1+not2)/2;
console.log(sonuc); // consolde çıktı 85 olur

//! % mod alma operatörüdür. bir sayıyı bir sayıya böldüğümüzde kalanı bulmamıza yardımcı olur.

/*

10/3 = kalan 1
12/5 = kalan 2


*/

console.log(10%3); //consolda çıktı 1 olur
console.log(12%5); //consolda çıktı 2 olur

//! ++ operatörü 1 arttırmak için kullanılır  -- operatörü 1 eksiltmek için kullanılır.

let a = 10;
a++; //11
a++; //12
a--; //11
a--; //10
console.log(a);

//! ** : 2^3 = 8  yani 2 üzeri 3 çıktısını almak için kullanılır.


console.log(5**3); //consolda çıktı 125
console.log(5*3); //consolda çıktı 15 olur