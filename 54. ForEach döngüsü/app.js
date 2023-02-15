// ForEach Döngüsü

/*let dizi1 = [];
let dizi2 = new Array();

dizi1[0] = "Enes";
dizi1[1] = "Ali";

dizi2[0] = "Enes";
dizi2[1] = "Ali";  //! dizileri boş oluşturup sonradan bu şekilde değer atayabiliriz.
*/

//? number,string, boolean , undifined , null , object (array) veri tiplerinden diziler object veri tipindedir

let isimler = ["Enes", "Yakup", "Bilal" , "Kübra", "Ayşenur", "Adem"];

isimler.forEach(function(isim){
    console.log(isim);
});
//consolda sırayla isimler yazdırılır.

//! for döngüsüyle aşşağıdaki gibi çıktı alınır.
for( let i = 0 ; i<isimler.length; i++){
    console.log(isimler[i]);
}

//todo While döngüsüyle çıktı alma yöntemi
let sayac = 0;
while (sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}