var flag = 0,
tempCard = [0, 0];
var arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

var ps = document.getElementsByTagName("p");

var btns = document.getElementsByTagName("button");
Array.from(btns).forEach(function(element) {element.addEventListener('click', testCard)});

cardReset();

function cardReset() {
  var temp, rand;
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i];
    rand = Math.floor(Math.random() * arr.length);
    arr[i] = arr[rand];
    arr[rand] = temp;
  }
  arr.forEach(function(item, index) {
    ps[index].innerHTML = item;
  });
}


function testCard() {
  var nb = this.id;
  if (flag == 0) {
    tempCard[0] = ps[nb].innerHTML;
    tempCard[1] = this.id;
    document.getElementById(this.id).classList.add("dhidd");
    flag++;
  } else if (tempCard[0] == ps[nb].innerHTML) {
    document.getElementById(this.id).classList.add("dhidd");
    flag = 0;
  } else {
    document.getElementById(this.id).classList.add("dhidd");
    flag = 0;
    setTimeout(function(){
      document.getElementById(tempCard[1]).classList.remove("dhidd");
      document.getElementById(nb).classList.remove("dhidd");
    },500);
  }
}
