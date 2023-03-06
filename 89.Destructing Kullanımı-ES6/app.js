//Destructing Kullanımı
//let langs = ["C#", "C++" , "JavaScript", "Python"]
//let lang1, lang2, lang3, lang4 //burada değişkenleri tek tek tanımlıyoruz indexlere

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

//yazmak yerine


let langs = ["C#", "C++" , "JavaScript", "Python"]
let lang1, lang2, lang3, lang4

[lang1, lang2, lang3, lang4] = langs // köşeli parantez kullanarak dizi olduğunu belirtiyoruz

console.log(lang1, lang2, lang3, lang4)

const hesapla = (a,b)=>{
    const toplam=a+b
    const cikar=a-b
    const carp=a*b
    const bol=a/b

    const dizi =[toplam, cikar, carp , bol]
    return dizi //retur ile metotu çağırdığımız yere gidiyoruz
}

let[a,b,c,d] = hesapla(10,2)


console.log(a,b,c,d) //consolda sırasıyla 12 8 20 5 çıktısı alırız

/*
const person ={
    firstName :"Ayşe",
    lastName :"Ülker",
    salary :5000,
    age : 26
}
let isim,soyisim, maas, yas

isim =person.firstName
soyisim=person.lastName
maas =person.salary
yas =person.age

console.log(isim,soyisim,maas,yas) //consolda Ayşe Ülker 5000 26 şeklinde çıktı alınır.

*/

const person ={
    firstName :"Ayşe",
    lastName :"Ülker",
    salary :5000,
    age : 26
}
//let isim,soyisim, maas, yas
//console.log(isim,soyisim,maas,yas) //consolda Ayşe Ülker 5000 26 şeklinde çıktı alınır.
// diizlerde köşeli parantez açıyoruz objelerde süslü parantez açıyoruz.

//let {firstName, lastName, salary, age} = person // objeleri tekrardan değişkenle tanımlayıp person metoduna eşitliyoruz

//console.log(firstName,lastName,salary , age) //consolda Ayşe Ülker 5000 26 şeklinde çıktı alınır.

let {firstName: isim, lastName:soyisim, salary:maas, age:yas} = person // objeleri yeni değişken isimleri tanımlıyoruz. yeni değişkenleri tanımlayıp person metoduna eşitliyoruz

console.log(isim,soyisim, maas , yas) //consolda Ayşe Ülker 5000 26 şeklinde çıktı alınır.
