import {requestFactory} from './request'

const baseUrl = 'http://localhost:3030/data/places';

export const placeServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const places = Object.values(result)

    console.log(places);

    return places;
  };

  const create = async (placeData) => {
    const result = await request.post(baseUrl, placeData);

    console.log(result);
    return result;
  };

  const getOne = async (placeId) => {
    const result = await request.get(`${baseUrl}/${placeId}`);

    console.log(result);
    return result;
  };

return {
  getAll, 
  getOne, 
  create
}

}