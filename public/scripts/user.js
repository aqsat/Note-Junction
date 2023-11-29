


document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    var loginForm = document.getElementById('loginForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var firstName = document.getElementById('first_name').value;
            var lastName = document.getElementById('last_name').value;
            var userName = document.getElementById('user_name').value;
            var password = document.getElementById('password').value;
        
            var user = {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password
            };
        
            console.log(user);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var userName = document.getElementById('user_name').value;
            var password = document.getElementById('password').value;
        
            var user = {
                userName: userName,
                password: password
            };
        
            console.log(user);
            //window.alert("hi");
        });

    }
        });
    
