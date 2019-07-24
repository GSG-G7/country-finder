const fs = require('fs');
const path = require('path');

const router = (request, response) => {
    const endpoint = request.url;
    console.log(endpoint);
    if(endpoint === '/'){
        const homePath = path.join(__dirname, '..','public','index.html')
        fs.readFile(homePath,(error,file) => {
            if(error){
                console.log(error);
            }else{
                response.writeHead(200,{'Content-Type':'text/html'})
                response.end(file);
            }
        })
    }else if(endpoint.includes('/public')){
        const filePath = path.join(__dirname,'..',...endpoint.split('/'));
        const ext = endpoint.split('.')[1];
        const obj = {
            html : 'text/html',
            css : 'text/css',
            js : 'application/javascript'
        }
        fs.readFile(filePath,(error,file) => {
            if(error){
                console.log(error);
            }else {
                response.writeHead(200,{'Content-Type': obj[ext] });
                response.end(file);
            }
        })

    }else if (endpoint === "/data") {
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