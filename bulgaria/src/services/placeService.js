import * as request from './request'

const baseUrl = 'http://localhost:3030/jsonstore/places'

export const getAll= async ( ) => {
    const result = await request.get (baseUrl);
    const places = Object.values(result)

  console.log(places);
  
    return places;
}


