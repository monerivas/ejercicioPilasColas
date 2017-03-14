function Stack(){
  var arrayVacio=[];
  this.push= function(element){
    arrayVacio.push(element);
  };
  this.pop= function(){
    return arrayVacio.pop();
  };
  this.peek= function(){
    return arrayVacio[arrayVacio.length-1] /*Se pone el -1 por el
    desplazamiento de los indices(que empiezan en 0), si tengo 4 items,
    para saber lo que donde esta el ultimo item (el item 4) tengo que
    restarle 1 a la longitud(que es de 4), porque el item 4 esta
    en la posicion/indice. PORQUE se ponen arrayNombre[blablabla]?*/
  };
  this.isEmpty= function(){
    return arrayVacio.length === 0;
  };
  this.size= function(){
    return arrayVacio.length;
  };
  this.clear= function(){
    arrayVacio=[];
  };
  this.print= function(){
    console.log(arrayVacio);
  };
}


function nombresCompletos(){

  var arregloNombre= new Stack();
  arregloNombre.push("ana");
  arregloNombre.push("zita");
  arregloNombre.push("mone");
  arregloNombre.push("mariana");
  arregloNombre.push("macarena");
  return arregloNombre.peek();
  arregloNombre.print();


  var arregloApellidos= new Stack();
  arregloApellidos.push("escalante");
  arregloApellidos.push("mezei");
  arregloApellidos.push("rivas");
  arregloApellidos.push("rayon");
  arregloApellidos.push("romero");
  return arregloApellidos.peek();
  arregloApellidos.print();


  var nombres=[];
  for(var i=0; i<=nombre.length; i++){
    nombres.push(nombre.pop() + " " + apellidos.pop());
    //si lo concateno con += se guarda como string, y son push se guarda como array.
    return nombres;
  };
}

nombresCompletos();

/*

function agregarNombre(nombre){
  var arregloNombre= new Stack();
  arregloNombre.push("ana");
  arregloNombre.push("zita");
  arregloNombre.push("mone");
  arregloNombre.push("mariana");
  arregloNombre.push("macarena");
  return arregloNombre.peek;

}

function agregarApellidos(apellidos){
  var arregloApellidos= new Stack();
  for(var i=0; i<5; i++){
    arregloApellidos.push(apellidos);
  };
  arregloApellidos.push("escalante");
  arregloApellidos.push("mezei");
  arregloApellidos.push("rivas");
  arregloApellidos.push("rayon");
  arregloApellidos.push("romero");
  return arregloApellidos.peek;
}
*/
