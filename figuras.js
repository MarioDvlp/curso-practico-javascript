//Codigo del cuadrado=======================================

function perimetroCuadrado(lado){
    return lado *4;
}
function areaCuadrado(lado){
    return lado * lado;
}

//Codigo del triangulo=========================================

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Codigo circulo==============================================

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Interactuamos con el html=============================================================

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}

// Triangulo

function calcularPerimetroTriangulo(){
    const inputLado1 = parseInt(document.getElementById("InputLado1").value);
    const inputLado2 = parseInt(document.getElementById("InputLado2").value);
    const inputBase = parseInt(document.getElementById("InputTrianguloBase").value);
    
    
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const inputBase = parseInt(document.getElementById("InputTrianguloBase").value);
    const inputAltura = parseInt(document.getElementById("InputAlturaTriangulo").value);

    const area = areaTriangulo(inputBase, inputAltura)
    alert(area)
}

// Triangulo Isosceles

function TrianguloIsosceles(lado1, lado2, base){
    const inputLado1 = parseInt(document.getElementById("InputIsosceles1").value);
    const inputLado2 = parseInt(document.getElementById("InputIsosceles2").value);
    const inputBase = parseInt(document.getElementById("InputIsoscelesBase").value);

     if (inputLado1 === inputLado2 && inputBase != inputLado1 && inputLado2) {
        const resultado = calcularAlturaTrianguloIsosceles(inputLado1, inputBase)
        alert(resultado)
     } else {
         alert("Introduce los valores validos para un Triangulo Isosceles")
     }
}

function calcularAlturaTrianguloIsosceles(lados, base){
    const a = lados * lados; 
    const b = (base * base) / 4;
    const result = Math.sqrt(a - b);
    return result;
}

// Circulo

function calcularDiametroCirculo(){
    const radio = parseInt(document.getElementById("InputRadio").value)
    const diametro = diametroCirculo(radio)
    alert(diametro)
};

function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("InputRadio").value)
    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
};

function calcularAreaCirculo(){
    const radio = parseInt(document.getElementById("InputRadio").value)
    const area = areaCirculo(radio)
    alert(area)
};
