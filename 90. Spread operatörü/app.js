//Spread Operatörü

//let numbers = [10,20,30,40]

function add(a,b,c,d){
    console.log(a+b+c+d)
}
//?Eski yöntem

add(numbers[0],numbers[1],numbers[2],numbers[3]) //consolda 100 çıktısı alınır.

//?Yeni yöntem

add(...numbers) //consolda 100 çıktııs alınır.

//! "..." ve değişken ismini yazarak değişken içerisinde tanımlanmış dizileri getirir.


const diller1 = ["Java" ,"C#"]
//const diller2 = ["Php", "Python" , diller1[0], diller1[1]]

const diller2 = ["Php", "Python" , ...diller1] // Spread operatörüylede bu şekilde ifade edilebilir.

console.log(diller2) // cıonsolda Php ,Python , Java , C# çıktısı alınır.


const numbers = [1,2,3,4,5,6,7,8,9]
let [a,b , ...kalanSayilar] = numbers 
console.log(a,b) //consolda 1,2 çıktısı alınır
console.log(kalanSayilar) //consolda 3,4,5,6,7,8,9 çıktısı alınır
//kalanSayiler diye yeni bir dizi oluşturuluyor.


const array1 = ["Enes", "Ali", "Veli", "Mehmet"]
let array2 = [] // sabit değişkenlere değer ataması yapılamadığı için const yerine let kullandık
 // array 1 leri array 2 içeriisine kopyaladık
array2[0]=array1[0]
array2[1]=array1[1]
array2[2]=array1[2]
array2[3]=array1[3]

//tek tek tanımlamak yerine aşşağıdaki gibide yapılabilir

array2 = [...array1]

console.log(array2) //consolda "Enes", "Ali", "Veli", "Mehmet" çıktısı alınır

//! veya yukardaki gibi yeni dizi tanımlamadan direk diziyi tanımlayarak array1 i içine atabilir.

const array3 = ["Enes", "Ali", "Veli", "Mehmet"]

const array4 = [...array3] 

console.log(array4) //consolda "Enes", "Ali", "Veli", "Mehmet" çıktısı alınır
