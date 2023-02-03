// Kelime Sayısı Bulma Uygulaması

/*let metin = "Suanda Yalova'da Javascript eğitimi çekmekteyim.";

let harf = prompt("Harfi giriniz.");

let,sonuc = bul(harf);

function bul(harf){
    let toplam = 0 ;
    for(let i =o ; i < metin.length ; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase){
            toplam+=1
        }
    }
    return toplam;
}
*/

//! toLowerCase büyük harflerin küçük harf olmasına yardımcı olur.



let metin = "Suanda Yalova'da Javascript eğitimi çekmekteyim.";

bul("a");
bul("e");
bul("s");


function bul(harf){
    let toplam = 0 ;
    for(let i =o ; i < metin.length ; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase){
            toplam+=1
        }
    }
    console.log("Harf Sayısı  : " + toplam);
}