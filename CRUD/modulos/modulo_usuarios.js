const solicitud = async (url) => {
    let solicitar = await fetch(`http://127.0.0.1:3000/${url}`);
    let respuesta = await solicitar.json()
    return respuesta;
}

export default solicitud;