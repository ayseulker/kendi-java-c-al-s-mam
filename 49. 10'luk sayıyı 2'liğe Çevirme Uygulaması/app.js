// Decinal (10 luk sayı) To Binary (sadece 01 den oluşur) Conversion

// burada bir sayıyı sürekli ikiye bölüyoruz ve kalan sayıları sağdan sola doğru yazıyoruz.


function convertDecinalToBinary(number){
    let binary=" ";
    while(true){
        binary+=(number%2).toString();
        // binary+=number%2 +"" koyarakta sayıyı stringe çevirebiliriz.
        number=Math.floor(number/2);
        if(number==1){
            //Artık bölmek yok döngüden çıkılacak
            binary+=1
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç :" + result);
}

function reverse(binary){
    for(let i = binary.length-1 ; i>=0 ; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}