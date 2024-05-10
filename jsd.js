document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


    if (user == '') {
        document.getElementById('Display').textContent = 'Enter user name'
        return
    }

    if (pass == '') {
        document.getElementById('Display').textContent = 'Enter password'
        return
    }


    if (user == 'Joana Mea' && pass == '123456') {
        document.getElementById('Display').textContent = 'Loading...'
        return
    }

    else {
        document.getElementById('Display').textContent = 'Wrong pass or name'
        return
    }


})