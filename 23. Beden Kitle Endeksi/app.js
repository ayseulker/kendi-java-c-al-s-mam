// Beden Kitle Endeksi Hesaplama

let kilo = Number(prompt("Kilonuzu giriniz"));

let boy = Number(prompt("Boyunuzu santimetre cinsinden giriniz"));

let sonuc = kilo/((boy/100)**2);

if(sonuc<18.5){
    console.log("İdeal kilonun altında : " +  sonuc);
}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kiloda : "  +  sonuc);
}else if (sonuc>=25 && sonuc<=29.9){
    console.log("ideal kilonun üstünde : " + sonuc);
}else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstünde (Obez) : " +  sonuc);
}else if(sonuc>=40){
    console.log("İdeal kilonun çok üstünde (Morbid Obez :"  +  sonuc);
}