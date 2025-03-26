require('dotenv').config();
const AXIOS = require('axios');

async function getBooks(query) {
    try {


        const response = await AXIOS.get(`https://gutendex.com/books`);
        return response.data;
    }

    catch (error) {
        console.error(error);

    }

}
