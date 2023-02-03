/*
    While(koşul){
        /kodlar
        /sayacın değerini atarız
    }

*/

//? 1'den 10'a kadar yazdıralım


/*
let i = 1;

while (i <= 10) {
    
    console.log(i);
    
    i++;
}
*/


//? 1' den 10 ' a kadar tekleri çifttleri yazdırma

//ÇİFTLER İÇİN

/*let i= 0;


// while ( i<=10 ) {
//     console.log(i) ;

//     i += 2 ; 

// } Veya 

while (i<=10){
    if(i%2==0){
        console.log(i);
    }
    i++; 
}
*/


/* TEKLERİ YAZDIRMA
let sayac = 1;

while ( sayac<=10 ) {
    console.log(sayac) ;

    sayac += 2 ;  sayac = sayac + 2

}  Veya 

let sayac = 0;

while (sayac<=10){

    if(sayac%2==1){
        console.log(sayac)
    }
    sayac++;
}

*/

// consolda 7 ' ye kadar yazmasına yardımcı olur.

let sayac = 1
while(true){
    console.log(sayac);
    if(sayac==9){
        break;
    }

    sayac++
}
