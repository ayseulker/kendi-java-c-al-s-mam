//Template literals


//! eski yöntem

function write(firstName , lastName){
    console.log("İsim : " + firstName + " " + "Soyisim : " + lastName) // consolda  İsim: Ayşe Soyisim: Ülker şeklinde çıktı alınır.
    //template literals ile kullanım ``işaretiyle yazılır

    console.log(`İsim : ${firstName} Soyisim : ${lastName} `) // + operatörü yerine $ işaretiye aynı çıktı alınır //? consolda  İsim: Ayşe Soyisim: Ülker şeklinde çıktı alınır.

    console.log(`
    İsim : ${firstName} 
    Soyisim : ${lastName}
     `) //? consolda  İsim: Ayşe  alt satıra Soyisim: Ülker şeklinde çıktı alınır.
}

write("Ayşe" , "Ülker")


