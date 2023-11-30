import * as request from './request';

const baseUrl = 'http://localhost:3030/data/places';

 export  const getAll = async () => {
    const result = await request.get(baseUrl);
    const places = Object.values(result)//

    return places;
  };

 export const create = async (placeData) => {
    const result = await request.post(baseUrl, placeData);

    return result;
  };

 export const getOne = async (placeId) => {
    const result = await request.get(`${baseUrl}/${placeId}`);

    return result;
  };

 export const edit = (placeId, data) => request.put(`${baseUrl}/${placeId}`, data);

export  const deletePlace =async  (placeId) =>  request.remove(`${baseUrl}/${placeId}`);

export const getPlacesByOwner = async (ownerId) => {
    const searchQuery = encodeURIComponent(`_ownerId="${ownerId}"`);
    const result = await request.get(`${baseUrl}?where=${searchQuery}`);
    const places = Object.values(result);

   // console.log(places)
    
   
   
    return places;
 }


