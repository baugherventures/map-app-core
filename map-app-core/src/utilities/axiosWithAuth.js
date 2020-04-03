import axios from 'axios';

export default function axiosWithAuth() {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: process.env.SERVER_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};