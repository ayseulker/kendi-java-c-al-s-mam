//Birden 10'a kadar yazma

/*
for(let i = 1; i<=10 ; i++){
    console.log(i);
}
*/

// 1 'den 10'a kadar çift yazdırma

/*
for (let i =0 ; i<=10 ; i+=2){
    console.log(i);
}
*/

// 1 'den 10'a kadar tek yazdırma


/*
for (let i =1 ; i<=10 ; i+=2){
    console.log(i);
}
*/

/*
    *Ayse
    *Naber
    *Ayse
    *Naber  -1,3,5 te Ayse 2,4,6 da Naber çıktısın alınsın istiyoruz.
 */


/*
    for(let i = 0; i<=10; i++ ){
    if(i%2==0){
        console.log(Naber)
    }else{
        console.log(Ayse)
    }
}
*/



// 50 den 1'e kadar gidelim toplamlarını bulalım

let toplam = 0;
for(let i=50 ; i>=1 ; i--){
    toplam+=i;
    console.log(i);
    //! console.log("Toplam :", toplam); - burada olduğunda her sayıdan sonra toplamı yazdırır konsola
}


console.log("Toplam :", toplam);

