import {request} from './request'

const baseUrl = 'http://localhost:3030/jsonstore/places'

export const getAll= async ( ) => {
    const result = await request ('GET', baseUrl);
    const places = Object.values(result)

  console.log(places);
  
    return places;
}