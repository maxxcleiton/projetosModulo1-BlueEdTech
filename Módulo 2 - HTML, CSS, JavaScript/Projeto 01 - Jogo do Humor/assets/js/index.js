let modelo = document.querySelector(".modelo");
let legenda = document.querySelector("#legenda");

let i = 0;

function mudarImagem() {
  i++;
  if (i == 1){
    modelo.setAttribute("src", "assets/img/cavernas.jpg");
    legenda.setAttribute("alt", "Robert Pattinson no filme The Lost City Of Z, de 2016");
    legenda.innerHTML = "<h2>The Lost City Of Z (2016)</h2>";
  } else if (i == 2){
    modelo.setAttribute("src", "assets/img/goodtimes.jpg");
    legenda.setAttribute("alt", "Robert Pattinson no filme Good Times, de 2017");
    legenda.innerHTML = "<h2>Good Times (2017)</h2>";
  } else if (i == 3){
    modelo.setAttribute("src", "assets/img/batman.jpg");
    legenda.setAttribute("alt", "Robert Pattinson no filme The Batman, de 2022");
    legenda.innerHTML = "<h2>The Batman (2022)</h2>";
  } else if (i == 4){
    modelo.setAttribute("src", "assets/img/king.jpg");
    legenda.setAttribute("alt", "Robert Pattinson no filme The King, de 2019");
    legenda.innerHTML = "<h2>The King (2019)</h2>"
  } else if (i == 5){
    modelo.setAttribute("src", "assets/img/cullen.jpg");
    legenda.setAttribute("alt", "Robert Pattinson no filme Twilight, de 2008");
    legenda.innerHTML = "<h2>Twilight (2008)</h2>";
  } else if (i == 6){
    modelo.setAttribute("src", "./assets/img/batman-dressed.jpg");
    modelo.setAttribute("alt", "Robert Pattinson no filme The Batman, de 2022");
    legenda.innerHTML = "<h2>The Batman (2022)</h2>";
  }

  if (i > 5){
    i = 0; // aqui ele zera pra voltar do início
 
  }
}