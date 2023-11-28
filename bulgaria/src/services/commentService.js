import * as request from './request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (placeId) => {
    const searchQuery = encodeURIComponent(`placeId="${placeId}"`);
    const relationQuery = encodeURIComponent(`owner=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);//

    return comments;
};

export const create = async (placeId, comment)=> {
    const result = await request.post(baseUrl, {placeId, comment});

    return result;
};