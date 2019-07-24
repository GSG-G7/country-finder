const makeRequest = (url,callback,handleError) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }
            if(xhr.getResponseHeader('Content-type').includes('json')){
                let responseData = JSON.parse(xhr.responseText);
                callback(responseData) ;
            } else {
                handleError('Error not Json') ;
            } 
        }
    } 
        xhr.open('GET',url);
         xhr.send();
};
const handleError = (error) => {
    const errorSpan = document.createElement('span');
    errorSpan.textContent = error || 'Erorr response not completed';
   container.appendChild(errorSpan);
    
};

input.addEventListener('input' ,(e)=>{
    divList.textContent = '';
    makeRequest("/data",autoComplete,handleError);

});
submit.addEventListener('click', (e)=> {
    e.preventDefault();
    makeRequest("/data",displayData,handleError);
});

 
