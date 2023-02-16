//String Sınıfının Metodları


//! charAt() -bizim indexte verdiğimiz karakteri consola yazdırmaya yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu" ;
let index = kurs.charAt(5);
console.log(karakter); // consolda "n" çıktısı alınır
*/

//! concat() - İki farklı sitring ifadeyi birleştirmeye yardımcı olur. Orjinalleri bozmuyor kopyasını veriyor.

/*
let kurs = "Modern Web Geliştirme Kursu" ;
let tarih = "2022" ;
let sonuc = kurs.concat(" ",tarih , "Enes"); //tarih gibi birden fazla ifade içerisine yazabiliriz.
console.log(sonuc); //  consolda Modern Web Geliştirme Kursu 2022 Enes çıktısı alınır.

*/

//! indexOf() - İndexine ulaşmak istediğimiz karakteri yazarak sonuca ulaşılır.

/*
let kurs = "Modern Web Geliştirme Kursu"
let index = kurs.indexOf("i");
console.log(index); // consolda 1 çıktısı alınır

*/

//! lastIndexOf() - vermiş olduğumuz kelimenin indexini bize döner

/*
let kurs = "Modern Web Geliştirme Kursu"
let index = kurs.lastIndexOf("Kursu");
console.log(index); // consolda 22 çıktısı alınır.

*/

//! toUpperCase() - yazıların tamamını büyük harfe çevirir.-orjinalini bozmuyor.

/*
let kurs = "Modern Web Geliştirme Kursu"
let sonuc = kurs.toUpperCase();
console.log(kurs); // consolda Modern Web Geliştirme Kursu şeklinde çıktı alınır.
.//todo orjinalini bozmadığı için console.log(kurs);  dediğimizde konsolda Modern Web Geliştirme Kursu çıktısı yani orjinal halinin çıktısı alınır.
console.log(sonuc); // consolda MODERN WEB GELİŞTİRME KURSU şeklinde çıktı alınır.

*/

//! toLowerCase() - yazıların tamamının küçük yazılmasına yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
let sonuc = kurs.toLowerCase();
console.log(kurs); // consolda Modern Web Geliştirme Kursu şeklinde çıktı alınır.
.//todo orjinalini bozmadığı için console.log(kurs);  dediğimizde konsolda Modern Web Geliştirme Kursu çıktısı yani orjinal halinin çıktısı alınır.
console.log(sonuc); // consolda modern web geliştirme kursu şeklinde çıktı alınır.

*/

//! trim() - kullanıcı space (boşluk) bıraksa dahi bütün boşlukları kaldırır.

/*
let kurs = "     Modern Web Geliştirme Kursu      "
console.log(kurs); // consolda      Modern Web Geliştirme Kursu     çıktısı alınır
console.log(kurs.trim()); // consolda Modern Web Geliştirme Kursu şeklinde çıktı alınır.

*/

//! slice() -bölmek/dilimlemek anlamına geliyor.
/*

let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.slice(7,10)); //? 7. indexten 10. indexe kadar (10 dahil değil) böl demek oıluyor 
.// consolda Web çıktısı alınır.

*/

//! substring() - belirli indexleri almamıza yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.substring(0,6));//? 0. indexten 6. indexe kadar (6 dahil değil) böl demek oluyor 
.// consolda Modern çıktısı alınır.

*/

//! replace() - bir şeyi başka bir şeyle değiştirmeye yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.replace("Modern" , "Güncel")); // consolda Güncel Web Geliştirme Kursu şeklinde çıktı alınır.

*/

//! split() - belirmiş olduğumuz bir ayırıcıya göre ayırıp dizi haline getiriyor.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır
let dizi = kurs.split(" "); //? burada boşluğa göre parçalara ayırıp dizi oluştur.
console.log(dizi); // consolda  "Modern" , Web" , "Geliştirme" , "Kursu" şeklinde 4 elemanlı dizi oluşmuş oluyor.

let kurs1 = "Modern,Web,Geliştirme,Kursu"
console.log(kurs1); // consolda Modern,Web,Geliştirme,Kursu  çıktısı alınır
let dizi1 = kurs1.split(","); //? burada virgüle göre parçalara ayırıp dizi oluştur.
console.log(dizi1); // consolda  "Modern" , Web" , "Geliştirme" , "Kursu" şeklinde 4 elemanlı dizi oluşmuş oluyor.

*/

//! valueOf() - primitive-(ilkel veri tipi demek ) tipe çeviriyor - bir dahaki ders anlatacak

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs.valueOf()); // consolda Modern Web Geliştirme Kursu  çıktısı alınır

*/

//! startSwith() - Yazılan ifadenin hangi karakterle başladığını sorduğumuzda true-false olarak sonuç döner.


let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır.
console.log(kurs.startsWith("M")); // consolda  true çıktısı alınır.
console.log(kurs.startsWith("m")); // consolda false çıktısı alınır.

if(kurs.startsWith("M")){
    console.log("M harfi le başlamatadır.") ; // consolda true olması durumunda bu şekilde çıktı alınır.
}



//! endsWith() -Yazılan ifadenin hangi karakterle bittiğini sorduğumuzda true-false olarak sonuç döner.

// let kurs = "Modern Web Geliştirme Kursu"
// console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır.
// console.log(kurs.endsWith("u")); // consolda  true çıktısı alınır.
// console.log(kurs.endsWith("U")); // consolda false çıktısı alınır.

// if(kurs.endsWith("u")){
//     console.log("u harfi ile bitmektedir.") ; // consolda true olması durumunda bu şekilde çıktı alınır.
// }





