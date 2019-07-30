import { VALIDAR_FORMULARIO, MOSTRAR_ERROR } from './types';

export const mostrarError = () => {
    return {
        type: MOSTRAR_ERROR
    }
}
export const validarFormulario = (estado) => {//estado es true o false
    return {
        type: VALIDAR_FORMULARIO,
        payload: estado
    }
}
