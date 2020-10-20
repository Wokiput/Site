window.onload = init;
var mformula = { "ch4" : "Метан", "c2h6" : "Этан", "c3h8" : "Пропан", "c4h10" : "Бутан", "c5h12" : "Пентан", "c6h14" : "Гексан", "c7h16" : "Гептан", "c8h18" : "Октан", "c9h20" : "Нонан", "c10h22" : "Декан"}; //mainformula
var fname = { "метан" : "ch4", "этан" : "c2h6", "пропан" : "c3h8", "бутан" : "c4h10", "пентан" : "c5h12", "гексан" : "c6h14", "гептан" : "c7h16", "октна" : "c8h18", "нонан" : "c9h20", "декан" : "c10h22"}; //обратный словарь
var prefix = ["ди","три","тетра","пента","гекса","гепта","окта","нона","дека"];             //греческие приставки, для определения их в слове и удаления(затирания) в этом слове
var sformula = {"метил" : "ch3", "этил" : "c2h5", "пропил" : "c3h7", "бутил" : "c4h9", "пентил" : "c5h11", "гексил" : "c6h13", "гептил" : "c7h15", "октил" : "c8h17", "нонил" : "c9h19", "декил" : "c10h21"}; //secondaryformula
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
  var stroka = document.getElementById("Input").value.toLowerCase();                        //преобразует введённое значение в строку нижнего регистра
  stroka = stroka.replace(/\s+/g, '');                                                      //заменяет все пробелы на незначемые символы (удаляет их)
  var mstroka = stroka;  
    if (mformula.hasOwnProperty(stroka)){                                                   //ищет преобразованную строку в словаре
      document.getElementById('block1').innerHTML = mformula[stroka];                       //выводит значение из словаря 
      document.getElementById("mainimage").src = 'img/main/'+stroka.toLowerCase()+'.png'    //выводит изображение из папки Img со значением stroka если оно есть в словаре
      return;
    }
    else if(fname.hasOwnProperty(stroka)){ 
      stroka = fname[stroka];                                                               //если введено название, то смотрит во втором словаре и подставляет вместо него значение из словаря
      document.getElementById('block1').innerHTML = stroka;
      document.getElementById("mainimage").src = 'img/main/'+stroka.toLowerCase()+'.png'    //выводит изображение из папки Img со значением из словаря
      return;
    }                                                                                       //ВСЁ ЧТО ВЫШЕ - РАБОТАЕТ!!!
  
    /*else { stroka.split('-');                                                                 //делит строку введённую с заданным стандартом '1,2-демитил-пентан' на массив из трёх элиментов по тире
      fstroka = stroka[2].replace("-", '');                                                     //берёт последний элимент массива и проделывает ту же работу что и с простым названием
      if(fname.hasOwnProperty(fstroka)){ 
        fstroka = fname[fstroka];                                                             //если введено название основания, то смотрит во втором словаре и подставляет вместо него значение из словаря
        document.getElementById('block1').innerHTML = mstroka;
        document.getElementById("mainimage").src = 'img/main/'+fstroka.toLowerCase()+'.png'   //выводит основное изображение из папки Img со значением из словаря
      }
      var mesto = stroka[0].split(',');
      var n=0;
      while(n<10){
        numimg[n]=stroka[1];
        var i=0;  
          while(i<10){
            var numimg[n] = numimg[n].replace(prefix[i], "");
            i++;
          }
        if(sformula.hasOwnProperty(numimg[n])){ 
          sformula = sformula[numimg[n]];                                                     //если введено название основания, то смотрит во втором словаре и подставляет вместо него значение из словаря
          var id = "image"+n.toString();
          document.getElementById(id).src = 'img/sec/'+sformula.toLowerCase()+'.png'          //выводит основное изображение из папки Img со значением из словаря
        }  
      n++;
      }
      return;
    }
  */}