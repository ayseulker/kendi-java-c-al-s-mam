/*
    While(koşul){
        /kodlar
        /sayacın değerini atarız
    }

*/

//? 1'den 10'a kadar yazdıralım


/*
let sayac = 1;

while (sayac <= 10) {
    
    console.log(sayac);
    
    sayac++;
}
*/


//? 1' den 10 ' a kadar tekleri çifttleri yazdırma

/* ÇİFTLER İÇİN
let sayac = 0;

/*
while ( sayac<=10 ) {
    console.log(sayac) ;

    sayac += 2 ;

}  Veya 

while (sayac<=10){

    for(sayac%2==0){
        console.log(sayac)
    }
    sayac++;
}
*/

/* TEKLERİ YAZDIRMA
let sayac = 1;

while ( sayac<=10 ) {
    console.log(sayac) ;

    sayac += 2 ;

}  Veya 

let sayac = 0;

while (sayac<=10){

    for(sayac%2==1){
        console.log(sayac)
    }
    sayac++;
}

*/

// consolda 7 ' ye kadar yazmasına yardımcı olur.
let sayac = 1
while(true){
    console.log(sayac);
    if(sayac==7){
        break;
    }

    sayac++
}
