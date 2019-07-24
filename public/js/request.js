// const getResultArr = require('/');
const input = document.querySelector('#input');
const form =document.querySelector('#search-button');
const divList =document.querySelector('#list')
const submit = document.querySelector('#submit');
const container = document.querySelector('#container');

let selector = select => {
    return document.querySelector(select);
};
const creatElement = (ele) => {
    return document.createElement(ele);
}
const appendElement = (parent,child) => {
    return parent.appendChild(child);
}
const name = creatElement('h1');
const code = creatElement('h2');
appendElement(container, name);
appendElement(container, code);

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

const autoComplete = (result)=> {
    const countryName =[];
    if(!input.value){
        divList.textContent = '';
        return ;
    }
    result.forEach((element)=> {
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
const displayData = (result)=> {
    result.forEach(element=> {
        if(element.name.toUpperCase() === input.value.toUpperCase()){
            name.textContent = element.name;
            code.textContent = element.code;
        }else{
            name.textContent = `Enter valid country name`;
        }
    });
}

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    makeRequest("/data",displayData,handleError);
});

 
