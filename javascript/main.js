function emailValid() {
    var email = document.getElementById("email").value;
    var string = Array.from(email)
    var count = 0;
    for (let i = 0; i < string.length; i++) {
        console.log(email[i]);
        if (email[i] == '@') {
            break;
        }
        else {
            count++;
        }
    }

    if (count < 3) {
        alert("zla emailova adresa");
    }

    alert(string.length);
}

function myFunction() {
    alert("hey");
}

var showBar = document.getElementById('show');
var hideBar = document.getElementById('hide');

showBar.onchange = function () {
    document.getElementById("show-hide").style.display = 'block';
}

hideBar.onchange = function () {
    document.getElementById("show-hide").style.display = 'none';
}