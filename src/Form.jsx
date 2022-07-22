const Formulario = () => {
    return(
    <form className='form'>
        <input type="text" id="Nombre" required/>
        <input type="text" id="Apellido" required/>
        <input type="text" id="Telefono" required/>
        <input type="button" value="Guardar" onclick="guardar()"/>
    </form>
    )
}

export default Formulario;