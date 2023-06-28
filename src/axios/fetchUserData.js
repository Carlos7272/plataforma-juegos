import dir from '../constants/api';
import Axios from 'axios';

export const fetchUserData = async (page, request = '') => {
    try {
        console.log ('Entré')
        const response = await Axios.get(dir + page, request);
        console.log('Respuesta:' +response.data)
        return response.data
    } catch (erro) {       
        return erro   
    }   
}
