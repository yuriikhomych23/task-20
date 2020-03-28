let users = []; 
let renderBodyTag = document.getElementById('renderBody'); 
let formData = document.forms["data"];


formData.btnAddUser.addEventListener('click', function() { 
    let login = formData.login.value;
    let pass = formData.pass.value;
    let email = formData.email.value;

    if(login != '' && pass != '' && email != '') {
        let newUser = new Profile(login, pass, email);
        users.push(newUser); 
        formData.reset();
        renderBody(); 
    }
});


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
        // let hr = document.createElement('hr');
        
        td.innerHTML = i + 1;
        tr.appendChild(td);
        
        for (let key in users[i]) {
            let td = document.createElement('td');
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        } 
        tr.innerHTML += `<button class="btn__edit" onclick="editValue(${i})">Edit</button>`
        tr.innerHTML += `<button class="btn__delete" onclick="deleteValue(${i})">Delete</button>`
        renderBodyTag.appendChild(tr);
        
    }

}

    function editValue(ind) {
        formData.login.value = users[ind].login;
        formData.pass.value = users[ind].pass;
        formData.email.value = users[ind].email;

        formData.btnAddUser.style.display = "none";
        formData.btnEditUser.style.display = "block";
        formData.btnEditUser.onclick = function() {
            changeValue(ind);
        }
    }


function changeValue(ind){
    users[ind].login = formData.login.value;
    users[ind].pass = formData.pass.value;
    users[ind].email = formData.email.value;

    formData.btnAddUser.style.display = "block";
    formData.btnEditUser.style.display = "none";
    formData.reset();

    renderBody();
}

function deleteValue (ind) {
    users.splice(ind, 1);
    renderBody();
}


















//DATA VALIDATION
// btnAdd.addEventListener('click', function() {
//     let regExpLogin =  /^[a-z A-Z]{1,20}$/;
//     if(regExpLogin.test(login.value)) {
//         login.style.border = '1.5px solid rgb(13, 201, 22)';
//         login.style.transition = '.3s';
//     } else {
//         login.style.border = '1.5px solid rgb(253, 18, 18)';
//         login.style.transition = '.3s'
//     };
//     let regExpEmail =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;
//     if (regExpEmail.test(email.value)) {
//         email.style.border = '1.5px solid rgb(13, 201, 22)';
//         email.style.transition = '.3s'
//     } else {
//         email.style.border = '1.5px solid rgb(253, 18, 18)';
//         email.style.transition = '.3s'
//     };
//     let regExpPass = /^[a-z A-Z 0-9]{8,15}$/;
//     if(regExpPass.test(pass.value)) {
//         pass.style.border = '1.5px solid rgb(13, 201, 22)';
//         pass.style.transition = '.3s'
//     } else {
//         pass.style.border = '1.5px solid rgb(253, 18, 18)';
//         pass.style.transition = '.3s'
//     };
// });




