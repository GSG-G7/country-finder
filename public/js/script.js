const input = document.querySelector('.input-text');

const makeRequest = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('GET',url);
    xhr.send();
};

input.addEventListener('input',(e) => {
    makeRequest('/data.json',res=>{
        console.log(res);
    })
// console.log(input.value);
})