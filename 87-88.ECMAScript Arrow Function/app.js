//ECMAScript kodların bütün tarayıcılarda çalışmasına yardımcı olur. js bir dil ecmaScript onun üzerine inşa edilmiş bir standarttır.
// bir kodun 2 farklı şekillerde yazmasına yardımcı olur. ES6 (ecmascript 6 en önemlisi)

function yazdır(){
    console.log("merhaba");
}
yazdır()

//ARROW FUNCTİON -- function yazmadan => işareti ile arrow function oluşturuyoruz.

//! arrow function içerisine metot tanımlamıyoruz o yüzden constla değişken tanımlıyoruz 

const yazdir1 = ()=>{
    console.log("Merhaba")
}

yazdir1()

const yazdir3 = (firstName)=>{
    console.log("Merhaba" ,  firstName) // yazdir3 içeirisine firstname tanıumladık metodu ayşe diye çağırdık 
}
yazdir3("Ayşe") // ayşeyi burada tanımladık  merhaba ayşe diye consolda çıktı alırız

const yazdir4 = (firstName , lastName)=>{
    console.log("Merhaba" , firstName, lastName) //consolda merhaba ayşe ülker çıktısı alınır

}

yazdir4 ("Ayşe", "Ülker")

// eğer fonksiyon içeriisne yazdığımız kod tek satırdan oluşuyorsa kıvırcık parantezler kaldırılarak aşşağıda ki gibi de yazılabilir.

const yazdir5 = (firstName , lastName)=> console.log("Merhaba" , firstName, lastName)

yazdir5 =("Ayşe", "Ülker") //consolda merhaba ayşe ülker çıktısı alınır

//! kıvırcıklar içerisine yazılan kodlardan sonra ; eklemesekte olur.

const yazdir6 = (firstName , lastName)=>{  // kıvırcıkların arasında birden fazla kod satırı olduğunda kıvırcıklar kaldırılırsa kodlar karışık sırayla konsola yazdırılır.
    console.log("Merhaba" , firstName, lastName)
    let a=5
    console.log(a)
    console.log("Ayşe")
}

yazdir6 ("Ayşe", "Ülker") //consolda alt alta ilk "merhaba ayşe ülker"-"5" - "Ayşe" çıktısı alınır

//! fonksiyonda tek parametre varsa parametlerin yanındaki parantezler kaldırılabilir.

const yazdir7 = firstName => console.log("Merhaba" , firstName) //consolda merhaba ayşe çıktısı alınır

yazdir7 ("Ayşe")

//! tek bir işlem ve tek  bir satır olduğunda return ve kıvırcıklar kaldırılır.
/*
const kupAl = (x)=>{
    return x*x*x
}
*/
const kupAl = x=> x*x*x

document.addEventListener("click", ()=>{ //funcion yazmadan bu şekilde tanımlanabilir.

})

console.log("Değer" , kupAl(3)) // konsolda değer 27 çıktısı alınır