//! objeler kıvırcık parantezle tanımlanır ve farklı değerleri tutabiliyor
let urun1 = {
    isim : "ACER Swift",
    kategori :  "Teknoloji",
    fiyat : 6.219
}
let urun2 = {
    isim : "ACER Nitro 5",
    kategori :  "Teknoloji",
    fiyat : 15.475
}
let urun3 = {
    isim : "ACER Gaming",
    kategori :  "Teknoloji",
    fiyat : 13.999
}
let urun4 = {
    isim : "LENOVO V15",
    kategori :  "Teknoloji",
    fiyat : 10.999
}
let urun5 = {
    isim : "LENOVO V14",
    kategori :  "Teknoloji",
    fiyat : 4.399
}
let urun6 = {
    isim : "LENOVO Ideapad",
    kategori :  "Teknoloji",
    fiyat : 4.510
}
//toUpperCase diyerek yazıları büyük harfe çeviriyoruz-includesda parantez içerisinde sona sıfır eklememizin sebebide 0. indexten itibaren kontrol et demek oluyor.

let urunler = [urun1,urun2,urun3,urun4, urun5,urun6];
let filtreliUrunler = []; //boş bir dizi tanımlıyoruz eğer kullanıcı yukarıdaki ürünlerden birini yazarsa filtreli ürünler içerisine dizi olarak ekliyor.

let kullaniciUrunIsmi  = prompt("Bir ürün ismi giriniz");

fitreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(filtreliUrunler);

function fitreliUrunlerDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunlerYazdir(urunler){
    urunler.forEach(function(urun){
    console.log("-------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori)
    console.log("-------------------------------------------");
});
}