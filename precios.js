
// Creando los servicios



document.addEventListener('DOMContentLoaded', function(){
    const elegirModulo = document.getElementById('box-function');
    elegirModulo.addEventListener('mouseover',pasarMouse)
});


function pasarMouse(){
    console.log('pasó el mouse por encima');
}


function ModulosSaia (nombreModulo, planModulo, valorModulo, alcancesModulo){
    this.nombreModulo = nombreModulo
    this.planModulo = planModulo
    this.valorModulo = valorModulo
    this.alcancesModulo = alcancesModulo
    this.tieneDescuento = false
    this.displayInfo = function (){
        console.log(`Información del módulo:

        Módulo: ${this.nombreModulo}
        Valor: ${this.planModulo}
        Alcances: ${this.alcancesModulo}
        Descuento: ${this.tieneDescuento ? 'Con descuento del 30%':'Sin descuento'} 
        `)
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

correspondencia.displayInfo()
gestionDocumental.displayInfo()
archivo.displayInfo()
