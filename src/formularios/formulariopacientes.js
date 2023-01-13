import{validarFormulario} from './validacionFormularioPaciente.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaRegistrar,etiquetacorreo,etiquetaTelefono,etiquetaGrupoingreso,etiquetaCuotamoderadora){

    let nombresPaciente=etiquetaNombre.value
    let identificacionPaciente=etiquetaDocumento.value
    let regimenPaciente=etiquetaRegimen.value
    let correoPaciente=etiquetacorreo.value
    let telefonoPaciente=etiquetaTelefono.value
    let grupoingresoPaciente=etiquetaGrupoingreso.value
    let cuotamoderadoraPaciente=etiquetaCuotamoderadora.value
    

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
    let datosFormularioPaciente={
        nombre:nombresPaciente,
        identificacion:identificacionPaciente,
        regimen:regimenPaciente,
        correo:correoPaciente,
        telefono:telefonoPaciente,
        grupoingreso:grupoingresoPaciente,
        cuotamoderadora:cuotamoderadoraPaciente,
    }
    validarFormulario(datosFormularioPaciente)

}