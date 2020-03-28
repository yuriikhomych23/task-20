let btnAdd = document.getElementById('btn__add__user')
let formData = document.forms['data'];
let formResult = document.forms['result']
let login = document.getElementById('login')
let pass = document.getElementById('pass');
let email = document.getElementById('email');
//............................

let users = []; // масив юзерів 
let renderBodyTag = document.querySelector('.renderBody'); // таблиця для відображення юзерів 


// функція створення новго юзреа 
btnAdd.addEventListener('click', function() {
    // доступаємось до valeu 
    let login = formData.login.value;
    let pass = formData.pass.value;
    let email = formData.email.value;

    // створення юзера 
    // let newUser = new Profile(login, pass, email);
    // users.push(newUser); // добавляємо в масив юзерів 
    // formData.reset();
    // renderBody(); 



    if(login != '' && pass != '' && email != '') {
        let newUser = new Profile(login, pass, email);
        users.push(newUser); // добавляємо в масив юзерів 
        formData.reset();
        renderBody(); 
    }
})


function Profile(login, pass, email) {
    this.login = login;
    this.pass = pass;
    this.email = email;
}


function renderBody() {
    renderBodyTag.innerHTML = '';

    for(let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = i + 1;
        tr.appendChild(td);

        for(let key in users[i]){
            let td = document.createElement('td');
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        } 
        tr.innerHTML += `<button onclick="editValue(${i})">Edit</button>`
        tr.innerHTML += `<button onclick="editValue(${i})">Delete</button>`
        renderBodyTag.appendChild(tr);
    }

}

    function editValue(ind) {
        formData.login.value = users[ind].login;
        formData.pass.value = users[ind].pass;
        formData.email.value = users[ind].email;

        formData.btnAdd.style.display = 'none';
        formData.changeUser.style.display = "block";
        formData.changeUser.onclick = function() {
            changeValue(ind);
        }
    }



function changeValue(ind){
    users[ind].login = formData.login.value;
    users[ind].pass = formData.login.value;
    users[ind].email = formData.login.value;
    btnAdd.style.display = 'block';
    formData.reset();
    renderBody();
}

function deleteValue (ind) {
    users.splice(ind, 1);
    renderBody();
}


















//DATA VALIDATION
btnAdd.addEventListener('click', function() {
    let regExpLogin =  /^[a-z A-Z]{1,20}$/;
    if(regExpLogin.test(login.value)) {
        login.classList.add('.green'); // доробити 
    } else {
        login.classList.add('.red');
    };
    let regExpEmail =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;
    if (regExpEmail.test(email.value)) {
        email.style.border = '1.5px solid rgb(13, 201, 22)';
        email.style.transition = '.3s'
    } else {
        email.style.border = '1.5px solid rgb(253, 18, 18)';
        email.style.transition = '.3s'
    };
    let regExpPass = /^[a-z A-Z 0-9]{8,15}$/;
    if(regExpPass.test(pass.value)) {
        pass.style.border = '1.5px solid rgb(13, 201, 22)';
        pass.style.transition = '.3s'
    } else {
        pass.style.border = '1.5px solid rgb(253, 18, 18)';
        pass.style.transition = '.3s'
    };
});




