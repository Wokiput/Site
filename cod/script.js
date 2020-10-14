window.onload = init;
var arr = { "0" : "Ноль", "1" : "Один", "2" : "Два", "3" : "Три", "4" : "Четыре", "feo" : "ОксидЖелеза", "6" : "Шесть", "7" : "Семь", "8" : "Восемь", "9" : "Девять"};
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
  function handleButtonClick() {
    var stroka = document.getElementById("Input").value.toLowerCase();
    if (arr.hasOwnProperty(stroka)){
      document.writeln(arr[stroka]);
    }
    else document.writeln("Error");
  }