// Mükemmel Sayı Uygulaması


//  6   -    28      -     256
//! bir sayı maksimum yarısına bölmek mantıklıdır
// Mükemmel syı demek 6'yı -bölen sayıların toplamı 6*2 ye eşittir.  6: 1+2+3+6 =12 =6*2

//28 : 1+2+4+7+14+28 = 56 = 28*2

/* */


isPerfectNumber


function isPerfectNumber(number){
    let toplam = 0;
    for(let i =2 ; i<=number/2 ; i++){
        if (number%i==0){
            toplam+=i;
        } 
    }
    toplam+=1+number;

    if (toplam==number*2){
        console.log("Mükemmel sayıdır...");
    }else{
        console.log("Mükemmel sayı değildir...");
    }
}