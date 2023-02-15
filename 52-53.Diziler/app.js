// Dİzilere başlayalım

let sayilar = [0,1,2,3,4,5,"Enes",6,7,8,9, "Ali"];

console.log(sayilar[6]);
// consolda Enes çıktısı alınır
console.log(sayilar[10]);
//consolda 9 çıktısı alınır
console.log(sayilar[15]);
// 15. index olmadığı için consolda  undefined çıktısı alınır.

sayilar[11] = "Mehmet"; // burada dizideki 11. indexi mehmetle değiştirir.

console.log(sayilar[11]); //consolda mehmet çıktısı alınır.

sayilar[sayilar.length-1] = "Mehmet";  //bu şekide yazdığımızda dizinin uzunluğundan 1 çıkararak son index elde edilir ve onun ali'de Mehmet'e değiştitilmesi sağlanır.

//let isimler = ["Enes", "Kübra", "Bilal", "Yusuf"];

// console.log(isimler[3]); //consolda yusuf çıktısı alınır.

// isimler[2] = "Yakup";
// console.log(isimler[2]); //consolda  bilal yerine yakup çıktısı alınır.

// console.log(isimler); //consolda isimler dizisinin tamamı yazar.

let karisikDizi = [1, "Enes", 5.7,true,null,undefined];
console.log(karisikDizi[2]); // consolda  5.7 çıktısı alınır


let isimler  = new Array("Enes" , "Ahmet"); // new array yazarakta dizi oluşturabiliriz.
console.log(isimler); //Consolda enes ve ahmet çıktısını alırız
console.log(isimler[1]); //consolda ahmet çıktısı alırız


let personel1 = {
    isim : "Ayşe",
    soyisim : "Ülker" ,
    yas : 26,
}

let personel2 = {
    isim : "Enes",
    soyisim : "Bayram" ,
    yas : "23"
}

let rakamlar = [0,1,2,3,4,5,6,7,8,9];


let personelArray = [personel1, personel2, 1, true , rakamlar] ;
 // diziler dizi içerisine eklenebilir.
 console.log(personelArray[4]); //consolda [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] çıktısı alınır

 console.log(personelArray[0].isim); // consolda  ayşe çıktısı alınır.
