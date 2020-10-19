window.onload = init;
var formula = { "ch4" : "Метан", "c2h6" : "Этан", "c3h8" : "Пропан", "c4h10" : "Бутан", "c5h12" : "Пентан", "c6h14" : "Гексан", "c7h16" : "Гептан", "c8h18" : "Октна", "c9h20" : "Нонан", "c10h22" : "Декан"};
var fname = { "метан" : "ch4", "этан" : "c2h6", "пропан" : "c3h8", "бутан" : "c4h10", "пентан" : "c5h12", "гексан" : "c6h14", "гептан" : "c7h16", "октна" : "c8h18", "нонан" : "c9h20", "декан" : "c10h22"}; //обратный словарь
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
  var stroka = document.getElementById("Input").value.toLowerCase();          //преобразует введённое значение в строку нижнего регистра
  stroka = stroka.replace(/\s+/g, '');                                        //заменяет все пробелы на незначемые символы (удаляет их)
  if (formula.hasOwnProperty(stroka)){                                        //ищет преобразованную строку в словаре
    document.getElementById('block1').innerHTML = formula[stroka];            //выводит значение из словаря 
    document.getElementById("image").src = 'img/'+stroka.toLowerCase()+'.png' //выводит изображение из папки Img со значением stroka если оно есть в словаре
  }
  else if(fname.hasOwnProperty(stroka)){ 
    stroka = fname[stroka];                                                    //если введено название, то смотрит во втором словаре и подставляет вместо него значение из словаря
    document.getElementById('block1').innerHTML = stroka;
    document.getElementById("image").src = 'img/'+stroka.toLowerCase()+'.png' //выводит изображение из папки Img со значением из словаря
  }
  else document.getElementById('block1').innerHTML = "Что-то пошло не так";
}