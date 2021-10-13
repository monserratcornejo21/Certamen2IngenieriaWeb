//Funcion para habilitar campos de solo lectura del formulario y boton actualizar, al meter los datos
function editar(){
    let estatura:any = document.getElementById('estatura');
    let peso:any = document.getElementById('peso');
    let cardiaca:any = document.getElementById('cardiaca');
}
let region:any=document.getElementById("region");
  region.addEventListener("change", actualizarComunas);
  let comuna:any=document.getElementById("comuna");
  function actualizarComunas():void {
      while (comuna.firstChild){comuna.removeChild(comuna.firstChild);};
      switch (region.value) {
          case "0":// vacio
              let opcion_1:any=document.createElement("option");
              opcion_1.innerHTML = 'seleciona una comuna';
              comuna.appendChild(opcion_1);
              break;
          case "1": // Valparaiso
              let valparaiso:any=document.createElement("option");   valparaiso.innerHTML = 'Valparaíso';  comuna.appendChild(valparaiso);
              let vina:any=document.createElement("option"); vina.innerHTML = 'Viña del mar'; comuna.appendChild(vina);
              break;
          case "2":{ // Santiago
              let lascondes:any=document.createElement("option");   lascondes.innerHTML = 'Las Condes';  comuna.appendChild(lascondes);
              let recoleta:any=document.createElement("option"); recoleta.innerHTML = 'Recoleta'; comuna.appendChild(recoleta);
              let lapintana:any=document.createElement("option"); lapintana.innerHTML = 'La pintana'; comuna.appendChild(lapintana);
              break;
          }
      }
  }

  let datos=[{
    "id": 1, // Valparaiso
    "nombre":"Datos Antecedentes Clínicos",
    "datos":[
 {   formulario: 1
       }]},
];
function menu(){

    let menu:any=document.getElementById("menu");
    let seccion:any=document.getElementById("contenido");
    let cabeza:any=document.getElementsByTagName("div")[0];

    let variable:string="";
    let semana:string="";

    for(let i=0;i<datos.length;i++){
       
        let li:any=document.createElement("li");
        menu.appendChild(li).innerHTML="<a href='#' id='"+datos[i].id+"'>"+datos[i].nombre+"</a>";
        
        li.addEventListener("click",function(){


     //remover hijos de section
     let e=document.querySelector("section");
     let child=e?.lastElementChild;
 
     while(child){
         e?.removeChild(child);
         child=e?.lastElementChild;
     }
     //fin de hijos
     //remover hijos h1
     let e1=document.querySelector("div");
     let child1=e1?.lastElementChild;
 
     while(child1){
         e1?.removeChild(child1);
         child1=e1?.lastElementChild;
     }//remover hijos h1
              let ul:any=document.createElement("ul");
              let h1:any=document.createElement("h1");
              cabeza.appendChild(h1).innerHTML=""+datos[i].nombre;
              seccion.appendChild(ul);
              for(let j=0;j<datos[i].datos.length;j++){
                let li:any=document.createElement("li");
                switch(datos[i].datos[j].formulario){
                    case 1:
                        semana="motivo hospitalización";
                        break;
                    case 2: 
                        semana= "12 sept 2009" 
                        break 
                }
              }
          });
    }
}

window.addEventListener("load",menu);


function eliminar(){
    var d:any = document.getElementById("parte1");
    var d_nested:any = document.getElementById("antecedentes");
    var throwawayNode:any = d.removeChild(d_nested);
}
