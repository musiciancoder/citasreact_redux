import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from './types';

//cualquier funcion aca en actions (getCitas, borrarCita, agregarCita) puede ser llamada en los componentes (es la idea)
//devuelve los types, que son recibidos por los reducers, e este caso en citasReducers
export const getCitas = () => {
    return {
        type: MOSTRAR_CITAS
    };
};
export const borrarCita = (id) => {
    return {
        type: BORRAR_CITA,
        payload: id
    };
};

export const agregarCita = (cita) => {
    return {
        type: AGREGAR_CITA,
        payload: cita //payload es lo que cambia, en este caso lo que escribimos en el formulario, a lo que se suma el id asignado automaticamente por uuid
        //payload: {
        //     id: '7eff63af-76e1-4197-bc3e-9bdaa48dccee',
        //     mascota: 'sachita',
        //     propietario: 'mama',
        //     fecha: '2919-07-01',
        //     hora: '12:12',
        //     sintomas: 'se cayo'
        //   }
    };
};

