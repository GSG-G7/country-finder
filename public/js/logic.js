const getResultArr = (response,text)=>{
    const countryName =[];
    if(!text){
        return;
    }
    response.forEach((element)=> {
        if(element.name.toUpperCase().search(text.trim().toUpperCase()) === 0){
            countryName.push (element.name); 
        }
    });
    return countryName;
}

if (typeof module !== "undefined"){
    module.exports = getResultArr;
}