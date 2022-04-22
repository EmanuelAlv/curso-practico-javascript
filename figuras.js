//Codigo del cuadrado
console.group("Cuadrado");
   // const ladoCuadrado = 5;
   // console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");

//     function perimetroCuadrado(lado){
//         return lado * 4;
//     }
//    // console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

//    // const areaCuadrado = ladoCuadrado * ladoCuadrado;
//     function areaCuadrado(lado){
//         return lado * lado;
//     }
    //console.log("El area del cuadrado es: " + areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triángulo");
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log("Los lados del triangulo miden: " +ladoTriangulo1+"cm, " +ladoTriangulo2+"cm, " +baseTriangulo+"cm");

    // // const alturaTriangulo = 5.5;
    // // console.log("La altura del tirángulo de es de: " + alturaTriangulo+"cm");
    // function perimetroTriangulo(lado1, lado2, base){
    //     return lado1 + lado2 + base;
    // }
    // // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // // console.log("El perimetro del tirángulo de es: " + perimetroTriangulo+"cm");

    // function areaTriangulo(base, altura){
    //     return (base * altura)/2;
    // }
//     const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//     console.log("El area del tirángulo de es: " + areaTriangulo+"cm^2");
// console.groupEnd();

//Codigo del Circulo

console.group("Circulo");
    // const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo+"cm");

    // function diametroCirculo(radio){
    //     return radio * 2;
    // }
    // // const diametroCirculo = radioCirculo * 2;
    // // console.log("El diametro del circulo es: " + diametroCirculo+"cm");

    // const pi = Math.PI;
    // console.log("Pi es: " + pi);

    // function circunferencia(radio){
    //     const diametro = diametroCirculo(radio);
    //     return pi * diametro;
    // }
    // // const circunferencia = pi * diametroCirculo;
    // // console.log("La circunferencia es: " + circunferencia+"cm");

    // function areaCirculo(radio){
    //     return (radio * radio) * pi;
    // }
    // const areaCirculo = (radioCirculo*radioCirculo)*pi;
    // console.log("El area del circulo es: " + areaCirculo+"cm^2");
console.groupEnd();
//----------------------------------------------------------------------------------------------------------------------------------------
//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base){
    const peri = lado1 + lado2 + base;
    return peri;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
function alturaTriangulo (lado1, lado2, base){
    if (lado1 === lado2 && base != lado1 && lado2){
        const a = lado1 * lado1;
        const b = (base * base) / 4;
        const result = Math.sqrt(a - b);
        return result;
    }else{
        alert("Introduce valores validos para un triangulo Isosceles")
    }
}
//Codigo del circulo
function diametroCirculo(radio){
    return radio * 2;
}
const pi = Math.PI;
function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
}

//Aqui interactuamos con el HTML

//CUADRADO
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

//TRIANGULO
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("base");
    const inputAltura = document.getElementById("alturaTriangulo");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1Triangulo");
    const inputLado2 = document.getElementById("lado2Triangulo");
    const inputBase = document.getElementById("baseTriangulo");
    const value1 = inputLado1.value;
    const value2 = inputLado2.value;
    const valueBase = inputBase.value;
    const perimetroCalc = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetroCalc);
}
function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("lado1Triangulo2");
    const inputLado2 = document.getElementById("lado2Triangulo2");
    const inputBase = document.getElementById("baseTriangulo2");
    const value1 = inputLado1.value;
    const value2 = inputLado2.value;
    const valueBase = inputBase.value;
    const altura = alturaTriangulo(value1, value2, valueBase);
    alert(altura);
}
//CIRCULO
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("radio");
    const valueRadio = inputRadio.value;
    const resultRadio = areaCirculo(valueRadio);
    alert(resultRadio);
}
function calcularCircunferencia(){
    const inputRadio2 = document.getElementById("radio");
    const valueRadio2 = inputRadio2.value;
    const resultRadio2 = circunferencia(valueRadio2);
    alert(resultRadio2);
    
}