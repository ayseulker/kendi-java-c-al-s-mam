// Binary To Decinal Conversion (2 lik sayıdan 10 luk sayıya çevirme)

// 1011 sayıyı 10 luk sayıya çevirmek için 1*2^0 + 1 *2^1 + 0*2^3 + 1*2^4=  sayımız

//! Math.pow(2,3) yazdığımızda konsolda 8 çıktısı alınır. 
let binary = "1011"; //consolda 11 çıkar

function converBinaryToDecinal(binary){
    let toplam =0;
    let ust =0;
    for(let i =binary.length-1; i>=0 ; i--){
        if(Number(binary.charAt(i))!=0){
            toplam +=Number(binary.charAt(i)) * Math.pow(2,ust);
        }
        ust++;
    }

    console.log("Sonuç : " + toplam);
}

converBinaryToDecinal(binary);