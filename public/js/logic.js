const getResultArr = (res,input) =>{
    const countryName =[];
    if(!input.value){
        return ;
    }
    res.forEach((element)=> {
        if(element.name.toUpperCase().search(input.toUpperCase())===0){
            countryName.push (element.name); 
        }
    });
    return countryName;
}

if (typeof module !== "undefined"){
    module.exports = getResultArr;
}