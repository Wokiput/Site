window.onload = init;
var formula = { "ch4" : "Метан", "c2h6" : "Этан", "c3h8" : "Пропан", "c4h10" : "Бутан", "c5h12" : "Пентан", "c6h14" : "Гексан", "c7h16" : "Гептан", "c8h18" : "Октна", "c9h20" : "Нонан", "c10h22" : "Декан"};
var formulaimg = {
"ch4" : "https://github.com/Wokiput/Site/blob/Test/img/ch4.png", 
"c2h6" : "https://github.com/Wokiput/Site/blob/Test/img/c2h6.png", 
"c3h8" : "https://github.com/Wokiput/Site/blob/Test/img/c3h8.png", 
"c4h10" : "https://github.com/Wokiput/Site/blob/Test/img/c4h10.png", 
"c5h12" : "https://github.com/Wokiput/Site/blob/Test/img/c5h12.png", 
"c6h14" : "https://github.com/Wokiput/Site/blob/Test/img/c6h14.png", 
"c7h16" : "https://github.com/Wokiput/Site/blob/Test/img/c7h16.png", 
"c8h18" : "https://github.com/Wokiput/Site/blob/Test/img/c8h18.png", 
"c9h20" : "https://github.com/Wokiput/Site/blob/Test/img/c9h20.png", 
"c10h22" : "https://github.com/Wokiput/Site/blob/Test/img/c10h22.png"};
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
  function handleButtonClick() {
    var stroka = document.getElementById("Input").value.toLowerCase();
    stroka = stroka.replace(/\s+/g, '');
    if (formula.hasOwnProperty(stroka)){
      document.getElementById('block1').innerHTML = formula[stroka];
    }
    else document.getElementById('block1').innerHTML = "Что-то пошло не так";
  }