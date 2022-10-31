import React, { useState } from 'react';
import '../hojas-de-estilo/ContadorConReducer.css'
import { MostrarLista } from './MostrarLista'


export const AppTareas = () => {
	
	const [ tarea, setTarea ] = useState("");
	const [lista , setLista ] = useState([]);
	
	const handleChange = (e) => {
		setTarea(e.target.value);
		
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const nuevaTarea = {
			id:Date.now(),
			tarea: tarea,
			completado: false
			
		};
		
		setLista([...lista, nuevaTarea]);
		
		setTarea("");
		
		
		
	}
	
	
	const borrarTarea = (id) => {
		
	setLista(lista.filter(item=> {
		
		return item.id!==id
	}))
		
	}


	
	const completarTarea=(id) => {
		setLista(lista.map(item => {
			if(item.id===id) {
				item.completado= true
			}
			
			return item;
			
		}))
		
	
	}
	
	const editarTarea = (id) => {
		
		alert('editando...')
		
		
	}
	
	return (
		<>
			<h1 className="letra">Soy la App de Tareas</h1>
			<ul className="letra">
			
			
			{
				lista.map((item)=> (
				
				
				<MostrarLista 
					key={item.id}
					id={item.id}
					tarea={item.tarea}
					completado={item.completado}
					borrarTarea={borrarTarea}
					completarTarea={completarTarea}
					editarTarea={editarTarea}
					
				/>
				
				
				))
				
				
			}
			
			</ul>
			<form onSubmit={handleSubmit}>
				<input type="text" name="tarea" value={tarea} onChange={handleChange} />
				<button type="submit">Agregar Tarea</button>
			</form>
		</>
	
	);
	
	
}

