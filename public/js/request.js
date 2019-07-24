const input = document.querySelector('#input');

const makeRequest = (url, render,handleError) => {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    console.log(url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }
            if(xhr.getResponseHeader('Content-type').includes('json')){
                let responseData = JSON.parse(xhr.responseText);
                const countryName =[];
                responseData.forEach((element)=> {
                    if(element.name.toUpperCase().search(input.value.toUpperCase())===0){
                        countryName.push (element.name); 
                    }
                });
                console.log(countryName, '************');
                return render(countryName[0]);

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
const render = (result)=>{
}
input.addEventListener('input' ,(e)=>{
    makeRequest("http://localhost:3000/data",render,handleError);

});