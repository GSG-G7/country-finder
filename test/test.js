const test = require('tape');
const autocomplete = require('../public/js/logic')
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
    }
]

test('Autocomplete test function', (t)=>{
    const actual = autocomplete(countriesArr, 'a');
    const expected = ['Afghanistan', 'Albania', 'Algeria'];
    t.deepEqual(actual, expected, '');
    t.end();
})