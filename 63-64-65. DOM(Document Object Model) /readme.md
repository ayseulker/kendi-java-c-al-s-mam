DOCUMENT OBJESİ

console.log(window); // document window objesi içerisindedir

let value ;

//location objeleri: href, hostname, port, pathname

console.log(document.location);

value = document.location.href; // o an kullandığımız internet sayfasının linkini yazdırır

value = document.location.hostname; // host adresini yazdırılır.

value = document.location.port; // hangi portta çalıştığını bize gösterir.

value = document.location. pathname; // hangi klosörde hangi dosya üzerinde çalıştığını gösterir.

value = document.characterSet; // UTF-8 -türkçe karakterli desteklemesine yardımcı olur.

value = document.title;  //Sİtenin başlığını gösterir.

value = document.links.item; // sayfadaki linkleri getirir bize

value = document.links.item(4);// linklerden 4. indexin html deki kodunu getirir.


value = document.links.item(4).id; //linklerden 4. indexin html deki id sini getirir.

value = document.links.item(4).getAttribute("id");// html sayfasında a etiketi içeriisinde Attiribut (herf,class id) lerden id yi gösterir.

value = document.links.item(4).getAttribute("class"); //html sayfasında a etiketi içeriisinde Attiribut (herf,class id) lerden classı gösterir.


value = document.links.item(4).classList[3]; // linklerde bulunan claslardan 3. indexte olanı göster demek oluyor.

value  = document.forms; // documentte bulunan formları getirir bize.

value  = document.forms.item(1).children; // formda bulunan özellikleri çağırmaya yardımcı olur. form içindeki çocukları getirmeye yardımcı olur.

value = document.domain; // çalıştırdığımız sayfanın domainini -host adresini getirir.

value = document.contentType; // çalıştırdığımız sayfanın tipini bulur. text/html

console.log(value); 