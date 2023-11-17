import { createContext, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { placeServiceFactory} from '../services/placeService';

export const PlaceContext = createContext();

export const PlaceProvider=({
    children,
})=> {

    const navigate = useNavigate();
const [places, setPlaces] = useState([]);
const placeService = placeServiceFactory();

useEffect(()=> {
    placeService.getAll()
    .then( result => {
        setPlaces(result)
    })
}, []);

const onAddPlaceSubmit = async (data) => {
    //console.log(auth.accessToken)

    const newPlace = await placeService.create(data);
    //console.log(newPlace)

    setPlaces(state => [...state, newPlace]);
    navigate('/dashboard')
}

const onPlaceEditSubmit = async (data) => {
    const result = await placeService.edit(data._id, data);
    //console.log(data)
   
    setPlaces(state => state.map(p => p._id === data._id ? result : p));

    navigate(`/dashboard/${data._id}`);
}

const deletePlace=(placeId)=> {
    setPlaces(state=> state.filter(place=>place._id!==placeId));
}

const getPlace=(placeId)=> {
    return places.find(place=> place._id===placeId);
}

const contextValues = {
    places, 
    onAddPlaceSubmit,
    onPlaceEditSubmit, 
    deletePlace, 
    getPlace,
};

return (
    <PlaceContext.Provider value={contextValues}>
        {children}
    </PlaceContext.Provider>
);

}

export const usePlaceContext = ()=> {
    const context = useContext(PlaceContext);
    return context;
}