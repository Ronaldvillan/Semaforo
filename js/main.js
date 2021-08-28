console.log('Semaforo')

var estadoSemaforo = 0
function cambiarSemaforo() {
    console.log(estadoSemaforo)

    switch (estadoSemaforo) {
        /* ROJO*/
        case 0:
            cambiarLuzSemaforo('red', true)
            cambiarLuzSemaforo('yellow', false)
            cambiarLuzSemaforo('green', false)

            break
        /* ROJO-AMARILLO*/
        case 1:
            cambiarLuzSemaforo('red', true)
            cambiarLuzSemaforo('yellow', true)
            cambiarLuzSemaforo('green', false)

            break
        /* VERDE*/
        case 2:
            cambiarLuzSemaforo('red', false)
            cambiarLuzSemaforo('yellow', false)
            cambiarLuzSemaforo('green', true)

            break
        /* AMARILLO*/
        case 3:
            cambiarLuzSemaforo('red', false)
            cambiarLuzSemaforo('yellow', true)
            cambiarLuzSemaforo('green', false)

            break
        /* DEFAULT*/
        default:
            cambiarLuzSemaforo('red', true)
            cambiarLuzSemaforo('yellow', true)
            cambiarLuzSemaforo('green', true)
            estadoSemaforo = 0
            break

    }
    estadoSemaforo++
    if (estadoSemaforo > 3) estadoSemaforo = 0
}

function cambiarLuzSemaforo(id, prender) {
    var color = 'gray'
    if (prender) color = id
    document.getElementById(id).style.backgroundColor = color
}

function cambiarSemaforoBoton() {
    if (!modoAuto) cambiarSemaforo()
}

var modoAuto = false
var refTimer
function cambiarModo() {
    //console.log('cambiarModo')
    modoAuto = !modoAuto
    console.log(modoAuto)

    if (modoAuto) {
        refTimer = setInterval(cambiarSemaforo, 2000)
    }
else{
    clearInterval(refTimer)
}
document.querySelector('h4').innerText = modoAuto? 'MODO AUTOMATICO' : 'MODO MANUAL'

}

cambiarLuzSemaforo('red',false)
cambiarLuzSemaforo('yellow',false)
cambiarLuzSemaforo('green',false)

