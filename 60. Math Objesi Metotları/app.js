// console.log(window); //? consolda Math window objesi içindedir.

let a = 3.50;
let b = -12;

console.log(Math.floor(a));  // consolda 3  çıktısı alınır. floor virgülden sonrasını siler
console.log(Math.ceil(a));   // consolda 4 çıktısı alınır. ceil bir üst sayıya yuvarlar.
console.log(Math.round(a)); // consolda 4 çıktısı alınır. round en yakın değere yuvarlar

console.log(Math.max(1,2,3,4,50)); // consolda 50 çıktısı alınır. max number tipinde dizideki en büyük değeri döner.
console.log(Math.min(10,0,5)); // consolda 0 çıktısı alınır. min number tipinde dizideki en küçük değeri döner.
console.log(Math.abs(b)); // consolda 12 çıktısı alınır. abs bir sayının mutlak değerini almaya yardımcı olur.

console.log(Math.sqrt(169)); //consolda 13 çıktısı alınır. sqrt bir sayının karekökünü almaya yardımcı olur.
console.log(Math.pow(5,4)); // consolda 5 üzeri 4 şeklinde hesaplar ve 625 çıktısı alınır. pow bir sayının üssünü almaya yardımcı olur

console.log(Math.PI); // 3,14 şeklinde çıktı alınır. PI obje değildir property(özellik)dir

// let randomDeger = Math.random(); // random 0-1 arasında rastgele sayı üretir.
// let sonuc = randomDeger*100000; // doğrulama kodu üretilebilir bu şekilde
// let sonucYuvarla = Math.floor(sonuc);

// console.log(randomDeger);
// console.log(sonuc);
// console.log(sonucYuvarla);

console.log(Math.floor(Math.random()*100)); // kodun okunması şu şekildedir. sondan başa doğru okunur.
//! random ile 0-1 arası bir değer oluştur 100 ile çarp sonra floor ile virgülden sorasını at ve çonsolda başını yaz.
