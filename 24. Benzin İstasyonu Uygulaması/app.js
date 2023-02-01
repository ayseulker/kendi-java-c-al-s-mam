// Benzin İstasyonu

/*

    1-Dizel : 24.53
    2- Benzin : 22.25
    3- LPG : 11.1

    Gelen müşteriden aldığımız bilgiler ;
    1- Yakıt tipi
    2- Yüklenecek yakıt litrei

*/

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1 ;
const yeniSatir = "\r\n" ; //! \r\n işaretini alt satıra geçirmek için kullanılır . sürekli aynı şeyi yazdırmamak için const (değeri değişmediği) ile ytanımlanır.


const yakitMetni = "1-Dizel" +yeniSatir
+"2-Benzin" +yeniSatir
+"3-LPG" +yeniSatir
+"Yakıt türünü seçiniz : "; // başta artı olmazsa kod çalışmaz

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    
}
let yakitLitresi = Number(prompt("Yakıt Litresini Giriniz"));
let bakiye = Number(prompt("Bakiyenizi giriniz : "));
     
if(yakitTipi=="1"){
    //DİZEL
    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" +yeniSatir
        +"Kalan bakiyen : " + bakiye);
    }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir" +yeniSatir
        +"Ödenecek tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye + yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye));
    }

}else if(yakitTipi=="2"){
    //BENZİN
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" +yeniSatir
        +"Kalan bakiyen : " + bakiye);
    }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir" +yeniSatir
        +"Ödenecek tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye + yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye));
    }

}else if(yakitTipi=="3"){
    //LPG
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" +yeniSatir
        +"Kalan bakiyen : " + bakiye);
    }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir" +yeniSatir
        +"Ödenecek tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye + yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye));
    }

}
else {
    alert("Lütfen geçerli bir yakıt türü giriniz!");

}


/*let dizel  = "dizel" , benzin = "benzin", lpg= "lpg"
 
let yakıtTipi = prompt ("Yakıt tipini seçiniz :");
let yakıtMiktarı = Number (prompt ("Yakıt miktarını yazınız :"));

let sonuc1 = 24.53 * yakıtMiktarı ;
let sonuc2 = 22.25 * yakıtMiktarı ;
let sonuc3 = 11.1 * yakıtMiktarı ;

 if (yakıtTipi == "dizel"){
    alert("Ödenecek tutar:" + sonuc1)
 }
 else if (yakıtTipi == benzin){
     console.log("sonuc2");
 }
 else if (yakıtTipi  == lpg) {
    console.log("sonuc3");
 }
 */