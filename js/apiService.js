const api = axios.create({
    baseURL: 'https://www.omdbapi.com/'
})
let token;
$.getJSON("../utils/config.json", function(data) {
    token = data.token;
});
