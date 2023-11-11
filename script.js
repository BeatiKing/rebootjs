const btnReset = document.getElementById('btnReset');
let internetConnection = true;
const h1InternetStatus = document.getElementById('h1InternetStatus');

btnReset.addEventListener('click', () => {
    window.location = 'http://admin:admin@192.168.1.1/rebootinfo.cgi';
    setTimeout(() => window.history.back(), 5000);
});

function checkInternetConnection(){
    const xhr = new XMLHttpRequest();
    xhr.open("get", 'https://jsonplaceholder.typicode.com/users/1');

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4){
            if(xhr.response && xhr.response.length >= 1){
                btnReset.disabled = true;
                h1InternetStatus.innerHTML = 'Status: Internet Access';
            }else{
                h1InternetStatus.innerHTML = 'Status: No Internet Access';
                btnReset.disabled = false;
            }
            // console.log(xhr.response.length);
        }
    });

    xhr.send();
}        

checkInternetConnection();