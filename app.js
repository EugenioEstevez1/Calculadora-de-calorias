
function displayResult(calorias) {
    const resultado = document.getElementById("result");
    resultado.textContent = `MANTENIMIENTO: ${calorias} calorias`
}

function displayResultDef(calorias){
    const resultadoDeficit = document.getElementById("resultDef");
    resultadoDeficit.textContent = `DEFICIT: ${calorias} calorias`
}
function displayResultSup(calorias){
    const resultadoDeficit = document.getElementById("resultSup");
    resultadoDeficit.textContent = `SUPERAVIT: ${calorias} calorias`
}


function calcularCalorias() {
    const peso = parseInt(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value);
    const edad = parseFloat(document.getElementById("age").value);
    const actividad = parseFloat(document.getElementById("activityLevel").value);

    const bmr = calcularBmr(peso, altura, edad);
    const calorias = calcularTotalCalorias(bmr, actividad)
    displayResult(calorias)
    displayResultDef(calorias - 400)
    displayResultSup(calorias + 400)
}

function calcularBmr(peso, altura, edad) {
    return 10 * peso + 6.25 * altura - 5 * edad + 5;
}

function calcularTotalCalorias(bmr, actividad) {
    return bmr * actividad
}


const boton = document.getElementById("calcular");
boton.addEventListener("click", calcularCalorias);