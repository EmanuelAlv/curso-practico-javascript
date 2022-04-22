//Codigo del cuadrado
console.group("Cuadrado");
   // const ladoCuadrado = 5;
   // console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");

    function perimetroCuadrado(lado){
        return lado * 4;
    }
   // console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

   // const areaCuadrado = ladoCuadrado * ladoCuadrado;
    function areaCuadrado(lado){
        return lado * lado;
    }
    //console.log("El area del cuadrado es: " + areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triángulo");
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log("Los lados del triangulo miden: " +ladoTriangulo1+"cm, " +ladoTriangulo2+"cm, " +baseTriangulo+"cm");

    // const alturaTriangulo = 5.5;
    // console.log("La altura del tirángulo de es de: " + alturaTriangulo+"cm");
    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // console.log("El perimetro del tirángulo de es: " + perimetroTriangulo+"cm");

    function areaTriangulo(base, altura){
        return (base * altura)/2;
    }
//     const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//     console.log("El area del tirángulo de es: " + areaTriangulo+"cm^2");
// console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
    const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo+"cm");

    function diametroCirculo(radio){
        return radio * 2;
    }
    // const diametroCirculo = radioCirculo * 2;
    // console.log("El diametro del circulo es: " + diametroCirculo+"cm");

    const pi = Math.PI;
    console.log("Pi es: " + pi);

    function circunferencia(radio){
        const diametro = diametroCirculo(radio);
        return pi * diametro;
    }
    // const circunferencia = pi * diametroCirculo;
    // console.log("La circunferencia es: " + circunferencia+"cm");

    function areaCirculo(radio){
        return (radio * radio) * pi;
    }
    // const areaCirculo = (radioCirculo*radioCirculo)*pi;
    // console.log("El area del circulo es: " + areaCirculo+"cm^2");
console.groupEnd();