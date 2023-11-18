import { requestFactory } from './request'

const baseUrl = 'http://localhost:3030/data/places';

export const placeServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const places = Object.values(result)

    return places;
  };

  const create = async (placeData) => {
    const result = await request.post(baseUrl, placeData);

    return result;
  };

  const getOne = async (placeId) => {
    const result = await request.get(`${baseUrl}/${placeId}`);

    return result;
  };

  const edit = (placeId, data) => request.put(`${baseUrl}/${placeId}`, data);

  const deletePlace = (placeId) => request.del(`${baseUrl}/${placeId}`);

  //const getPlacesByOwner = async (ownerId) => {
   // const searchQuery = encodeURIComponent(`ownerId="${ownerId}"`);
   // const result = await request.get(`${baseUrl}?select=${searchQuery}`);
  // const places = Object.values(result);

   // console.log(places)
    
   
   
   // return places;
//  }

  return {
    getAll,
    getOne,
    create,
    edit,
    deletePlace,
 

  }

}