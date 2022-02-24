
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, sintomas, fecha, email, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (

    <div className="bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">

        <p className="font-bold uppercase text-gray-700 mb-3">Nombre: {''}
          <span className="normal-case font-normal">{nombre}</span>
        </p>

        <p className="font-bold uppercase text-gray-700 mb-3">Propietario: {''}
          <span className="normal-case font-normal">{propietario}</span>
        </p>

        <p className="font-bold uppercase text-gray-700 mb-3">Email: {''}
          <span className="normal-case font-normal">{email}</span>
        </p>

        <p className="font-bold uppercase text-gray-700 mb-3">Fecha Alta: {''}
          <span className="normal-case font-normal">{fecha}</span>
        </p>

        <p className="font-bold uppercase text-gray-700 mb-3">Sintomas: {''}
          <span className="normal-case font-normal">{sintomas}</span>
        </p>

        <div className="flex justify-between">
          
          <button 
            type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
            onClick={() => setPaciente(paciente)}
            >Editar</button>

          <button 
            type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
            >Eliminar</button>
        </div>

    </div>
  )
}

export default Paciente