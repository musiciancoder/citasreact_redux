import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducerPrincipal from './reducers'; //viene de combine reducers

const initialState = [];

const middleware = [thunk];

const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : []; //si existe algo guardado que me lo entregue, sino que cree un arreglo vacio

// storageState para localstorage, de otra forma initialState.
const store = createStore(reducerPrincipal, storageState, //en rigor solo reducerPrincipal es obligatorio
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //para usar devtools
) );

export default store;