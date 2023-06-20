let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

  //detecto el scrolling para aplicar la animacion de la barra de habilidades
  window.onscroll = function(){
      efectoHabilidades();
  } 

  // obtén el botón
  var button = document.getElementById("modo");

  // agrega un evento click al botón
  button.addEventListener("click", function() {
    // obtén la hoja de estilo actual
    var currentTheme = document.getElementById("theme");

    // si la hoja de estilo actual es "dark.css", cambia a "light.css"
    if (currentTheme.getAttribute("href") == "estilo.css") {
      currentTheme.href = "ligth.css";
    }
    // si la hoja de estilo actual es "light.css", cambia a "dark.css"
    else {
      currentTheme.href = "estilo.css";
    }
  });
  const modoBtn = document.querySelector("#modo");
  const modoIcon = modoBtn.querySelector("i");
  
  let iconColor = "white";
  
  modoBtn.addEventListener("click", function() {
    if (iconColor === "white") {
      modoIcon.style.color = "black";
      iconColor = "black";
    } else {
      modoIcon.style.color = "white";
      iconColor = "white";
    }
  });
  