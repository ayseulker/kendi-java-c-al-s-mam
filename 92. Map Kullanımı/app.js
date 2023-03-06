//Mapler dizi tipidir. arraylarin aleternatifidir
//! key ve value diye iki değer yazılarak kullanılır.Arraylar tek değer alır

const map1 = new Map();

//map içerisine değer koymak için set metodu kullanılır

// map1.set(1,"Ayşe")
// map1.set(true, 5)
// map1.set([1,2,3], {firstName : "Ayşe", lastName : "Ülker" }) // obje olarak tanımladık
// map1.set(true, "5") // map içerisine farklı tiplerde veriler girilebilir.


map1.set(34,"İstanbul") //ilki key ikincisi value dur
map1.set(35,"İzmir")
map1.set(06,"Ankara")
map1.set(01,"Adana")

// Get elementi ile çağrılır.

console.log(map1.get(6)) // consolda ankara çıktısı alınır
console.log(map1.get(34)) // consolda İstanbul çıktısı alınır

const donenDeger = map1.get(35)
console.log(donenDeger) // consolda izmir çıktısı alınır

//size alabiliriz / mapin ,içerisinde ne kadar değer var

value = map1.size;

console.log(value); // consolda 4 çıktısı alınır.

value1 =  map1.delete(34)
console.log(value1); // consolda true çıktısı alınır yani değer silindi diye
console.log(map1.size) // consolda 3 çıktısı alınır.

//has metoduyla map içerisinde var mı diye sorgulama yapıyor

console.log(map1.has(34)) // consolda true çıkar
console.log(map1.has(55)) // consolda false çıkar


//Bir map üzerinde döngü oluşturma (for of)

for(let [key,value] of map1){
    console.log(key,value) // consolda sırasıyla key value olarakdeğerler yazdırılır.
}

for(let value of map1){ //Destructing ile de çıktı alabiliriz.
    console.log(value) // consolda sırasıyla 4 dizi halinde key value olarak değerler yazdırılır.
}

let array = [34, "İstanbul"];

let [a,b] =  array;

console.log(a,b); //consolda 24 "İstanbul" çıktısı alınır



const keys = map1.keys();
console.log(keys); // consolda sırasıyla 34,35,06,01 şeklinde çıktı alınır

keys.forEach((key) => {
    console.log(keys) // konsolda keys dizi değildir diye hata döner
})

// keysi arrray formatına çevirerek foreach da çıktı alabiliriz.

const keys1 = Array.from(map1.keys())
console.log(keys); // consolda sırasıyla [34,35,6,1 şeklinde çıktı alınır

keys1.forEach((key) => {
    console.log(keys1) // konsolda 34,35,6,1 alt alta yazdırılır
})

keys1.forEach((key) => {
    console.log(keys1, map1.get(key)) // konsolda 34 "İstanbul",35 "İzmir",6 "Ankara",1 "Adana" alt alta yazdırılır
})


//map içerisinde keyleri almak için 

for(let key of map1.keys()){
    console.log(key) // konsolda 34,35,6,1 alt alta yazdırılır
}

for(let value of map1.values()){
    console.log(value) // consolda alt alta sırasıyla "İstanbul" , "İzmir", "Ankara", "Adana" şeklinde çıktı alınır.
}
// mapten  arraye çevirmek için

const array2 = Array.from(map1); // demek array 3 teki gibi demek

const array3 =[
    [34, "İstanbul"]
    [35, "İzmir"]
    [06, "Ankara"]
    [01, "Adana"]
]

array2.forEach((value)=>(
    console.log(value) // konsolda 34 "İstanbul",35 "İzmir",6 "Ankara",1 "Adana" alt alta yazdırılır
))

array2.forEach((value)=>(
    console.log(value[0]) // konsolda 34 ,35 ,6 ,1 alt alta yazdırılır
))

array2.forEach((value)=>(
    console.log(value[1]) // konsolda "İstanbul", "İzmir", "Ankara", "Adana" alt alta yazdırılır
))

// Arrayi mape çevirme

const array4 =[
    [34, "İstanbul"]
    [35, "İzmir"]
    [06, "Ankara"]
    [01, "Adana"]
]

const myMap = new Map(array4);
console.log(myMap)
//mapten Arraye çevirme

const myArray = Array.from(myMap);
console.log(myArray)



map1.set(34,"İstanbul") //ilki key ikincisi value dur
map1.set(35,"İzmir")
map1.set(06,"Ankara")
map1.set(01,"Adana")
map1.set([1,2,3], "Array")
let key  =[1,2,3] 
map1.set(key, "Array")
console.log(map1.get([1,2,3])) //consolda undifined diye çıktı alınır.  Çünkü refarans veri tipleri çağrılamıyor.
console.log(map1.get(key)) //consolda Array diye çıktı alınır.  Çünkü dışarıda key olarak tanımlardsa o zamnan alabiliriz çıktı

// obje ve diziler referans veri tipi olduğu için objeleri,arrayleri key olarak tanımlarsak çıktı alamayız

