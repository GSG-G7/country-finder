
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
const form = selector('#search-button');
const divList = selector('#list')
const submit = selector('#submit');
const container = selector('#container');
const name = creatElement('h1');
const code = creatElement('h2');
appendElement(container, name);
appendElement(container, code);

const autoComplete = (result)=> {
    const countryName = getResultArr(result,input.value);
        countryName.forEach(element => {
            const cuntryList = creatElement("ul");
            const cuntryItem = creatElement("li");
            cuntryList.style.listStyleType = 'none';
            cuntryItem.textContent = element ;
            appendElement(cuntryList,cuntryItem);
            appendElement(divList , cuntryList);
        });
    };
const displayData = (result)=> {
    result.forEach(element=> {
        if(element.name.toUpperCase() === input.value.toUpperCase()){
            name.textContent = element.name;
            code.textContent = element.code;
        }
    });
}
