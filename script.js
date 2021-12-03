var selectedRow = null;
function Formulario(e){
    event.preventDefault();
    var formData = leerDatos();
    if(selectedRow === null){
        insertarRegistro(formData);
    }
    else{
        actualizarRegistro(formData);
    }
    restablecerFormulario();
}

//Leer Datos
function leerDatos(){
    var formData = {};
    formData["codigoProducto"] = document.getElementById("codigoProducto").value;
    formData["producto"] = document.getElementById("producto").value;
    formData["presentacion"] = document.getElementById("presentacion").value;
    formData["tipo"] = document.getElementById("tipo").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    formData["precio"] = document.getElementById("precio").value;
    return formData;
}

//Insertar Datos
function insertarRegistro(data){
    var table = document.getElementById("listaTienda").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.codigoProducto;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.producto;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.presentacion;    
    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.tipo;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.cantidad;
    var cell3 = newRow.insertCell(5);
        cell3.innerHTML = data.precio;
    var cell5 = newRow.insertCell(6);
        cell5.innerHTML = `<button onClick='editarDatos(this)'>Editar</button> <button onClick='Eliminar(this)'>Eliminar</button>`
}

//Editar Datos
function editarDatos(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('codigoProducto').value = selectedRow.cells[0].innerHTML;
    document.getElementById('producto').value = selectedRow.cells[1].innerHTML;
    document.getElementById('presentacion').value = selectedRow.cells[2].innerHTML;
    document.getElementById('tipo').value = selectedRow.cells[3].innerHTML;
    document.getElementById('cantidad').value = selectedRow.cells[4].innerHTML;
    document.getElementById('precio').value = selectedRow.cells[5].innerHTML;
}

function actualizarRegistro(formData){
    selectedRow.cells[0].innerHTML = formData.codigoProducto;
    selectedRow.cells[1].innerHTML = formData.producto;
    selectedRow.cells[2].innerHTML = formData.presentacion;
    selectedRow.cells[3].innerHTML = formData.tipo;
    selectedRow.cells[4].innerHTML = formData.cantidad;
    selectedRow.cells[5].innerHTML = formData.precio;
}

//Eliminar Datos
function Eliminar(td){
    if(confirm('¿Seguro que deseas eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('listaTienda').deleteRow(row.rowIndex);
    }
    restablecerFormulario();
}

//Restablecer Formulario
function restablecerFormulario(){
    document.getElementById('codigoProducto').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('presentacion').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
}