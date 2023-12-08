const animacionImg = 'animacion-btn.gif'

function displayResult(calorias) {
    const resultado = document.getElementById("result");
    const timer = parseInt(Math.random() * 5000)
    boton.innerHTML = `<img src='${animacionImg}' />` 
    setTimeout(()=>{
        resultado.innerHTML = `<p>MANTENIMIENTO: ${calorias} calorias</p>
        <p>DEFICIT: ${calorias - 300} calorias </p>
        <p>SUPERAVIT: ${calorias + 300} calorias</p>`
        boton.innerText = "Calcular"
        
    },timer)
    resultado.innerHTML = ""
 
}


function calcularCalorias() {
    const peso = parseInt(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value);
    const edad = parseFloat(document.getElementById("age").value);
    const actividad = parseFloat(document.getElementById("activityLevel").value);

    const bmr = calcularBmr(peso, altura, edad);
    const calorias = calcularTotalCalorias(bmr, actividad)
    displayResult(calorias)

}

function calcularBmr(peso, altura, edad) {
    return 10 * peso + 6.25 * altura - 5 * edad + 5;
}

function calcularTotalCalorias(bmr, actividad) {
    return bmr * actividad
}


const boton = document.getElementById("calcular");
boton.addEventListener("click", calcularCalorias);