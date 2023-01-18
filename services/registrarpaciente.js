export async function registrarpaciente(paciente){

    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    
    let peticion={
        method:"POST",
        body:JSON.stringify(paciente)
        
    }
    
    let respuesta=await fetch(url,peticion)
    let respuestaok=await respuesta.json()
    
    
    }