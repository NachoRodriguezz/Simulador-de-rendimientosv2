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
    setTimeout(() => {
        mostrarHistorial();
    }, 3000);
    Toastify({
        text: "Su inversion a sido guardada en el historial!",
        duration: 3000
    }).showToast();
};

function mostrarHistorial() {
    transacciones.forEach(item => {
        let itemHistorial = document.createElement("tr");
        itemHistorial.innerHTML = `
        <tr><p>Invirtio en ${item.nombre}.</p></tr>
        <tr><p>Su inversion fue de $${item.inversion}.</p></tr>
        <tr><p>Su rendimiento anual fue de %${item.rendimiento}.</p></tr>
        <tr><p>Cantidad de años ${item.años}.</p></tr>
        <tr><p>Sus ganancias sin contar la inversion fue de $${item.ganancias}.</p></tr>
        </hr>
        `;
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
document.getElementById("botonCalcular").addEventListener('click', calcular);
mostrarHistorial();

function borrarHistorial() {
    localStorage.clear();
    transacciones = [];
    JSON.stringify(localStorage.setItem(transacciones))
    mostrarHistorial();
}

let boton = document.getElementById("borrarHistorial");

boton.addEventListener("click", () => {
    Toastify({
        text: "Su historial a sido borrado correctamente!",
        duration: 5000
    }).showToast();
    borrarHistorial();
});

//api cryptocurrensy precios

    fetch('https://api.binance.com/api/v3/ticker/price')
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))


const mostrarData = (data)=>{
    let body = ''
    for (let i=0; i < data.length; i++) {
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}    