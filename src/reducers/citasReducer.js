import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from '../actions/types';

// cada reducer tiene su propio state
const initialState = {
    citas: [
        {
            id:0,
            fecha:"10-20-30",
            hora:"10:30",
            mascota:"perrito",
            propietario: "juan",
            sintomas:"no come"
        }
    ]
};

export default function(state = initialState, action) {//siempre se le pasa el estado inicial y la accion como parametros.
    // los type son propiedades de action. El return con los nuevos states los pasa a index y este a store
    switch(action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        case BORRAR_CITA:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload) //action.payload reconoce automaticamente que nos estamos refiriendo a action.payload.id para este caso
            }
        case AGREGAR_CITA:
            return {
                ...state,
                //[...this.state.citas, nuevaCita]; es lo mismo que la proxima linea. Copia con ...state.citas y cambia el estado con action.payload
                citas: [...state.citas, action.payload]
            }
 
        default:
            return state;
    }
}
