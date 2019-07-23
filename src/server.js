const http = require('http');
const router = require('./router');


const server = http.createServer(router);
const port = 5000;
server.listen(port, ()=> {
    console.log(`Server is up to localhost: ${port}`);
});

