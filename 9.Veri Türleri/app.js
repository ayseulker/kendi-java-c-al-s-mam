/*

? Veri Türleri

1-String : çift tırnak arasına yazılan harf içeren yazılar
2-Number
3-Boolean
4-Null
5-Underfined // tanımlanmamış demek
6-Object
7-Function
*/

//TODO------------------------STRİNG VERİTİPİ----------------

let isim = "Ayse";
console.log(isim);
console.log(typeof isim);

let sayi1 = 10.7;
let sayi2 = 5.3;

//TODO------------------------NUMBER VERİTİPİ----------------

console.log(sayi1 + sayi2);
//console.log =( typeof sayi1)

// let a ="5"
// let b ="2"
// console.log(a+b)  // burada ifadeler string olduğu için çıktı 52 şeklindedir.

let stringDegisken ="Yaşınız:";
let yas =23;

console.log(stringDegisken + yas ); // çıktı Yaşınız: 23 şeklinde olur

//TODO------------------------BOOLEAN VERİTİPİ----------------

//boolean : true ve false 'dan oluşur. Evet hayır cevabınıda alabilrsiniz

console.log(5<8); // console da çıktı true olur
console.log(5>8); // console da çıktı false olur


// let a = 3;
// let b =12;

// let sonuc = a+b;
// console.log(sonuc>18) // console da sonuç false çıkıyor
// console.log(sonuc<18) // console da sonuç true çıkıyor
// console.log(sonuc) // console da sonuç 15 çıkıyor
// console.log(sonuc==15) // console da sonuç true çıkıyor
// console.log(sonuc!=15) // console da sonuç False çıkıyor

// == eşittir demek operatörü
// != eşit değildir demek operatörü

//TODO------------------------NULL VERİTİPİ----------------

// let a= null; // boş demek

// a= 27;

// console.log(a); // console da çıktı 27 olarak gözükür

//TODO------------------------UNDİFİNED VERİTİPİ----------------

// let a;  

// console.log(a); //undifened şeklinde görülür.
// console.log(typeof a);  //consolda undifined diye çıktı alınır

//! primitive veri tipleri ilkel veri tipleridir. referans veri tipler gelişmiş veri tiplerdir
//! referans veri tipleri ram bellekte tutulur daha modendir.

//TODO------------------------OBJECT VERİTİPİ----------------

let insan = {
    isim: "ayse",
    soyisim: "Ulker",
    yas :23  // {} içindeki ifadeler birer objedir. object veritipleri referans tiplerdir.
}
console.log(insan);
console.log(typeof insan);  //consolda object çıktısı alınır.

let rakamlar =[1,2,3,4,5];
console.log(typeof rakamlar); // [] içindeki ifadeler dizidir

//TODO------------------------FUNCTİON VERİTİPİ----------------

let func = function(){

    console.log("Merhaba");
}

func();  // consolda merhaba çıktısı alınır.
console.log(typeof func);
