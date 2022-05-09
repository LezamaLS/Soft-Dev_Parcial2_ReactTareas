import React from 'react'
import {useEffect, useState} from "react";
import TareasUpdateForm from './tareaUpdateForm'

const Tarea = ({tarea, onDelete, onUpdate}) => {
    const [showForm, setShowForm] = useState(false)

    const clickTarea = () => {
        onDelete(tarea.id)
    }

    return (
        <div>
            <h5>{tarea.name}</h5>
            <h5>{`Id: ${tarea.id}`}</h5>
            <h5>{`Id: ${tarea._id}`}</h5>
            <h5>{`Nombre: ${tarea.nombre}`}</h5>
            <h5>{`Materia: ${tarea.materia}`}</h5>
            <h5>{`Puntos: ${tarea.puntos}`}</h5>
            <h5>{`Fecha de entrega: ${tarea.fechaEntrega}`}</h5>
            <h5>{`Fecha de creacion: ${tarea.fechaCreacion}`}</h5>
            <button onClick={clickTarea} className="deleteBtn">Borrar</button>
            <button className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cerrar" : "Actualizar tarea"}
            </button>
                {showForm && <TareasUpdateForm onClickFn={onUpdate} oldTarea={tarea} ></TareasUpdateForm>}
            <br/><br/><br/>
        </div>
    )
}

export default Tarea