const handle = require('./handlerData')

const router = (request, response) => {
    const endpoint = request.url;
    if(endpoint === '/'){
        handle.handleHome(request,response);
    }else if(endpoint.includes('/public')){
        handle.handlePages(request,response);
    }else if (endpoint === "/data") {
        handle.handleData(request,response);
    }
}

module.exports = router;