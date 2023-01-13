//IMPORTACIONES
import {capturarDatos} from '../formularios/formulariopacientes.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonregistrar")
let etiquetaDocumento=document.getElementById("identificacion")
let etiquetaregimen=document.getElementById("regimen")
let etiquetatelefono=document.getElementById("telefono")
let etiquetacorreo=document.getElementById("correo")
let etiquetaGrupoingreso=document.getElementById("grupoingresos")
let etiquetaCuotamoderadora=document.getElementById("cuotamoderadora")


//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaregimen,etiquetaBoton,etiquetacorreo,etiquetatelefono,etiquetaGrupoingreso,etiquetaCuotamoderadora)
   
})