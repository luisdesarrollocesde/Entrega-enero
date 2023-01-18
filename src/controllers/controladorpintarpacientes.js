import{consultarpacientes} from '../../services/consultapacientes.js'

console.log("es mi ultima clase")

let fila=document.getElementById("fila")

consultarpacientes().then(function(respuesta){
    respuesta.datos.forEach(function(paciente){
        console.log(paciente)

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")

        let fotografia=document.createElement("img")
        fotografia.src=paciente.fotografia
        fotografia.classList.add("img-fluid","w.100")

        let nombres=document.createElement("h3")
        nombres.classList.add("text-center")
        nombres.textContent=paciente.nombres

        //Padres e hijos
        tarjeta.appendChild(fotografia)
        tarjeta.appendChild(nombres)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})