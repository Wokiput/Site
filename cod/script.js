window.onload = init;
a=["0","1","2","3","4","FeO","6","7","8","9"];
b=["Ноль","Один","Два","Три","Четыре","Оксид Железа","Шесть","Семь","Восемь","Девять"]
function init(){
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
  for(i=0;i<=10;i++){
    if(document.getElementById("Input").value == a[i]) document.writeln(b[i]);
  }
}
