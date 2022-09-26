function calcular() {
    let nombre = document.getElementById('nombre').value;
    let inversion = document.getElementById('inversion').value;
    let rendimiento = document.getElementById('rendimiento').value;
    let años = document.getElementById('años').value;
    let ganancias = (inversion * (rendimiento / 100) * años);

    document.getElementById('el-resultado').innerHTML = ganancias;

    let resultadoHistorial = ganancias;
    localStorage.setItem(nombre, resultadoHistorial);
}

const arrayHistorial = []; 

arrayHistorial.push = JSON.parse(localStorage.getItem()) || 'El historial esta vacio';

document.getElementById('historial').innerHTML = arrayHistorial; 
