var flag = 0, compteur = 0, nbTentatives = 0,
  tempCard = [0, 0];
var arr = ["FFFFFF", "FFFFFF", "000000", "000000", "FF0000", "FF0000", "00FF00", "00FF00", "0000FF", "0000FF", "555555", "555555", "AAAAAA", "AAAAAA"];

var ps = document.getElementsByTagName("p");

var btns = document.getElementsByTagName("div");
Array.from(btns).forEach(function(element) {
  element.addEventListener('click', testCard)
});

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
    btns[index].style.backgroundColor = "#" + arr[index];
  });
}


function testCard() {
  var nb = this.id;
  if (this.classList.contains("dhidd")) {

    if (flag == 0) {
      tempCard[0] = ps[nb].innerHTML;
      tempCard[1] = this.id;
      document.getElementById(this.id).classList.remove("dhidd");
      flag++;
    } else if (tempCard[0] == ps[nb].innerHTML) {
      document.getElementById(this.id).classList.remove("dhidd");
      flag = 0;
      compteur++;
      nbTentatives++;
    } else {
      document.getElementById(this.id).classList.remove("dhidd");
      flag = 0;
      setTimeout(function() {
        document.getElementById(tempCard[1]).classList.add("dhidd");
        document.getElementById(nb).classList.add("dhidd");
      }, 500);
      nbTentatives++;
    }
  }
  console.log(compteur)
  if (compteur == 7) {
    document.getElementById("resultat").innerHTML = "Vous avez gagné en " + nbTentatives + " tentatives";
  }
}
