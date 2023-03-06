// Tüm elementleri ekleme

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");


let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
}
//! inputtaki yazılanın yanındaki boşlukları temizle

function addTodo(e) {
    const inputText = addInput.ariaValueMax.trim();
    if (inputText == null || inputText == "") {
        alert("Lütfen bir değer giriniz!");
    } else {
        addTodoToUI(inputText); //ara yüze ekleme yöntemi
        addTodoToStorage (inputText);  //storage ekleme
        showAlert("success", "Todo Eklendi."); // todo ekleyince yeşilrenkte bilgi vericek 
    }
    //console.log("Submit eventi çalıştı");
    e.preventDefault(); // farklı bir sayfaya gitmesini engelliyoruz.
}

function addTodoToUI(newTodo) {
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li>
*/
const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.textContent = newTodo;

const a = document.createElement("a");
a.href = "#";
a.className = "delete-item";

const i = document.createElement("i");
i.className = "fa fa-remove";

a.appendChild(i); //a içine i yi al
li.appendChild(a); // li sen içine a'yı al
todoList.appendChild(li); //. todo list sen içine li yi al

addInput.value = ""; //yeni todo ekledikten sonra içini boşaltmak için eklenir
}

function addTodoToStorage(newTodo){ // storage eklemek için metot yazıldı
    checkTodosFromStorage(); // bu metotla kontrol et 
    todos.push(newTodo); // yeni gelen değeri ekle
    localStorage.setItem("todos",Json.stringfy(todos)); //bu kod ile yeni yazıl todo jsonstringfy ile todos localstorage da eklenir
}

        

function checkTodosFromStorage(){
    //eğer todo listesinde birşey varsa onun üzerine eklemek için yazıldı
    if(localStorage.getItem("todos")===null){ // eğer her hangi bir tododa değer yoksa boş başlat demek
        todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
}

function showAlert(type, message) { //! todo eklediğimizde başarılı veya başarısız olduğunu iletiyor
    /*
    <div class="alert alert-warning" role="alert"> //? burayı warming-succes gibi dönüt almak için alert type oluşturuldu
    This is a warning alert—check it out!
  </div>*/
    const div = document.createElement("div"); // yeni diz oluşturarak todo ekleyin  butonun altına bilgi dönecek
    //   div.className="alert alert-"+type;
    div.className = `alert alert-${type}`; //litirel template //! bu tanımlamayla geri bildirimin başarılı veya başarısız olduğunu gösteriri.
    div.textContent = message;

    firstCardBody.appendChild(div); // todo ekleyin butonun altına eklemek için

    setTimeout(function(){
        div.remove();
    },2500);
}