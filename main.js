const box = document.querySelector("#box");

document.querySelector("#btn-getText").addEventListener('click', getText);
document.querySelector("#btn-getJson").addEventListener('click', getJson);

document.querySelector("#btn-getAPI").addEventListener('click', getAPI);
document.querySelector("#btn-clear").addEventListener('click', clear);


function getText(){
    fetch("sample.txt")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#msg").innerHTML = data;
    }).catch((err) => console.log(err));   
}

function getJson(){
    fetch("users.json")
    .then(res => res.json())
    .then(data => {
        let output = "<h2>Users</h2><br>";
        data.forEach(data => {
            output += `
            <ul>
                <li>ID : ${data.id} </li>
                <li>ID : ${data.name} </li>
                <li>ID : ${data.age} </li>
                <li>ID : ${data.occupation} </li>
            </ul>
            <br>
            `
        }); 
        box.innerHTML = output;
    })
    .catch(err => console.log(err))    
}


function getAPI(){
    fetch('https://localhost:5001/weatherforecast')
    .then(res => res.json())
    .then(data => console.log(data));        
}

function clear(){
    document.querySelector("#msg").innerHTML = '';
    box.innerHTML = "";   
}