//break - continue

// 1-den 10' a kadar  satyıları yazdıralım 8'e geldiğimizde döngüden çıkalım

/*
let sayac =  1 ;

while(sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break; //kodun 8 e gelince durmasına yardımcı olur.
    }
    sayac++;
}
*/

// ? Continue 

// 1 2 3 4 5 6 7  9 10 -8 yazdırmadan devam et

let sayac =0;

while(sayac<=10){
    sayac++;
    if (sayac>10){
        break;
    }
    if(sayac==8){
        continue; // continue döngüyü sadece bir kez kırmaya yardımcı olur.
    }
    console.log(sayac);
}

//! break kodu yazıldığında kendinden sonraki döngülerin calışmasını engeller. continue de ise sadece o kodun çalışmasını engeller.
