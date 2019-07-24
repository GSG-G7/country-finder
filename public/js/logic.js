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

if (typeof module !== "undefined"){
    module.exports = getResultArr;
}