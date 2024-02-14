const axios = require('axios');

const API_KEY = '4866683cd6da4c2394097162d925c81d'; 

const getLatestNews = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener noticias:', error);
        throw error;
    }
};

module.exports = { getLatestNews };