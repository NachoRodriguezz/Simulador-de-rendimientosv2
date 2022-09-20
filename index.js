function sumar(inversion, rendimiento){
    var inversion = parseInt(document.getElementById('inversion'));
    var rendimiento = parseInt(document.getElementById('rendimiento'));
    document.getElementById('el-resultado').innerHTML = inversion + rendimiento;
}