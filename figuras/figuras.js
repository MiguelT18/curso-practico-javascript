// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado ** 2;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos{");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculos");
//// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

//// PI
const PI = Math.PI;
console.log("PI es: " + PI);

//// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//// Área
function areaCirculo(radio) {
  return radio ** 2 * PI;
}
console.groupEnd();

// INTERACCIÓN CON HTML

// Cuadrado html
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = Number(input.value);

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = Number(input.value);

  const area = areaCuadrado(value);
  alert(area);
}

// Triángulo html
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1-triangulo");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("inputLado2-triangulo");
  const valueLado2 = Number(inputLado2.value);

  const inputBase = document.getElementById("inputBase-triangulo");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputBase-triangulo");
  const valueBase = Number(inputBase.value);

  const inputAltura = document.getElementById("inputAltura-triangulo");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

//Círculo html
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputCirculo");
  const valueRadio = Number(inputRadio.value);

  const area = areaCirculo(valueRadio);
  alert(area);
}
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputCirculo");
  const valueRadio = Number(inputRadio.value);

  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro);
}
function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("inputCirculo");
  const valueRadio = Number(inputRadio.value);

  const diametro = diametroCirculo(valueRadio);
  alert(diametro);
}
