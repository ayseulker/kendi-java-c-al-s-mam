

/*function push(let value){
    //! elindeki diziyle value ekliyor.
    return length;
}
*/

//? PUSH METOT-Dizinin sonuna eleman ekleme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar.length); // consolda 5 çıktısı alınır
/ arabalar.push("opel"); // dizinin sonuna opel adlı 5. index eklenir.

let diziUzunluk = arabalar.push("opel");
console.log(diziUzunluk); //consolda 6 çıktısı alınır
*/

//? UNSHİFT METOT -Dizinin başına eleman ekleme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];

arabalar.unshift("hundai");
console.log(arabalar); //consolda hundai, bmw,toyota,renault, mercedes, porsche çıktısı alınır.
*/

//? POP METOT - Dizinin sonunda eleman silme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.pop();
console.log(arabalar);//consolda bmw, toyota, renault, mercedes çıktısıs alınır.

let uzunluk = arabalar.pop();
console.log(uzunluk); //consolda 4 çıktısı alınır.
let silinenEleman = arabalar.pop();
console.log(silinenEleman); //consolda porshe çıktısı alınır.
*/

//? SHİFT METOT - Dizinin başından eleman silme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.shift();
console.log(arabalar); // condolda toyota, renault, mercedes,porsche çıktısı alınır.
let silinenEleman = arabalar.shift();
console.log(silinenEleman);// consolda bmw çıktısı alınır.
*/

//? SPLİCE METOT - Diziye istediğimiz yere ekleme çıkarma yapılabilir.

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar);  //consolda bmw,toyota, renault, mercedes,porsche çıktısı alınır.
arabalar.splice(0,0,"hundai");
console.log(arabalar); //consolda hundai, bmw,toyota, renault, mercedes,porsche çıktısı alınır.

arabalar.splice(2,0,"hundai");
console.log(arabalar);//consolda bmw,toyota, hundai, renault,mercedes,porsche çıktısı alınır.

arabalar.splice(1,2); // 1. indeksten başla 2 eleman sil demek oluyor.
console.log(arabalar); //consolda bmw,mercedes, porsche çıktısı alınır.


arabalar.splice(2,2,"hundai"); // 2. indexten itibaren 2 eleman sil hundai ekle demek oluyor.
console.log(arabalar); //consolda bmw, toyota, hundai,porsche çıktısı alınır.

*/

//? TOSTRİNG METOT
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(typeof arabalar); //consolda object çıktısı alınır
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar); // consolda string çıktısı alınır
console.log(stringArabalar);

*/

//? JOİN METOT

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let stringArabalar = arabalar.join("-");
console.log(stringArabalar); //consolda ifadeleri string alıp aralarında - işareti olur.

*/

//? CONCACT METOT - iki diziyi birleştirmeye yardımcı olur.

/*
let arabalar1 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let arabalar2 = ["hundai", "tofaş"];
let birleşmişDizi = arabalar1.concat(arabalar2);
console.log(birleşmişDizi); // consolda "bmw" , "toyota", "renault", "mercedes", "porsche", "hundai", "tofaş" çıktısı alınır.

*/

//? SLİCE METOT - Diziyi bölmeye yardımcı olur.

/**
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let ayrıDizi = arabalar.slice(2);  //2.indexten itibaren parçala demek
console.log(ayrıDizi); //consolda renault,mercedes, porsche çıktısı alınır.

*/

//? LENGTH ÖZELLİK

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar.length); //consolda dizinin uzunluğunu yazar.

*/

//? REVERSE METOT -Diziyi ters çevirme

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.reverse();
 console.log(arabalar); //consolda porsche, mercedes, renault, toyota, bmw şeklinde çıktı alınır.

 */

 //? SPLİT METOT -

 /*
 let isimler = "Enes , Ali, Veli";
 let  isimlerDizi = isimler.split(","); // virgüle göle isimleri böl ve diziye çevir.
console.log(isimlerDizi); // consolda diæi olarak "Enes", "Ali" , "Veli" çıktısı alınır.

*/

//? INDEXOF METOT

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let index = arabalar.indexof("bmw");//consolda bmw olduğu için 0 çıktısı alınır.
/! arabalar.indexof("hundai"); //consolda -1 çıktısı alınır.
if(index==0){
    console.log("Belirtilen eleman vardır.");
}else{
    console.log("Eleman yoktur.");
}

*/

//? INCLUDES METOT

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let sonuc = arabalar.includes("porsche");
console.log(sonuc); //consolda true çıkar
let sonuc2 =arabalar.includes("opel");
console.log(sonuc2); //consolda false çıkar.

if(sonuc){
    console.log("Eleman vardır.");
}else{
    console.log("Elemen yoktur.");
}
 
*/
