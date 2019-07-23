const fs = require('fs');
const path = require('path');

const router = (request, response) => {
    const endpoint = request.url;
    console.log(endpoint);
    if (endpoint === "/data") {
        const filePath = path.join(__dirname, "data.json");
        fs.readFile(filePath, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(data);
            }
        });
    }
}

module.exports = router;