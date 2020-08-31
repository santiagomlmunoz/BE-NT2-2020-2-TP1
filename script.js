const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
let itemCountSpan = document.getElementById('item-count');
let uncheckedCountSpan = document.getElementById('unchecked-count');

const table = document.createElement('table');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');

crearTabla();

function crearTabla(){
table.classList.add("table");
list.append(table);
table.append(tr);
tr.append(th1,th2,th3);

th1.innerText = 'Nombre';
th2.innerText = 'Fecha';
th3.innerText = 'Realizada?';
}

function addTodo() {
  let nombreTarea = prompt('Ingrese descripción de la nueva tarea'); 
  let confirmar = false
  if(!(nombreTarea === null) && !(nombreTarea === '')){
    confirmar = confirm('Confirma que desea agregar la tarea "' + nombreTarea + '"?'); 
  }
    if(confirmar){
    alert('Agregó la tarea "' + nombreTarea + '"');
    agregarRow(nombreTarea)
  }
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function agregarFecha(){
  
  var today = new Date();
  var date = 
  addZero(today.getDate()) +'/'+ 
  addZero((today.getMonth()+1)) + '/'+
  today.getFullYear() + ' ' + 
  addZero(today.getHours()) + ':' + 
  addZero(today.getMinutes()) + ':' + 
  addZero(today.getSeconds());
  
  return date;
}

function agregarRow(nombreTarea){

  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  tr.append(td1,td2,td3);
  
  td1.innerText = nombreTarea;
  td2.innerText = agregarFecha();
  td3.innerHTML = "<button class='btn-info' onClick = 'realizarTarea(); this.disabled = true; cambiarColor(this)'>Realizar</button>";
 
  table.append(tr);

  sumarTarea();

}

function sumarTarea(){
  let count = parseInt(itemCountSpan.innerText);
  count ++;
  itemCountSpan.innerText = count.toString()

  let uncount = parseInt(uncheckedCountSpan.innerText);
  uncount ++;
  uncheckedCountSpan.innerText = uncount.toString()
}

function realizarTarea(){
  let count = parseInt(uncheckedCountSpan.innerText);
  count --;
  uncheckedCountSpan.innerText = count.toString()
}

function cambiarColor(td3){
  td3.classList.remove('btn-info')
  td3.classList.add('btn-success')
  td3.innerText = "Realizada!";
}
