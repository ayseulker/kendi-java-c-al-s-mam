// Var - Let - Const

/*

------------SCOPE(KAPSAM)-------------

    -> Global Scope : Heryerden erişebilirsin.
    -> Function Scope
    -> Block ScoPe

 */

var degiskenIsmi = 10;

console.log(degıskenIsmi);


var a = 5; //global scope
//sen buna her yerden erişebilirsin.
//  var değişkeni 2 kıvırcık parantez{} arasında olursa heryerde ulaşamazsın


// if(true){
//     console.log(a);
// }
// function method1(){
//     console.log(a);
// }

// method1();

// var b = 12; //global Scope

// function method1(){
//     var sayi = 10;
//     console. log(sayi);
// }

// method1();

function method1(){
    var a =5; //Function Scope
    if(true){
        var b =10; // block Scope
    }
    while(true){

    }
    for(let i=0 ; i<10; i++){

    }

}

console.log(a);

method1();



