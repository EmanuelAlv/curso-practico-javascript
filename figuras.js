//Codigo del cuadrado
console.group("Cuadrado");
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El area del cuadrado es: " + areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triángulo");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    console.log("Los lados del triangulo miden: " +ladoTriangulo1+"cm, " +ladoTriangulo2+"cm, " +baseTriangulo+"cm");

    const alturaTriangulo = 5.5;
    console.log("La altura del tirángulo de es de: " + alturaTriangulo+"cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perimetro del tirángulo de es: " + perimetroTriangulo+"cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
    console.log("El area del tirángulo de es: " + areaTriangulo+"cm^2");
console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
    const radioCirculo = 4;
    console.log("El radio del circulo es: " + radioCirculo+"cm");

    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es: " + diametroCirculo+"cm");

    const pi = Math.PI;
    console.log("Pi es: " + pi);

    const circunferencia = pi * diametroCirculo;
    console.log("La circunferencia es: " + circunferencia+"cm");

    const areaCirculo = (radioCirculo*radioCirculo)*pi;
    console.log("El area del circulo es: " + areaCirculo+"cm^2");
console.groupEnd();