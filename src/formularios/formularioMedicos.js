import{validarFormulario} from './validacionFormularioMedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetacorreo,etiquetasedes,etiquetahorarios,etiquetadescripcion,etiquetafotografia){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetacorreo.value
    let sedesMedico=etiquetasedes.value
    let horariosMedico=etiquetahorarios.value
    let descripcion=etiquetadescripcion.value
    let fotografia=etiquetafotografia.value

    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)
    // console.log(registroMedico)
    // console.log(correoMedico)
    // console.log(sedesMedico)
    // console.log(horariosMedico)
    // console.log(descripcion)
    // console.log(fotografia)

    //Debemos almacenar todos los valores del formulario
    //en una sola variable
    //Objeto= almacenar varios datos en un solo espacio de memoria
    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroMedico,
        correo:correoMedico,
        sedes:sedesMedico,
        horario:horariosMedico,
        descripcion:descripcion,
        foto:fotografia,
     }

    validarFormulario(datosFormularioMedico)


}

