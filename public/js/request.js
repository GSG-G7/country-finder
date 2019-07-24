// const getResultArr = require('/');
const input = document.querySelector('#input');
const form =document.querySelector('#search-button');
const divList =document.querySelector('#list')
const submit = document.querySelector('#submit');
const creatElement = (ele) => {
    return document.createElement(ele);
}
const appendElement = (parent,child) => {
    return parent.appendChild(child);
}
const makeRequest = (url, render,handleError) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            if(xhr.status !== 200){
                return handleError(xhr.statusText);
            }
            if(xhr.getResponseHeader('Content-type').includes('json')){
                let responseData = JSON.parse(xhr.responseText);
                const countryName =[];
                if(!input.value){
                    divList.textContent = '';
                    return ;
                }
                responseData.forEach((element)=> {
                    if(element.name.toUpperCase().search(input.value.toUpperCase())===0){
                        countryName.push (element.name); 
                       
                    }
                });
               
                countryName.forEach(element => {
                    
                    const cuntryList = creatElement("ul");
                    const cuntryItem = creatElement("li");
                    cuntryList.style.listStyleType = 'none';
                    cuntryItem.textContent = element ;
                    appendElement(cuntryList,cuntryItem);
                    appendElement(divList , cuntryList);
                   

                });
                return render(responseData, countryName[0]);

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
    divList.textContent = '';
    makeRequest("http://localhost:3000/data",render,handleError);

});

module.exports = getResultArr;
