const fs = require('fs');
const path = require('path');

const router = (request,response)=>{
    const endpoint = request.url;
    console.log(endpoint);
    if(endpoint === "/data.json"){
        const filePath = path.join(__dirname, "data.json");
        fs.readFile(filePath, (error,data)=>{
            if(error){
                console.log(error);
            }else{
                response.writeHead(200, {"Content-Type":"application/json"});
                console.log((data.toString('utf-8')));
                const data1 = data[0].name;
                console.log(data1);
                response.end(data);
            }
        })
    }
}

















module.exports = router;