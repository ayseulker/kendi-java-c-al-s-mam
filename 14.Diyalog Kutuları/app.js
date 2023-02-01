/* 
    -----------------DİYALOG KUTULARI-------------
    -Aılert :Uyarı için kullanılr
    -Prompt : değer almamıza yardımcı olur
    -Confirm : onaylama

*/

// console.log(window);  //? alert,prompt, confirm  window objesi içerisinde ki metotlardır

// window.alert()
// window.prompt()
// window.confirm()

// alert()
// prompt()
// confirm()  //! şekillerde çıktı alabiliriz


//alert("İşleminize devam etmeden önce kaydetmelisiniz!");


//prompt(); sayesinde değer almamıza yardımcı olur.
 
// let isim  = prompt("isminizi giriniz :") // sayfada değer girmemizi ister 
// console.log(isim); // sayfada girilen ismin consolda görünmesine yardımcı olur.

//! kullanıcıdan alınan değerler stringdir. - tür dönüşümleri ile numbera dönüştürülebilir.

// let isim  = prompt("isminizi giriniz :") 
// let yas  = prompt("Yaşınızı giriniz :") 

// console.log("isminiz:" + isim)
// console.log("Yaşınız:" + yas) // consolda iki ifadeyi sırayla ekranda yazarak görmemize yardımcı olur.

let sonuc = confirm("Silmek istediğinize emin miziniz?");
console.log(sonuc); // ifadeye tamama bastıysa true iptale bastıysa false çıkar.