export function validarFormulario(datos){
    
    //Referencias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaregistro=document.getElementById("registro")

    //validamos tres campos del formulario
    //nombre-documento-registro de medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    let registroMedico=datos.registro

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombresMedico=="" && documentoMedico==""){
       etiquetaNombre.classList.add("is-invalid")
       etiquetaDocumento.classList.add("is-invalid")
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios',
      })
    }else if(nombresMedico=="" && documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")  
    }else if(nombresMedico!="" && documentoMedico==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        alert("nos vamos para la bd")
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }
}