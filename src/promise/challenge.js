const fetchData = require('../utils/fetchData');
const API_URL = 'https://rickandmortyapi.com/api/character/';

fetchData(API_URL)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${API_URL}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(`${data.origin.url}`)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => {
        console.error(err);
    })
