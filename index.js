function calcular() {
    let nombre = document.getElementById('nombre').value;
    let inversion = document.getElementById('inversion').value;
    let rendimiento = document.getElementById('rendimiento').value;
    let años = document.getElementById('años').value;
    let ganancias = (inversion * (rendimiento / 100) * años);
    document.getElementById('el-resultado').innerHTML = ganancias = (ganancias || "Tus ganancias son nulas");

    transacciones.push(new inversionTotal(nombre, inversion, rendimiento, años, ganancias))
    localStorage.clear();
    localStorage.setItem("transactionHistory", JSON.stringify(transacciones));
    mostrarHistorial();
    Toastify({
        text: "Su inversion a sido guardada en el historial!",
        duration: 3000
      }).showToast();
};

function mostrarHistorial(){
    transacciones.forEach(item => {
        let itemHistorial = document.createElement("tr");
        itemHistorial.innerHTML = `
        <tr><p>Invirtio en  ${item.nombre} /</p></tr>
        <tr><p>Su inversion fe de $${item.inversion} /</p></tr>
        <tr><p>Su rendimiento anual fue de %${item.rendimiento}/</p></tr>
        <tr><p>Cantidad de años${item.años}/</p></tr>
        <tr><p>Sus ganancias sin contar la inversion fue de $${item.ganancias}/</p></tr>`;
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
/* 
document.getElementById("borrarHistorial").addEventListener('click',borrarHistorial);
 */
let boton = document.getElementById("borrarHistorial");

boton.addEventListener("click", () => {
  Toastify({
    text: "Su historial a sido borrado correctamente!",
    duration: 5000
  }).showToast();
  borrarHistorial();
});

