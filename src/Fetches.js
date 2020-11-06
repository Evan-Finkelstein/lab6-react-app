import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://salty-earth-02045.herokuapp.com/'; // fallback

export async function fetchFoods() {
    try {
        const response = await request.get(`${URL}food`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchFood(someId) {
    try {
        const response = await request.get(`${URL}food/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchTypes() {
    try {
        const response = await request.get(`${URL}type`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function createFood(newFood) {
    try {
        await request
            .post(`${URL}food`)
            .send(newFood);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateFood(someId, newFood) {
    try {
        await request
            .put(`${URL}food/${someId}`)
            .send(newFood);

        return;
    } catch (err) {
        throw err;
    }
}


export async function deleteFood(someId) {
    try {
        await request.delete(`${URL}food/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}
