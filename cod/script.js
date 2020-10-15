window.onload = init;
var formula = { "ch4" : "Метан", "c2h6" : "Этан", "c3h8" : "Пропан", "c4h10" : "Бутан", "c5h12" : "Пентан", "c6h14" : "Гексан", "c7h16" : "Гептан", "c8h18" : "Октна", "c9h20" : "Нонан", "c10h22" : "Декан"};
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
    document.getElementById("image").src = 'https://github.com/Wokiput/Site/tree/Test/img'+stroka.toLowerCase()+'.png'
  }