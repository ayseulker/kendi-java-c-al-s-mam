// Else if yapısı

/*

-              -            -
 -             -           - 
  -            -          -
   -           -         -
    -          -        -
     -         -       -
      -        -      - 
       -       -     -
    1. yol  2. yol  3.yol

*/

let secilenYol = prompt("Lütfen gitmek isteiğiniz yolu seçiniz :");

if (secilenYol == 1) {
    alert("Seçilen yol" + " .yoldur.")
}
else if (secilenYol == 2) {
    alert("Seçilen yol" + " .yoldur.")
}
else if (secilenYol == 3) {
    alert("Seçilen yol" + " .yoldur.")
}
else {
    alert("Lütfen geçerli bir yol seçiniz !!")
}



//TODO ÇOKLU İF KULLANMAK  

/*
    adını ve tckn
    Ad : boş geçilmez
    TCKN : 11 karakterden oluşsun
*/

// let isim = prompt("İsminizi giriniz :");
// console.log(isim); //! prompt boş yazıldığında consoleda da boş görünür.

// let isim2="";
// console.log(isim2); //! consolda boş çıktı alınır.

//? 121345670987 (bu ifadenin uzunluğu 12 karakterden oluşur) length bir stringin uzunluğunu bulmamıza yardımcı olur.

let ad = prompt("İsminizi giriniz :");
let tckn = prompt("TCKN giriniz :");

//kontrolEt(ad,tckn);

//if else: iki seceneğin olduğu yerlerde kullanılır
// else if else if: 2 den fazla seçeneğin olduğu yerde kullanılır.
//if if if : birbirinden bağımsız durumlar olduğunda kullanılır


function kontrolEt(ad, tckn) {
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("İsim ve tckn problemsiz girildi");
        }
        else {
            console.log("Lütfen tc nizi 11 karakter olarak giriniz");
        }
    }
    else {
        console.log("Lütfen isim alanını boş bırakmayın!!!");
    }
}

kontrolEt2(ad,tckn);

function kontrolEt2(ad, tckn){
    if(ad==""){
        console.log("Lütfen isim alanını boş bırakmayın!!!");
        
        return; //TODO bu kod çalıştığında bu koddan sonraki kodların çalışmasını engeller
    
    }

    if(tckn.length!=11){
        console.log("Lütfen tc nizi 11 karakter olarak giriniz");
        return;
    }

    console.log("İsim ve tckn problemsiz girildi"); 

}