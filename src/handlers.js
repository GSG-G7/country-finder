const fs = require('fs');
const path = require('path');

const handleHome = (request,response) => {
    const homePath = path.join(__dirname, '..','public','index.html')
    fs.readFile(homePath,(error,file) => {
        if(error){
            response.writeHead(404,{'Content-Type':'text/html'});
            response.end("servser-error");
        }else{
            response.writeHead(200,{'Content-Type':'text/html'})
            response.end(file);
        }
    })
}
const handlePages = (request,response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname,'..',...endpoint.split('/'));
        const ext = endpoint.split('.')[1];
        const obj = {
            html : 'text/html',
            css : 'text/css',
            js : 'application/javascript'
        }
        fs.readFile(filePath,(error,file) => {
            if(error){
                response.writeHead(404,{'Content-Type':'text/html'});
                response.end("servser-error");
            }else {
                response.writeHead(200,{'Content-Type': obj[ext] });
                response.end(file);
            }
        })
}
const handleData = (request,response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname, "data.json");
        fs.readFile(filePath, (error, data) => {
            if (error) {
                response.writeHead(404,{'Content-Type':'text/html'});
                response.end("servser-error");
            } else {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(data);
            }
        });
}
module.exports = {
    handleHome,
    handlePages,
    handleData
}