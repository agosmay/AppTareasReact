import React from 'react';
import '../hojas-de-estilo/ContadorConReducer.css'


export const MostrarLista = ( { tarea, id , borrarTarea, completarTarea, completado, editarTarea }) => {

	
	return(
	
		<>
			<div>
				<button type="button" onClick={()=> borrarTarea(id)}>Eliminar</button>
				<button type="button" onClick={()=> completarTarea(id)}>Completado???</button>
				<button type="button" onClick={()=> editarTarea(id)}>Editar</button>
				<h1 className={completado ? 'tachado' : 'sinTachar'}>{tarea}</h1>
			</div>
	
			
		</>
	);
	
}

