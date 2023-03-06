// For in -- For of döngüleri

let names = ["Enes" , "Ali", "Yusuf", "Betül", "Ceyda"];

names.forEach(function(name){
    console.log(name) // consolda Enes, Ali ,Yusuf, Betül , Ceyda

})

names.forEach((name)=>{
    console.log(name) // consolda Enes, Ali ,Yusuf, Betül , Ceyda
})

names.forEach(name=>console.log(name)) // bu şekilde de yazarakconsolda Enes, Ali ,Yusuf, Betül , Ceyda

//! for in döngüsü ==  for in dizinin içindeki indexleri gösteriri


// değişken tanımlama + in + diziismi



let names1 = ["Enes" , "Ali", "Yusuf", "Betül", "Ceyda"];

for(let name in names1){
    console.log(name) //for in de consolda dizideki elemanların indexleri yazdırılır-0,1,2,3,4 şeklinde çıktı alınır.
}
for(let name in names1){
    console.log(name, names1[name]) //consolda dizideki elemanların indexleri ve karşılıkları yazdırılır.
    // consolda 0 enes,1 ali,2 yusuf,3 betül ,4 ceyda şeklinde çıktı alınır.
}


//! for of döngüsü == consolda  diziler çıkar

let names2 = ["Enes" , "Ali", "Yusuf", "Betül", "Ceyda"];

for(let isim of names2){
    console.log(isim) //for of dea consolda dizideki elemanlar yazdırılır-Enes,Ali,Yusuf,Betül,Ceyda şeklinde çıktı alınır.
}
for(let isim of names2){
    console.log(isim , names2.indexOf(isim)) // consolda enes 0, ali 1, yusuf 2, betül 3, ceyda 4 şeklinde çıktı alınır.
}