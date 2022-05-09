import {Form, Button} from 'react-bootstrap';
import {useState} from "react";

const TareasForm = ({onClickFn, oldTarea}) => {
    const [id, setID] = useState(oldTarea.id)
    const [nombre, setNombre] = useState(oldTarea.nombre)
    const [materia, setMateria] = useState(oldTarea.materia)
    const [puntos, setPuntos] = useState(oldTarea.puntos)
    const [fechaEntrega, setFechaEntrega] = useState(oldTarea.fechaEntrega)

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") {
            alert("No puede dejar ningun campo vacio")
        } else {
            let data = {
                id: id,
                _id: oldTarea._id,
                nombre: nombre,
                materia: materia,
                puntos: puntos,
                fechaEntrega : fechaEntrega
            }
            onClickFn(data)
        }
    }

    return (
        <Form onSubmit={onEnviar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <br/><br/><br/>

                <Form.Label>ID</Form.Label>
                <br/>
                <Form.Control type="number" placeholder="ID" value={id} onChange={(txt) => setID(txt.target.value)}/>
                <br/><br/>

                <Form.Label>Nombre</Form.Label>
                <br/>
                <Form.Control type="text" placeholder="Nombre de la tarea" value={nombre} onChange={(txt) => setNombre(txt.target.value)}/>
                <br/><br/>

                <Form.Label>Materia</Form.Label>
                <br/>
                <Form.Control type="text" placeholder="Nombre de la materia" value={materia} onChange={(txt) => setMateria(txt.target.value)}/>
                <br/><br/>

                <Form.Label>Puntos</Form.Label>
                <br/>
                <Form.Control type="number" placeholder="Puntos de la tarea" value={puntos} onChange={(txt) => setPuntos(txt.target.value)}/>
                <br/><br/>

                <Form.Label>Fecha de entrega</Form.Label>
                <br/>
                <Form.Control type="date" placeholder="Fecha de entrega" value={fechaEntrega} onChange={(txt) => setFechaEntrega(txt.target.value)}/>
                <br/><br/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default TareasForm