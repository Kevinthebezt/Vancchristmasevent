const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const share = document.getElementById("share").value;
    // var test = document.getElementById("name").value;
    if (username === "" && share === "" && email === "") {
        alert("Please fill your form");
    }
    if (username === "" && share === "" && email !== "") {
        alert("Please insert both your name and sharing");
    }
    if (username === "" && share !== "") {
        alert("Please insert your name");
    }
    if (share === "" && username !== "") {
        alert("Please insert your sharing");
    }
    if (username !== "" && share !== "") {
        alert("We wish " + username + " a happy Christmas");
    }
});