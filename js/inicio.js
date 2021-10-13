"use strict";
//Funcion para habilitar campos de solo lectura del formulario y boton actualizar, al meter los datos
function editar() {
    var estatura = document.getElementById('estatura');
    var peso = document.getElementById('peso');
    var cardiaca = document.getElementById('cardiaca');
}
var region = document.getElementById("region");
region.addEventListener("change", actualizarComunas);
var comuna = document.getElementById("comuna");
function actualizarComunas() {
    while (comuna.firstChild) {
        comuna.removeChild(comuna.firstChild);
    }
    ;
    switch (region.value) {
        case "0": // vacio
            var opcion_1 = document.createElement("option");
            opcion_1.innerHTML = 'seleciona una comuna';
            comuna.appendChild(opcion_1);
            break;
        case "1": // Valparaiso
            var valparaiso = document.createElement("option");
            valparaiso.innerHTML = 'Valparaíso';
            comuna.appendChild(valparaiso);
            var vina = document.createElement("option");
            vina.innerHTML = 'Viña del mar';
            comuna.appendChild(vina);
            break;
        case "2": { // Santiago
            var lascondes = document.createElement("option");
            lascondes.innerHTML = 'Las Condes';
            comuna.appendChild(lascondes);
            var recoleta = document.createElement("option");
            recoleta.innerHTML = 'Recoleta';
            comuna.appendChild(recoleta);
            var lapintana = document.createElement("option");
            lapintana.innerHTML = 'La pintana';
            comuna.appendChild(lapintana);
            break;
        }
    }
}
var datos = [{
        "id": 1,
        "nombre": "Datos Antecedentes Clínicos",
        "datos": [
            { formulario: 1
            }
        ]
    },
];
function menu() {
    var menu = document.getElementById("menu");
    var seccion = document.getElementById("contenido");
    var cabeza = document.getElementsByTagName("div")[0];
    var variable = "";
    var semana = "";
    var _loop_1 = function (i) {
        var li = document.createElement("li");
        menu.appendChild(li).innerHTML = "<a href='#' id='" + datos[i].id + "'>" + datos[i].nombre + "</a>";
        li.addEventListener("click", function () {
            //remover hijos de section
            var e = document.querySelector("section");
            var child = e === null || e === void 0 ? void 0 : e.lastElementChild;
            while (child) {
                e === null || e === void 0 ? void 0 : e.removeChild(child);
                child = e === null || e === void 0 ? void 0 : e.lastElementChild;
            }
            //fin de hijos
            //remover hijos h1
            var e1 = document.querySelector("div");
            var child1 = e1 === null || e1 === void 0 ? void 0 : e1.lastElementChild;
            while (child1) {
                e1 === null || e1 === void 0 ? void 0 : e1.removeChild(child1);
                child1 = e1 === null || e1 === void 0 ? void 0 : e1.lastElementChild;
            } //remover hijos h1
            var ul = document.createElement("ul");
            var h1 = document.createElement("h1");
            cabeza.appendChild(h1).innerHTML = "" + datos[i].nombre;
            seccion.appendChild(ul);
            for (var j = 0; j < datos[i].datos.length; j++) {
                var li_1 = document.createElement("li");
                switch (datos[i].datos[j].formulario) {
                    case 1:
                        semana = "motivo hospitalización";
                        break;
                    case 2:
                        semana = "12 sept 2009";
                        break;
                }
            }
        });
    };
    for (var i = 0; i < datos.length; i++) {
        _loop_1(i);
    }
}
window.addEventListener("load", menu);
function eliminar() {
    var d = document.getElementById("parte1");
    var d_nested = document.getElementById("antecedentes");
    var throwawayNode = d.removeChild(d_nested);
}
