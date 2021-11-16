import React, { Fragment, useState }  from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    //crear useState de citas

    const [cita, actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
        id:uuidv4()
    });

    const [error,actualizarError] =useState (false)
 

    //funcio que se ejecuta cada vez que el usuario escribe en un input

    const actualizarState= e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    
    }
    const {mascota, propietario,fecha, hora, sintomas} = cita;

    //cuando el usuario presiona para agregar cita
    const submiCita= e =>{
        e.preventDefault();
       
        
        //validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true)
            return;
        }
        //eliminar el mensje previo
        actualizarError(false);

        //asignar un id
        uuidv4();

        //crear cita
        crearCita(cita);

        // reiniciar form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',
            id:uuidv4()
        })


    }
    
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los Campos son Obligatorios</p> :  null}
        
            <form
            onSubmit={submiCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha de Salida</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                    
                />
                <label>Sintomas</label>
                <textarea
                  className="u-full-width"
                  name="sintomas"
                  onChange={actualizarState}
                  value={sintomas}
                ></textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 Formulario.propTypes={
     crearCita:PropTypes.func.isRequired
 }

export default Formulario;