// koşul yapıları

let not = 65;

if (not > 50) {
    console.log("Geçtiniz: , notunuz :" + not);
}
else {
    console.log("Kaldınız :" + not);
}
// consoleda çıktı Geçtiniz, notunuz : 65

let not1 = 35;

if (not1 > 50) {
    console.log("Geçtiniz: , notunuz :" + not1);
}
else {
    console.log("Kaldınız :" + not1);
}
// consoleda çıktı Kaldınız, notunuz : 35

//! if olmak zorunda tek başınada çalışır kod sadece else olsa kod çalışmaz

let yas = Number(prompt("Yaşınız :")); // Başa Number yazıp promptu parantez içerisine alırsak veriyi stringden numbera değiştiririz.
console.log(typeof yas); // consoleda number çıkar
let para = prompt("Bütçeniz");

if (yas >= 18 && para >= 3000) {
    alert("Ehliyet Sınavına Katılabilirsiniz");
}

else {
    alert("Ehliyet sınavına katılamazsınız..")
}

//? Yaş ve para koşulu sağlanırsa if sağlanmazsa else deki kodların çıktısı alınır.

// ---------------DERS ORTALAMASI BULMA-------------

// vize1 %30, vize2 %30 final%40

let vize1 = Number(prompt("Vize1 notunuzu giriniz:"));
let Vize2 = Number(prompt("Vize2 notunuzu giriniz:"));

let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4)

if (ortalama >= 60) {
    alert("Dersten geçtiniz tebrikler :)) -->" + ortalama);
    console.log("Dersten geçtiniz tebrikler :)) -->" + ortalama)
}
else {
    alert("Kaldınız, geçmiş olsun :( -->" + ortalama);
    console.log("Kaldınız, geçmiş olsun :( -->" + ortalama)
}