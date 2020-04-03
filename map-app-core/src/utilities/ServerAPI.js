import axios from 'axios';

export default function ServerAPI() {
    return axios.create({
        baseURL: process.env.SERVER_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};