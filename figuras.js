//Codigo del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 8;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " in");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " in");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " in^2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
"Los lados del triangulo miden: " 
+ ladoTriangulo1 + " in, " 
+ ladoTriangulo2 + " in, " 
+ baseTriangulo + " in."
);
console.log("La altura del triangulo es: " + alturaTriangulo + " in")
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " in")
console.log("El area del triangulo es: " + areaTriangulo + " in^2")

console.groupEnd();

//Codigo circulo

console.group("Circulo");

//Radio
const radioCirculo = 5;
console.log("El Radio del circulo es: " + radioCirculo + " in");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El Diametro del circulo es: " + diametroCirculo + " in");

//Pi
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El Perimetro del circulo es: " + perimetroCirculo + " in");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Area del circulo es: " + areaCirculo + " in^2");

console.groupEnd();