function emailValid() {

    let regex = /[a-zA-Z0-9]{3,}[@][a-z]{1,}([.][a-z]{2,4}){1,}$/;

    var email = document.getElementById("email").value;
    var check = document.getElementById("email")
    let val = regex.test(email);
    if (val == false) {
        check.classList.add("is-invalid")
        return false;
    }
    else {
        check.classList.remove("is-invalid")
        return true;
    }
}

function myFunction() {
    alert("hey");
}

// var other = document.getElementById('Ine');
// var nvidia = document.getElementById('Nvidia');
// var intel = document.getElementById('Intel');
// var amd = document.getElementById('AMD');

// other.onchange = function () {
//     document.getElementById("show-hide").style.display = 'block';
// }

// other.onchange = function () {
//     document.getElementById("show-hide").style.display = 'none';
// }

function showHideElem() {
    var checkBox = document.getElementById("Ine");
    var text = document.getElementById("show-hide");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

var platform = document.getElementById('Platform')

platform.onclick = function showChipset() {
    let platform = document.getElementById('Platform').value;
    console.log(platform);
    let intel = document.getElementById('show-hide-list-chipset-intel')
    let amd = document.getElementById('show-hide-list-chipset-amd')

    amd.style.display = 'none';
    intel.style.display = 'none';

    document.getElementById('show-hide-list-cpu2066').style.display = 'none';
    document.getElementById('show-hide-list-cpu1200').style.display = 'none';
    document.getElementById('show-hide-list-cpu1151').style.display = 'none';

    document.getElementById('show-hide-list-cpuAM4').style.display = 'none';
    document.getElementById('show-hide-list-cpuTRX4').style.display = 'none';
    document.getElementById('show-hide-list-cpuTR4').style.display = 'none';

    if (platform == "Intel") {
        document.getElementById('Intel').disabled = false;
        document.getElementById('AMD').disabled = true;
        intel.style.display = 'block';
        amd.style.display = 'none';
    }
    else if (platform == "AMD") {
        document.getElementById('Intel').disabled = true;
        document.getElementById('AMD').disabled = false;
        intel.style.display = 'none';
        amd.style.display = 'block';
    }
}

var intel = document.getElementById('Intel');
intel.onclick = function showIntelCpu() {
    let intel = document.getElementById('Intel').value;
    console.log(intel);

    let soc2066 = document.getElementById('show-hide-list-cpu2066');
    let soc1200 = document.getElementById('show-hide-list-cpu1200');
    let soc1151 = document.getElementById('show-hide-list-cpu1151');
    soc1200.style.display = 'none';
    soc2066.style.display = 'none';
    soc1151.style.display = 'none';
    document.getElementById('AM4').disabled = true;
    document.getElementById('TRX4').disabled = true;
    document.getElementById('TR4').disabled = true;

    if (intel == "1151") {
        document.getElementById('1200').disabled = true;
        document.getElementById('2066').disabled = true;
        document.getElementById('1151').disabled = false;
        soc1151.style.display = 'block';
        soc1200.style.display = 'none';
        soc2066.style.display = 'none';
    }
    else if (intel == "1200") {
        document.getElementById('1151').disabled = true;
        document.getElementById('2066').disabled = true;
        document.getElementById('1200').disabled = false;
        soc1151.style.display = 'none';
        soc1200.style.display = 'block';
        soc2066.style.display = 'none';
    }
    else if (intel == "2066") {
        document.getElementById('1200').disabled = true;
        document.getElementById('1151').disabled = true;
        document.getElementById('2066').disabled = false;
        soc1151.style.display = 'none';
        soc1200.style.display = 'none';
        soc2066.style.display = 'block';
    }
}

var amd = document.getElementById('AMD');
amd.onclick = function showAMDCpu() {
    let amd = document.getElementById('AMD').value;
    console.log(amd);

    let socAM4 = document.getElementById('show-hide-list-cpuAM4');
    let socTRX4 = document.getElementById('show-hide-list-cpuTRX4');
    let socTR4 = document.getElementById('show-hide-list-cpuTR4');

    socTRX4.style.display = 'none';
    socTR4.style.display = 'none';
    socAM4.style.display = 'none';

    document.getElementById('1151').disabled = true;
    document.getElementById('1200').disabled = true;
    document.getElementById('2066').disabled = true;

    if (amd == "AM4") {
        document.getElementById('TRX4').disabled = true;
        document.getElementById('TR4').disabled = true;
        document.getElementById('AM4').disabled = false;
        socAM4.style.display = 'block';
        socTRX4.style.display = 'none';
        socTR4.style.display = 'none';
    }
    else if (amd == "TRX4") {
        document.getElementById('TR4').disabled = true;
        document.getElementById('AM4').disabled = true;
        document.getElementById('TRX4').disabled = false;
        socAM4.style.display = 'none';
        socTRX4.style.display = 'block';
        socTR4.style.display = 'none';
    }
    else if (amd == "TR4") {
        document.getElementById('TRX4').disabled = true;
        document.getElementById('AM4').disabled = true;
        document.getElementById('TR4').disabled = false;
        socAM4.style.display = 'none';
        socTRX4.style.display = 'none';
        socTR4.style.display = 'block';
    }
}

// if (document.getElementById('Ine').checked == true) {
//     document.getElementById("show-hide").style.display = 'block';
// }
// if (document.getElementById('Ine').checked == false) {
//     document.getElementById("show-hide").style.display = 'none';
// }



// nvidia.onchange = function () {
//     document.getElementById("show-hide").style.display = 'none';
// }

// intel.onchange = function () {
//     document.getElementById("show-hide").style.display = 'none';
// }

// amd.onchange = function () {
//     document.getElementById("show-hide").style.display = 'none';
// }


var typeAge = document.getElementById('age');

function ageCalculate() {
    let date = new Date(document.getElementById('date-of-birth').value);
    let age = document.getElementById('age').value;
    let check = document.getElementById('age');

    let today = new Date().getFullYear();

    if (check == null || check == "") {
        check.classList.add("is-invalid");
        check.required = true;
        return false;
    }

    if (today - age != date.getFullYear()) {
        check.classList.add("is-invalid");
        check.required = true;
        return false;
    }
    else {
        check.classList.remove("is-invalid");
        check.required = false;
        return true;
    }
}



var yesItem = document.getElementById('yes');
var noItem = document.getElementById('no');

yesItem.onchange = function () {
    document.getElementById("show-form").style.display = 'block';
};
noItem.onchange = function () {
    document.getElementById("show-form").style.display = 'none';
};

function phoneNumberValid() {
    let reg = /[+][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
    let number = document.getElementById('phoneNumber').value;
    let check = document.getElementById('phoneNumber');
    let val = reg.test(number);

    if(val == false){
        check.classList.add("is-invalid");
    }
    else{
        check.classList.remove("is-invalid");
    }

    return val;
}



// var selectedOption = document.getElementById('Platform');
// var htmlCollection = document.getElementsByTagName('select');
// var arr = Array.from(htmlCollection);     //od ECMAScript 2015 (ed 6)       
// arr.shift();


// selectedOption.onchange = function () {
//     arr.forEach(function (element) { element.style.display = 'none'; });
//     document.getElementById(this.value).style.display = 'inline';
// };


function formCheck() {
    let name = document.getElementById('firstName').value;
    let surname = document.getElementById('secondName').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let yesform = document.getElementById('yes').checked;
    
    if(!emailValid()){
        return false;
    }

    if(yesform == true){
        if(!phoneNumberValid()){
            return false;
        }
    }

    if(!ageCalculate()){
        return false;
    }

    if (name == null || name == "", surname == null || surname == "", email == null || email == "", age == null || age == "") {
        alert("Tento formulár sa odoslať")
        return false;
    }

    console.log(name.value.lenght);
}


function checkEmpty(id) {
    let elem = document.getElementById(id).value;
    let check = document.getElementById(id);

    if (elem == null || elem == "") {
        check.classList.add("is-invalid")
        check.required = true;
    }
    else {
        check.classList.remove("is-invalid");
        check.required = false;
    }
}

function check(id){
    let elem = document.getElementById(id).value;
    let check = document.getElementById(id);

    if (elem == null || elem == "") {
        check.classList.add("is-invalid")
    }
    else {
        check.classList.remove("is-invalid");
    }
}