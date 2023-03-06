//! OOP: Basit seviyede nesneye yönelik programlama
//? Gerçek hayatta gördüğümüz nesnelerin bilgisayar ortamına aktarılmasıdır - rengi şekli durumu ismi  gibi

// OPP giriş

// class Insan{

//     constructor(isim,soyisim, yas,maas){  // yapıcı metot demek
//         console.log("Yapıcı metot çalıştı ") //aşşağıda tanımlama yapmadan ççıktı alınmaz
//     } //aşşağıda tanımlama yaptıktan sonra consolda Yapıcı metot çalıştı yazar
// }

// Nesne oluşturma new yapıp class ismi yazarak çalıtırılır
// const insan1 = new Insan();   //buralara yukardaki parametreler karşığına gelen değerleryazılabilir.
// const insan2 = new Insan(); //ikincikez yapıcı metot çalıştı diye çıktı alınır. konsolda tanımlanmş nesne kadar çıktı alınır.

// //! insan1 insan2 birer objedir-nesnedir 

//todo Bir class içerisinde özellikler , yapıcı metotlar ve fonksiyonlar olur
//? constructor  (yapıcı)  fonksiyondur içeriisine parametreler tanımlanabilir.


class Insan{
    
    constructor(isim,soyisim, yas, maas){

        //debugger //çalışma yöntemini anlatır  
        this.isim = isim; //! letle değişken tanımlar gibi bu şekide değer tanımlarız
        this.soyisim= soyisim;
        this.yas= yas;
        this.maas= maas; 
    }

    bilgileriGöster(){
        console.log(
            `İsim : ${this.isim}
            Soyisim : ${this.soyisim}
            Yaş : ${this.yas}
            Maaş : ${this.maas}`
        )
    }
}


//! sınıf içerisine yüzlerce metot yazılabilir

//?bir sınıf içerisindeki değişkenlere erişip kulllanabilmek için class dışında nesne oluşturulur. new Insan şeklinde constrocturla özellikleri tanımlanır
// insan sınıfı içerisinde fonksiyon tanımlaması yapılır.
// classtan nesne oluştururken constroctur ile değer ataması yapılır.

const insan3 = new Insan("Ayse", "Ülker", 26,10000); //! Nesne türetme yöntemi
const insan4 = new Insan("Betül", "Çınar", 24 , 7500);

insan3.bilgileriGöster()  // insan1 içindeki bilgilerln metodunuı çağırıyoruz ykardaki fonksiyonu çalıştırıyoruz.
insan4.bilgileriGöster()


console.log(insan3.isim) //consolda ayse çıktısı alınır
console.log(insan4.isim) //consolda betül çıktısı alınır