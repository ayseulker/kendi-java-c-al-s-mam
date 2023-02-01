/*
TYT PUAN HESAPLAMA

?SORULAR
1-Türkçe 40  -4 puan
2-MAtematik 40
3-Sosyal Bilimler 20
Fen Bilimleri 20

----> 100 puanı ÖSYM veriyor
---->Okul Puanı max 60 veriyor
*/

let turkceDogru, turkceYanlıs = 0;
let matematikDogru, matematikYanlıs = 0;
let sosyalDogru, sosyalYanlıs = 0;
let fenDogru, fenYanlıs = 0;
let puan = 0;
let okulPuanı = 0;

let yeniSatir = "\r\n";
let mesaj = "Tyt puan hesaplaması uygulamasına hoş geldiniz!" + yeniSatir
    + "1-Puan hesapla " + yeniSatir
    + "2-Çıkış yap";

let secim = prompt(mesaj);

switch (secim) {
    case "1":

        okulPuanı = Number(prompt("Okul puanını giriniz:"));
        turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz:"));
        turkceYanlıs = Number(prompt("Türkçe yanlış sayısını giriniz:"));

        matematikDogru = Number(prompt("Matematik doğru sayısını giriniz:"));
        matematikYanlıs = Number(prompt("Matematik yanlış sayısınız giriniz:"));

        sosyalDogru = Number(prompt("Sosyal Bilimler doğru sayısını giriniz:"));
        sosyalYanlıs = Number(prompt("Sosyal Bilimler yanlış sayısını giriniz:"));

        fenDogru = Number(prompt("Fen Bilimleri doğru sayısnı giriniz:"));
        fenYanlıs = Number(prompt("Fen Bigisi yanlış sayısını giriniz:"));


        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlısSayisi = turkceYanlıs + matematikYanlıs + sosyalYanlıs + fenYanlıs;
        let netSayisi = dogruSayisi - (yanlısSayisi / 4);
        puan = (netSayisi * 4) + 100 + (okulPuanı * 0.6)
        alert("TYT Puanınınz : " + puan);
        break;
    case "2":
        alert("Uygulamnadan çıkış yaptınız...");
        break;

    default:
        alert("Lütfen geçerli aralıkta değer giriniz!");
        break;

}