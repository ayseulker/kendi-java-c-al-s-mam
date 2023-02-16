// Date Kullanımı


//! Biz get elementini kullanarak istediğimiz gün ay zaman dakikaya ulaşabiliriz
//! biz set elementini kullanarak yeni değerler atayabiliriz.


let tarih = new Date(); // newle yeni bir date objesi oluşturur.
//console.log(tarih); //o anki tarihi bize çıktı olarak verir.
console.log(typeof Date); //consolda object çıktısını alırız

tarih.toString(); // tarihi string ifadeye çevirir
console.log(tarih.toString()); // yeni bir değişken tanımlamadan log içierisine direk yazarak string şekilde çıktı alabiliriz. 




//?TODO aylar 0-11 arasında ifade edilir.

console.log(tarih.getTime()); // get metodu almak demek burada zamanı al demek
console.log(tarih.getFullYear()); //yılı al demek metotlardan sonra parantez açılıp kapanması gerekli
console.log(tarih.getDate()); // consola ayın hangi gününde olduğumuz yazdırılır
console.log(tarih.getDay()); // consolda haftanın gününü gösteriyor
console.log(tarih.getHours()); // saati bulmaya yardımcı olur
console.log(tarih.getMilliseconds()); 
console.log(tarih.getMinutes()); //dakikayı veriyor
console.log(tarih.getMonth()); //Ayı numara cinsinden verir ocak ayı-0 olarak başlar
console.log(tarih.getMonth() +1); // ocay ayını 1 den başlatabiliriz.
console.loog(tarih.getSeconds()); // saniyeyi verir
console.log(tarih.toLocaleDateString()); // gün ay yıl şeklinde çıktı almamıza yardım eder.
console.log(tarih.toLocaleTimeString()); // saat dakika saniye şeklinde verir.
console.log(tarih.toLocaleString()); // consolda gün ay yıl saat dakika saniye olarak çıktı verir.

//! SET METOTLARI
console.log(tarih); // consolda 16.02.2023 şubat çıktısı alınır
tarih.setDate(18);
console.log(tarih); // consolda 18.02.2023 çıktııs alınır
tarih.setHours(); // parantez arasına istediğimiz saati yazarak saati ileri zamanlı gösterebiliriz
tarih.setMonth();// hangi ayda olmak isteğimizi yine yazarak ayı ileri alabiliriz.
tarih.setMinutes(); // dakikayı ileri alma


tarih.setHours(tarih.getHours() + 2); // dinamik zaman oluşturur hangi saatte olursak olalım o saat üzerine 2 saat ekler.
console.log(tarih); // consolda o anki tarihten 2 saat sonraki tarih gösterilir.



let tarihÖzel = new Date(1996,01,24,04,30,40) // spesifik tarih oluşturabiliriz.
console.log(tarihÖzel); // consolda Feb 24 1996 04:30:40 GT+03:00 çıktısı alınır.
