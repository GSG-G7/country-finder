const http = require('http');
const server = http.createServer();
const port = 5000;
server.listen(port, ()=> {
    console.log(`Server is up to localhost: ${port}`);
})