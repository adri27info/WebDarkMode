const spans = document.querySelectorAll("nav span");
const db = window.localStorage;

spans.forEach((element) => {
  element.addEventListener("click", cambiarTemaBackground);
});

function cambiarTemaBackground(e) {
  let spanId = e.target.id;
  let elemento = e.target;
  comprobarElemento(spanId, elemento);
}

function comprobarElemento(spanId, elemento, condicion = true) {
  if (spanId === "icono_luna") {
    cambiarEstiloElementos("black", "white", elemento, "icono_sol");
    if (condicion) guardarTema("dark");
  } else if (spanId === "icono_sol") {
    cambiarEstiloElementos("white", "black", elemento, "icono_luna");
    if (condicion) guardarTema("light");
  }
}

function cambiarEstiloElementos(
  colorContainer,
  colorElementos,
  elementoActual,
  idSpanOcultar
) {
  document.getElementById("container").style.background = colorContainer;
  document.querySelectorAll("nav ul li").forEach((element) => {
    element.style.color = colorElementos;
  });
  document.getElementById("titulo").style.color = colorElementos;
  document.getElementById("parrafo").style.color = colorElementos;
  document.getElementById("parrafoFooter").style.color = colorElementos;
  elementoActual.classList.add("ocultar");
  document.getElementById(idSpanOcultar).classList.remove("ocultar");
}

function guardarTema(valor) {
  db.setItem("tema", JSON.stringify(valor));
}

function establecerTema() {
  let tema = JSON.parse(db.getItem("tema"));

  if (tema === "dark") {
    comprobarElemento(
      "icono_luna",
      document.getElementById("icono_luna"),
      false
    );
  } else if (tema === "light") {
    comprobarElemento("icono_sol", document.getElementById("icono_sol"), false);
  }
}

establecerTema();
