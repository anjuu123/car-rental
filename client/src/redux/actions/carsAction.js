import axios from 'axios';

export const getAllCars=() => async dispatch => {
    dispatch({type:'LOADING', payload:true})
    try {
        const cars = await axios.get('/api/car/getallcar')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
    }catch(error) {
        dispatch({type:'LOADING', payload:false})

    }
}