const input = document.querySelector('.input-text');

const makeRequest = (url, render,handleError) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }

            if(xhr.getResponseHeader('Content-type').includes('json')){
                return render(JSON.parse(xhr.responseText));
            } handleError('Error not Json') ;   
        }
    } 
        xhr.open('GET',url);
         xhr.send();
} ;
  

const handleError = (error) => {
    const errorSpan = document.createElement('span');
    errorSpan.textContent = error || 'Erorr response not completed';
    document.querySelector('#container').appendChild(errorSpan);
    
}
/////////////////////////////////////////////////////////////////////////////












