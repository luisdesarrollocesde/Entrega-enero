//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioMedicos.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaespecialidad=document.getElementById("especialidad")
let etiquetaregistro=document.getElementById("registro")
let etiquetacorreo=document.getElementById("correo")
let etiquetasedes=document.getElementById("sedes")
let etiquetahorarios=document.getElementById("horarios")
let etiquetadescripcion=document.getElementById("descripcion")
let etiquetafotografia=document.getElementById("fotografia")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaespecialidad,etiquetaregistro,etiquetacorreo,etiquetasedes,etiquetahorarios,etiquetadescripcion,etiquetafotografia)
   
})