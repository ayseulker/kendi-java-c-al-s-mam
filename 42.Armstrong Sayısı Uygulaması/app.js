// 153 -370 -470 sayısı armstrong sayısı

// bir sayının rakamların küplerinin toplamı sayıya eşitse o sayıya armstrong sayı denir.

// 153 = 1*1*1 + 5*5*5 + 3*3*3 =1+125+27 =153

let sayi =prompt("Lütfen bir sayı girirniz")  // sayıyı number cinsinden almıyoruz çünkü  "charAt" gibi fonksiyonları kullanamıyoruz.
let toplam = 0; // 0 dan başlamasının sebebi indexler sıfırdan başlar.

//!length -sayının uzunluğunu ifade eder.
//! charAt sayının içindeki rakamları getirir.

for( let i = 0 ; i < sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam +=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır.");
}else{
    alert("Armstrong sayısı değildir.");
}