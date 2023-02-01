/*
    -------------------------TÜR DÖNÜŞÜMLERİ (DATA TYPES)---------------------
    strings, numbers , boolean , undefined and null //! primitive(ilkel) Veri Tipi
    object , function  //! Referans (Gelişmiş) Veri Tipi
*/

//? veri tabanından aldığımız değerin stringden>numbera veya numberdan>stringe ihtiyaç doğrultusunda döüştürülmesine denir.

// let a = 5;
// let b = Number ("10");
// console.log(a+b); //consolda çıktı 15 olur.

// String veri tipinden number veri tipine dönüştürmek
//let a = 5;
//let b = "10"; 
//let c = Number(b);
// console.log(typeof c) // consolda veri tipi number çıkar
// console.log(a+c); // consolda 15 ifadesi çıkar


//! parsInt() ve parsFloat fonksiyonlarr string ifadeyi numbera değiştitir. 
//!parsInt sayının noktadan önceki kısmını yazdırır. parsFloat sayının tamamını yazdırır.

//console.log(window): // windowun alt objelerindedir.

// let a = 8;
// let b =parseInt("12.5") // consolda 12 çıktısı alınır
// let c =parseFloat("12.5") // consolda 12.5 çıktısı alınır

//!.toString numberdan string ifadeye değiştirilmesine yardımcı olur.

// let x = String(55);
// let y = (55).toString;
// console.log(typeof x) // consolda string
// console.log(x) // 55
// console.log(typeof y) // consolda string
// console.log(y) // 55

// let sonuc = String (true);
// console.log(typeof sonuc) // consolda string
// console.log(sonuc) // True


// let a = Number("B");
// console.log(a) // Consolda NaN (Not a Number) ifadesi çıkar yani 1 sayı değildir.

// let rakamlar = String([1,2,3,4]); //! object ten stringe çevrilir
// console.log(typeof rakamlar); // consolda string
// console.log(rakamlar); // 1,2,3,4

let rakamlar = Number([1,2,3,4]); //! object (dizi(array)) ten numbera çevrilemez 
console.log(typeof rakamlar); // Consolda NaN (Not a Number) ifadesi çıkar yani 1 sayı değildir.
console.log(rakamlar); // NaN çıktısı alınır

