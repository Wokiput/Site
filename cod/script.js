window.onload = init;
var formula = { "ch4" : "метан", "c2h6" : "этан", "c3h8" : "пропан", "c4h10" : "бутан", "c5h12" : "пентан", "c6h14" : "гексан", "c7h16" : "гептан", "c8h18" : "октна", "c9h20" : "нонан", "c10h22" : "декан"};
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
  var stroka = document.getElementById("Input").value.toLowerCase();//преобразует введённое значение в строку нижнего регистра
  stroka = stroka.replace(/\s+/g, '');                             //заменяет все пробелы на незначемые символы (удаляет их)
  if (formula.hasOwnProperty(stroka)){                             //ищет преобразованную строку в словаре
    document.getElementById('block1').innerHTML = formula[stroka]; //выводит значение из словаря 
  }
  else document.getElementById('block1').innerHTML = "Что-то пошло не так";
  document.getElementById("image").src = 'img/'+stroka.toLowerCase()+'.png' //выводит изображение из папки Img со значением существующем в словаре
}