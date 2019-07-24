const makeRequest = (url,callback,handleError) => {
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
                const cuntryList = creatElement("ul");
                cuntryList.className = 'list__ul';
                countryName.forEach(element => {
                    const cuntryItem = creatElement("li");
                    cuntryItem.className = 'list__ul__li'
                    cuntryItem.addEventListener('click',(e)=>{
                        console.log(event.target.textContent)
                        input.value = event.target.textContent;
                                        })
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

 
