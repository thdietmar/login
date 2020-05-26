const users = [
    { username: "sepp", password: "12345678" },
    { username: "franz", password: "01234567" }
];

function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var bool = false;

    for (i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            bool = true; 
            window.location.href = "https://hopeful-shaw-4be213.netlify.app/";
        } 
    }

    if (bool === false) {
        alert("incorrect username or password!");
    }
}
    

    






