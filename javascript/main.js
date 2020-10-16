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
        intel.style.display = 'block';
        amd.style.display = 'none';
    }
    else if (platform == "AMD") {
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

    if (intel == "1151") {
        soc1151.style.display = 'block';
        soc1200.style.display = 'none';
        soc2066.style.display = 'none';
    }
    else if (intel == "1200") {
        soc1151.style.display = 'none';
        soc1200.style.display = 'block';
        soc2066.style.display = 'none';
    }
    else if (intel == "2066") {
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

    if (amd == "AM4") {
        socAM4.style.display = 'block';
        socTRX4.style.display = 'none';
        socTR4.style.display = 'none';
    }
    else if (amd == "TRX4") {
        socAM4.style.display = 'none';
        socTRX4.style.display = 'block';
        socTR4.style.display = 'none';
    }
    else if (amd == "TR4") {
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

typeAge.onchange = function ageCalulate() {
    let date = new Date(document.getElementById('date-of-birth').value);
    let age = document.getElementById('age').value;

    let today = new Date().getFullYear();

    if (today - age != date.getFullYear()) {
        alert("Nesprávný počet rokov");
    }

    console.log(date.getFullYear());
    console.log(today);
    console.log(age);
    alert(date);
    alert(age);
}

// var selectedOption = document.getElementById('Platform');
// var htmlCollection = document.getElementsByTagName('select');
// var arr = Array.from(htmlCollection);     //od ECMAScript 2015 (ed 6)       
// arr.shift();


// selectedOption.onchange = function () {
//     arr.forEach(function (element) { element.style.display = 'none'; });
//     document.getElementById(this.value).style.display = 'inline';
// };

