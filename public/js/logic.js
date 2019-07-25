const getResultArr = (response,text)=>{
    const countryName =[];
    if(!text.value){
        return;
    }
    response.forEach((element)=> {
        if(element.name.toUpperCase().search(text.value.toUpperCase()) === 0){
            countryName.push (element.name); 
        }
    });
    return countryName;
}

if (typeof module !== "undefined"){
    module.exports = getResultArr;
}