
let titleCount = document.getElementById("titleCount");
document.getElementById("title").addEventListener("keydown", (e) => {
    titleCount.innerHTML = e.target.value.length + "/15";
})

let areaCount = document.getElementById("areaCount");
document.getElementById("area").addEventListener("keydown", (e) => {
    areaCount.innerHTML = e.target.value.length + "/120";
})

function ChangeState() {
    let dni = document.getElementById("dni");
    let value = document.getElementById("stateSelect").value;
    const patterns = {
        DNI: '[0-9]{8}[A-Z]',
        NIE: '[XYZ][0-9]{7}[A-Z]'
    };

    if (patterns[value]) {
        dni.setAttribute('pattern', patterns[value]);
        dni.removeAttribute('disabled');
    } else {
        dni.setAttribute('disabled', 'disabled');
    }
}

function passChange() {
    let pass = document.getElementById('pass');
    let label = document.getElementById('checkpassLabel');
    let isPassword = pass.type === 'password';

    pass.type = isPassword ? 'text' : 'password';
    label.textContent = isPassword ? 'Ocultar' : 'Mostrar';
}

