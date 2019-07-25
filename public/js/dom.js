let selector = select => {
    return document.querySelector(select);
};
const creatElement = (ele) => {
    return document.createElement(ele);
}
const appendElement = (parent,child) => {
    return parent.appendChild(child);
}

const input = selector('#input');
const form =selector('#search-button');
const divList =selector('#list')
const submit = selector('#submit');
const container = selector('#container');

const name = creatElement('h4');
const code = creatElement('h4');

appendElement(container, name);
appendElement(container, code);

const autoComplete = (results)=> {
    
    const filteredNames = getResultArr(results,input.value);
    if(!input.value.trim()) {
        return; 
    }
    filteredNames.forEach(element => {
    const cuntryList = creatElement("ul");    
    cuntryList.className = 'list__ul';
    const cuntryItem = creatElement("li");
    cuntryItem.className = 'list__ul__li'
    cuntryItem.addEventListener('click',(e)=>{
        input.value = event.target.textContent;
        cuntryList.style.display = 'none';
    });
    cuntryItem.textContent = element;
    appendElement(cuntryList,cuntryItem);
    appendElement(divList , cuntryList);
});
};
const displayData = (result)=> {
    result.forEach(element => {
        if(element.name.toUpperCase() === input.value.toUpperCase()){
            name.textContent = `Country name is :  [ ${element.name} ]`;
            name.className = 'list';
            code.textContent = `Country code is :  [ ${element.code} ]`;
            code.className = 'list';
        }
    });
}
const handleError = (error) => {
    const errorSpan = creatElement('span');
    errorSpan.textContent = error || 'Erorr response not completed';
    appendElement(container, errorSpan);
};

input.addEventListener('input' ,(e)=>{
    divList.textContent = '';
    name.textContent = '';
    code.textContent = '';
    divList.style.display = 'block';
    makeRequest("/data",autoComplete,handleError);

});
submit.addEventListener('click', (e)=> {
    e.preventDefault();
    divList.textContent = '';
    makeRequest("/data",displayData,handleError);
});
input.addEventListener('focus', ()=>{
    selector('.overlay__form__bottom').setAttribute('style', 'width:100%; transform: translate(-50%)');
    selector('.overlay__form__top').setAttribute('style', 'width:100%; transform: translate(-50%)');

    selector('.overlay__form__right').setAttribute('style', 'height: 100%; transform: translateY(-50%)');
    selector('.overlay__form__left').setAttribute('style', 'height: 100%; transform: translateY(-50%)')
}) 

input.addEventListener('blur', ()=>{
    selector('.overlay__form__bottom').setAttribute('style', 'width:0; transform: translate(0)');
    selector('.overlay__form__top').setAttribute('style', 'width:0; transform: translate(0)');

    selector('.overlay__form__right').setAttribute('style', 'height: 0; transform: translateY(0)');
    selector('.overlay__form__left').setAttribute('style', 'height: 0; transform: translateY(0)');
}) 
