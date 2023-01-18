export async function consultarpacientes(){
    //consumiendo API
    //1. Conocer la direccion del API
    //API O SERVICIO
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    //2. configurar a que voy al API
    //CONFIGURANDO LA REQUEST O PETICION
    let peticion={
        method:"GET",
    
    }
    //3. CONSUMIR
    //TRAER LOS DATOS DEL API
    let respuesta=await fetch(url,peticion)
    let pacientes=await respuesta.json()

    return(pacientes)
    
}