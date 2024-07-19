
// Creando los servicios

const elegirModulo1 = document.getElementById('clic-info-modulo1')
const elegirModulo2 = document.getElementById('clic-info-modulo2')
const elegirModulo3 = document.getElementById('clic-info-modulo3')

const mostrarInfoModulo = document.getElementById('infodeModulos')

elegirModulo1.addEventListener('click',clickInfo1)
elegirModulo2.addEventListener('click',clickInfo2)
elegirModulo3.addEventListener('click',clickInfo3)

function ModulosSaia (nombreModulo, planModulo, valorModulo, alcancesModulo){
    this.nombreModulo = nombreModulo
    this.planModulo = planModulo
    this.valorModulo = valorModulo
    this.alcancesModulo = alcancesModulo
    this.tieneDescuento = false
    this.displayInfo = function (){
        return `
        <b> Módulo:</b> ${this.nombreModulo} </br></br>
        <b>Valor:</b> ${this.planModulo} </br>
        <b>Alcances:</b> ${this.alcancesModulo} </br>
        <b> Descuento:</b> ${this.tieneDescuento ? 'Con descuento del 30%':'Sin descuento'} 
        `
    }
    this.aplicarDescuento = function (){
        this.tieneDescuento = true
        console.log(`El módulo ${this.nombreModulo} tiene el descuento.`)
        }
}
const correspondencia = new ModulosSaia ('Correspondencia','Basic','US$ 50','Recepción y Despacho, Múltiples Ventanillas, Recepción de Emails, Ventanilla Virtual, Codificación QR')
const gestionDocumental = new ModulosSaia ('Gestión Documental','Standard','US$ 150', 'Formatos de Gestión, Rutas de aprobación, Firma electrónica, Modelador de Formatos, Comprobación de lectura')
const archivo = new ModulosSaia ('Archivo','Standard','US$ 100','Estandarización de archivo, Archivo Físico, Custodia, Préstamos y Reservas, Reportes')


gestionDocumental.aplicarDescuento()


function clickInfo1(){
    mostrarInfoModulo.innerHTML = correspondencia.displayInfo()
}
function clickInfo2(){
    mostrarInfoModulo.innerHTML = gestionDocumental.displayInfo()
}
function clickInfo3(){
    mostrarInfoModulo.innerHTML = archivo.displayInfo()
}

