import {createStore} from "redux";
import sidebar from './reducers/sidebar';

const store = createStore(sidebar);

export default store;