function calcular() {
    let nombre = document.getElementById('nombre').value;
    let inversion = document.getElementById('inversion').value;
    let rendimiento = document.getElementById('rendimiento').value;
    let años = document.getElementById('años').value;
    let ganancias = (inversion * (rendimiento / 100) * años);

    document.getElementById('el-resultado').innerHTML = ganancias;

    class inversionTotal {
        constructor(nombre, inversion, rendimiento, años, ganancias) {
            this.nombre = nombre;
            this.inversion = inversion;
            this.rendimiento = rendimiento;
            this.años = años;
            this.ganancias = ganancias;
        }
    }
    const contenedorHistorial = document.getElementById("contenedorHistorial");
    const arrayHistorial = [];

    arrayHistorial.push(new inversionTotal(nombre, inversion, rendimiento, años, ganancias))

    localStorage.clear();
    localStorage.setItem("HitorialInversion", JSON.stringify(arrayHistorial));

    let transacciones = JSON.parse(localStorage.getItem("transactionHistory")) || [];
    transacciones.forEach(item => {
        let itemHistorial = document.createElement("tr");
        itemHistorial.innerHTML = `
        <td>${item.id}</td>
        <td>${item.operacion}</td>
        <td>${item.monedaOperada}</td>
        <td>$ ${item.cantidad}</td>
        <td>${item.precio}</td>
    `;
        contenedorHistorial.append(itemHistorial);
    }); 
    }