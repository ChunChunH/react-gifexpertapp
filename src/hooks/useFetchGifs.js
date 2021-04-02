import {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs';


const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
   
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category] /*si lo pones vacio lo ejecuta 1 vez*/)



    return state;

}

export default useFetchGifs



