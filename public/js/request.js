// const getResultArr = require('/');
const input = document.querySelector('#input');

const makeRequest = (url, render,handleError) => {
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    // console.log(url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }
            if(xhr.getResponseHeader('Content-type').includes('json')){
                let responseData = JSON.parse(xhr.responseText);
                

                return render(responseData);

            } handleError('Error not Json') ;   
        }
    } 
        xhr.open('GET',url);
         xhr.send();
};
const handleError = (error) => {
    const errorSpan = document.createElement('span');
    errorSpan.textContent = error || 'Erorr response not completed';
    document.querySelector('#container').appendChild(errorSpan);
    
}
const render = (result)=>{
    const getResultArr = (res,inp) =>{
        const countryName =[];
        res.forEach((element)=> {
            if(element.name.toUpperCase().search(inp.toUpperCase())===0){
                countryName.push (element.name); 
            }
        });
        console.log(countryName, '************');
        return countryName;
    }
    
    getResultArr(result,input.value);
}
input.addEventListener('input' ,(e)=>{
    makeRequest("http://localhost:3000/data",render,handleError);

});

module.exports = getResultArr;