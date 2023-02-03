//  Geriye Değer Döndüren metot tanımlamak


/*let donenDeger = cube(2);
//console.log(donenDeger); // consolda 8 çıktısı alınır
kareAl(donenDeger); // consolda 64 çıktısı alınır

function kareAl(sayi){
    let sonuc= sayi*sayi*
    console.log(sonuc);
}
function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    //console.log (sonuc); - biz return kodunu kullanmadığımızda sonucu sadece kıvırcık içerisine yazdığımızda görebiliriz .dışarıya tanımlarsak değere ulaşamayız.

    return sonuc; // returnda sayı dersek konsolda sayı çağırır string çağırırsak string çağırır. 
    console.log("Ayse"); //returnden sonraki hiç bir kod çalışmaz
}
*/


let donenDeger = cube(2);

function kareAl(sayi){
    let sonuc= sayi*sayi;
    return sonuc;
}  

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    let kareSonuc = kareAl(sonuc);
     console.log(kareSonuc); 
    }  //methot içinde metot gösterimi

//! bir fonksiyon içerindeki ifadeyi return ile dışarı çıkarıp farklı fonksiyonla kullanabiliriz.


// todo 1- Return bir değeri metodun(fonksiyonu ) dışarısına çıkarmak , taşımak için kullanılır.


//todo 2- Return bir metodu bitiren anahtar kelimedir.


yazdir();

function yazdir(){
    console.log("Ayse");
    //! void : parametresiz methodlarda geriye değer döndürmeyen demektir.
}