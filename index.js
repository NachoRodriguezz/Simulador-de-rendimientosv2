function calcular() {
    let nombre = document.getElementById('nombre').value;
    let inversion = document.getElementById('inversion').value;
    let rendimiento = document.getElementById('rendimiento').value;
    let años = document.getElementById('años').value;
    let ganancias = (inversion * (rendimiento / 100) * años);
    document.getElementById('el-resultado').innerHTML = ganancias;
    transacciones.push(new inversionTotal(nombre, inversion, rendimiento, años, ganancias))
    localStorage.clear();
    localStorage.setItem("transactionHistory", JSON.stringify(transacciones));
    mostrarHistorial();
};

function mostrarHistorial(){
    transacciones.forEach(item => {
        let itemHistorial = document.createElement("tr");
        itemHistorial.innerHTML = `
        <td> Invirtio en  ${item.nombre} /</td>
        <td>Su inversion fe de $${item.inversion} /</td>
        <td>Su rendimiento anual fue de %${item.rendimiento}/</td>
        <td>Cantidad de años${item.años}/</td>
        <td>Sus ganancias sin contar la inversion fue de $${item.ganancias}/</td>`;
        contenedorHistorial.append(itemHistorial);
    });
}

class inversionTotal {
    constructor(nombre, inversion, rendimiento, años, ganancias) {
        this.nombre = nombre;
        this.inversion = inversion;
        this.rendimiento = rendimiento;
        this.años = años;
        this.ganancias = ganancias;
    }
}
    
const contenedorHistorial = document.getElementById("historial");
const transacciones = JSON.parse(localStorage.getItem("transactionHistory")) || [];
document.getElementById("botonCalcular").addEventListener('click',calcular);
mostrarHistorial();

function borrarHistorial() {
    localStorage.clear("transactionHistory");
}

document.getElementById("borrarHistorial").addEventListener('click',borrarHistorial);