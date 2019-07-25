const test = require('tape');
const countriesArr = [
    {
        "name": "Afghanistan",
        "code": "AF"
    },
    {
        "name": "Albania",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "code": "DZ"
    },
    {
        "name": "Bahamas",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "code": "BH"
    },
    {
        "name": "Cambodia",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "code": "CM"
    },
    {
        "name": "Zambia",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "code": "ZW"
    },
]

test('Autocomplete test function', (t)=>{
    const actual = (response)=>{
        const countryName =[];
        response.forEach((element)=> {
            if(element.name.toUpperCase().search('a'.toUpperCase()) === 0){
                countryName.push (element.name); 
            }
        });
        return countryName;
    }
    const expected = ["Afghanistan", "Albania", "Algeria"];
    t.deepEqual(actual(countriesArr), expected, '');
    t.end();
});