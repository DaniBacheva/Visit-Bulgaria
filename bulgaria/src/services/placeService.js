import * as request from './request'

const baseUrl = 'http://localhost:3030/jsonstore/places'

export const getAll = async () => {
  const result = await request.get(baseUrl);
  const places = Object.values(result)

  console.log(places);

  return places;
}


export const create = async (placeData) => {
  const result = await request.post(baseUrl, placeData);

  console.log(result);
  return result;
}

export const getOne = async (placeId) => {
  const result = await request.get(`${baseUrl}/${placeId}`);

  console.log(result);
  return result;
}