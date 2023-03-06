//Setler de dizilerin alternatifidier. Setlerin içine koyduğumuz metodu 1 kere tutabiliyoruz.

const set = new Set();

set.add(true)
set.add(3.14)
set.add("Ayse")
set.add("Ayse")
set.add("Ayse")
set.add("Ayse")
set.add("Ayse")
set.add("Ayse")
set.add(7)
set.add({usurname: "ayse" , password : "1"});
set.add([1,2,3,4])

console.log(set.size) // consolda 6 çıktısı alınır. 8-9-10-11-12. satırlara 7 nin aynı değerlerini yazdığımızda consolda yine 6 çıktısı alırız.
//map olsaydı 11 çıktısı alırdık


//! Delete metoduyla değer silme

set.delete("Ayse")
console.log(set.size) // consolda 5 çıktısı alınır.

set.delete(7)
console.log(set.size) // consolda 4 çıktısı alınır.

set.delete([1,2,3,4])
console.log(set.size) // consolda 4 çıktısı alınır. çünkü referans veri tipleri bu şekilde silinemez.

//! Has metodu

console.log(set.has("Ayse")) //consolda true çıktısı alınır
console.log(set.has("Ali")) // consolda false çıktısı alınır
 
//! for of döngüsü

for(let value of set){
    console.log(value) //bütün değerler alt alta yazdırılır
}

const values  = Array.from(set);
values.forEach((value)=>{
    console.log(value)
})

//! arrayden set çevirme

let array =[1,"Ayse", true, "Mustafa", 15, [1,2,3]]
const newSet = new Set(array);
console.log(newSet) // set(6) 1,"Ayse", true, "Mustafa", 15, [1,2,3] şeklinde çıktı alınır

