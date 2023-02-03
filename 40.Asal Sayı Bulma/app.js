// ASAL SAYI BULMA UYGULAMASI

/*
     Asal sayı bulunurken  kendisinizn yarısına kadar böldürme işlemi yaptırılır

    14 = 2, 3, 4, 5, 6, 7


*/

// floor kodu sayıyı en yakın değere yuvarlıyor

// let a = Math.floor(7.9);
// console.log(a);


//15
let sayi = Number(prompt("Lütfen bir sayı giriniz : "));
let sonuc = true;
for(let i =2; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        //Asal değildir.
        sonuc=false;
        break;
    }
}
if(sonuc){

    alert(sayi + "Asaldır.");
}else{
    alert(sayi + "Asal değildir!");
}