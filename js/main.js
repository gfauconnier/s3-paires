var bgi, flag = 0, compteur = 0, nbTentatives = 0,
  tempCard = [0, 0];
var arr = ["#FFFFFF", "#FFFFFF", "#FF8888", "#FF8888", "#FF0000", "#FF0000", "#00FF00", "#00FF00", "#0000FF", "#0000FF", "#8888FF", "#8888FF", "#88FF88", "#88FF88"];

document.getElementById("replay").addEventListener('click', function(){won(0)});
var cards = document.getElementsByClassName("card");
Array.from(cards).forEach(function(element) {
  element.addEventListener('click', testCard);
});

var cardBack = document.getElementsByClassName("choiceBack");
Array.from(cardBack).forEach(function(element, index) {
  element.style.backgroundImage = "url(img/cardback" + index + ".jpg)"
  element.addEventListener('click', choseBack);
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
    cards[index].style.backgroundColor = arr[index];
  });
}


function testCard() {
  var nb = this.id;
  if (this.classList.contains("dhidd")) {

    if (flag == 0) {
      tempCard[0] = this.style.backgroundColor;
      tempCard[1] = this.id;
      document.getElementById(this.id).style.backgroundImage = "";
      document.getElementById(this.id).classList.remove("dhidd");
      flag++;
    } else if (tempCard[0] == this.style.backgroundColor) {
      document.getElementById(this.id).style.backgroundImage = "";
      document.getElementById(this.id).classList.remove("dhidd");
      flag = 0;
      compteur++;
      nbTentatives++;
    } else {
      document.getElementById(this.id).classList.remove("dhidd");
      document.getElementById(this.id).style.backgroundImage = "";
      flag = 0;
      setTimeout(function() {
        document.getElementById(tempCard[1]).classList.add("dhidd");
        document.getElementById(nb).classList.add("dhidd");
        document.getElementById(tempCard[1]).style.backgroundImage = bgi;
        document.getElementById(nb).style.backgroundImage = bgi;
      }, 500);
      nbTentatives++;
    }

  }

  if (compteur == 7) {
    won(1);
  }
}

function won(repl) {
  if (repl == 0) {
    document.getElementById("replay").classList.toggle("d-none");
    document.getElementById("resultat").innerHTML = "";
    Array.from(cards).forEach(function(element){element.classList.toggle("dhidd"); console.log(element);});
    cardReset();
    document.getElementById("choices").classList.toggle("d-none");
    document.getElementById("sect").classList.toggle("d-none");
  }
  else {
    document.getElementById("resultat").innerHTML = "You have won in " + nbTentatives + " trys !";
    document.getElementById("replay").classList.toggle("d-none");
    nbTentatives = 0;
    compteur = 0;
  }
}

function choseBack() {
  bgi = this.style.backgroundImage;
  var dhidd = document.getElementsByClassName("dhidd");
  Array.from(dhidd).forEach(function(element) {
     element.style.backgroundImage = bgi;
  });
  document.getElementById("choices").classList.toggle("d-none");
  document.getElementById("sect").classList.toggle("d-none");
}
