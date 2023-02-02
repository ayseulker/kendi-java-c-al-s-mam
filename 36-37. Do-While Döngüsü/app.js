/*
    do{
        /kodlar
    }while(koşul);
*/

//! Koşul false olduğunda  do - while döngüsünde koşul sonda olduğu için ilk seferde kod çalışır 2.3. kez çalışmaz,while döngüsünde koşul başta olduğu için hiç çalışmaz

// 1'den 10'a kadar yazdıralım

/*
let sayac = 1;

do{
    console.log(sayac);
    sayac++;
}while(sayac<=10);
*/


/*
let yas =23;

do{
    console.log("Ehliyeti alabilirsiniz")
}while(yas>=25) // koşul sağlanmasa dahil biz consolda 1 kere de olsa ehliyeti alabilirsiniz çıktısını görürüz.
*/


/* Tek sayıları yazdırma
let sayı =1;
do{
    if(sayı%2==1){
    console.log(sayı);
    }
    sayı++;
}while(sayı<=10);
*/

//! 1-20 arasındaki tek sayıları toplama

let sayac =1 ;
let toplam = 0;

do{
    if(sayac%2==1){
    toplam+=sayac;
    }
    sayac++;
}while(sayac<=20);

console.log("Toplam: ", toplam)