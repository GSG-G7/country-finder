const makeRequest = (url,callback,handleError) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }
            if(xhr.getResponseHeader('Content-type').includes('json')){
                let responseData = JSON.parse(xhr.responseText);
                return callback(responseData);
            } else{
                handleError('Error not Json') ;  
            }    
        }
    } 
        xhr.open('GET',url);
         xhr.send();
};


 
