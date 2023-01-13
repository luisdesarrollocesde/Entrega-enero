export function validarFormulario(datos){
    
    //Referencias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("identificacion")
    

    //validamos tres campos del formulario
    //nombre-documento-registro de medico
    let nombresPaciente=datos.nombre
    let documentoPaciente=datos.identificacion
    

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombresPaciente=="" && documentoPaciente==""){
       etiquetaNombre.classList.add("is-invalid")
       etiquetaDocumento.classList.add("is-invalid")
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios',
      })
    }else if(nombresPaciente=="" && documentoPaciente!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")  
    }else if(nombresPaciente!="" && documentoPaciente==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        alert("nos vamos para la bd")
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }
}