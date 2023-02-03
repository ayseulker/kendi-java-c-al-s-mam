// Parametreli metod tanımlamak


function yazdir(isim,soyisim){  // isim-soyisim bir parametredir
    
    console.log(isim + " " + soyisim);
}


yazdir("Ayse","Ulker");
yazdir ("Ali", "Cevher");


cube(5); //consolda  125
cube(3); //consolda 27

function cube(sayi){
    console.log(sayi*sayi*sayi);
}

let yas = Number(prompt("Yaşınızı giriniz:"));

function kontrolEt(yas){
    if(yas>18){
        console.log("Ehliyet alabilirsiniz")
    }else{
        console.log("Ehliyet alamazsınız")
    }
}

kontrolEt(yas);


// "()" varsa parametre olduğunun kanıtıdır