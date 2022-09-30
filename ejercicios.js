/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
   pe.miFuncion("Hola Mundo") devolverá 10. */
export function CuentaNroCaracter(cad) {
  if (typeof cad === "string") {
    // El Metodo typeof pregunto si es igual a un String
    console.log(
      `La cantidad de caractes que tiene el texto es : ${cad.length}`
    );
  } else {
    console.log(`Lo sentimos ${cad} no es una cadena de texto`);
  }
}
/* 2) Programa una función que te devuelva el texto recortado según el      número de 
   caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola". */
function TextoRecortado(cad, nro) {
  let resltado = "";
  if (typeof cad === "string" && typeof nro === "number" && cad.length > nro) {
    for (let i = 0; i < nro; i++) {
      resltado += cad.charAt(i);
    }
  } else {
    resltado = "Error Parametros incorrectos....";
  }
  return resltado;
}

/* 3) Programa una función que dada una String te devuelva un Array de textos separados
   por cierto caracter, pe.
   miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal']. */
function ArrayTextoSeparado(cadena, separador) {
  const array = new Array();

  if (typeof cadena === "string") {
    var cad = cadena.split(separador);
    for (let i = 0; i < cad.length; i++) {
      console.log(cad[i]);
      array.push(cad[i]);
    }
  }
  return array;
}

/* 4) Programa una función que repita un texto X veces,
   miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
function RepiteTexto(cadena, nro) {
  var res = "Error valores no permitidos....";
  if (typeof cadena === "string" && Math.sign(nro) != -1) {
    res = cadena + " ";
    res = res.repeat(nro);
  }
  return res.trim();
}
/* 5) Programa una función que invierta las palabras de una cadena de texto,
   pe.miFuncion("Hola Mundo") devolverá "odnuM aloH". */
function InvirtePalabras(cadena) {
  var respuesta = "";
  if (typeof cadena === "string") {
    for (let i = 0; i < cadena.length; i++) {
      respuesta = cadena[i] + respuesta;
    }
    return respuesta;
  }
}
/* 6) Programa una función para contar el número de veces que se repite una palabra 
   en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
function ContarPalabras(cadena, palabra) {
  //var respuesta = 0;
  if (typeof cadena === "string") {
    let cad = cadena.split(palabra);
    return cad.length - 1;
  }
  return `${cadena} : No es una palabra `;
}
/* 7) Programa una función que valide si una palabra o frase dada, es un
palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true. */
function FrasePolindromo(cadena) {
  var cad = InvirtePalabras(cadena);
  return typeof cadena === "string" && cadena === cad ? true : false;
}
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
  pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
function EliminaCaracteres(texto, patron) {
  //var cad = texto.split(patron);
  var cadena = "";
  if (typeof texto === "string") {
    var cad = texto.split(patron);
    cad.slice(0);

    cad.forEach((element) => {
      cadena = cadena + element;
    });
  } else {
    cadena = `${texto}, No es un texto..... `;
  }
  return cadena;
}
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
 const NroAleatorio = () =>  Math.floor( (Math.random() * (600-501 +1) + 501) );

/* 10) Programa una función que reciba un número y evalúe si es capicúa o
   no(que se lee igual en un sentido que en otro), pe.miFuncion(2002) devolverá true. */
function EsNroCapicua(nro=undefined) {
  if(typeof nro === 'string') return console.warn("No se permite Letras ingrese numero porfavor");
  if (!nro) return console.warn("Inserte numero..");
  if (nro < 0) return console.warn("El numero tiene que mayor a cero..");
  let nro2 = nro.toString();  
  let evaluar = nro2.split("").reverse().join("");
  if (parseInt(evaluar, 10) === nro) { return true } else{ return false };
}

/* 11) Programa una función que calcule el factorial de un número(El factorial de
    un entero positivo n, se define como el producto de todos los números enteros
    positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120. */

function NroFactorial(nro) {
  if (typeof nro === 'number' && nro > 0) { 
    let valor = 1;
    for (let i = 1; i <= nro; i++) valor = valor * i;
    return valor;
  }
  return console.warn("El dato NO! es correcto...");
} 

/* 12) Programa una función que determine si un número es primo
    (aquel que solo es divisible por sí mismo y 1) o no, pe.miFuncion(7) 
    devolverá true. */
function EsPrimo(nro=undefined) {
  if (typeof nro === 'string' || !nro) return console.info('Dato incorrecto.');
  if (nro > 1 && typeof nro === 'number') {
    for (let i = 2; i < nro; i++){
      if (nro % i === 0) return false;
    }
  } 
  return (nro!==1);
}

/* 13) Programa una función que determine si un número es par o impar,
    pe.miFuncion(29) devolverá Impar. */
function EsParImpar(nro) {
  return (nro > 0 && typeof nro === 'number') ?
    ((nro % 2 == 0) ? console.info(`El ${nro} es Par`) :
      console.info(`El ${nro} es Impar`)) :
    console.info(`El ${nro} No es un dato correcto`);
  
}
/* 14) Programa una función para convertir grados Celsius a Fahrenheit 
    y viceversa, pe.miFuncion(0, "C") devolverá 32°F. */
function ConvertirGrados(nro = undefined, grados = "") {
  if (typeof nro === 'string' || nro === undefined)
    return console.info(`datos ${nro} Incorrectos...`);
  if (typeof grados === "number" || grados === "")
    return console.info(`datos ${grados} Incorrectos...`);
  if (grados.toLowerCase() === "f")
    return console.info(`${(nro * 9) / 5 + 32}°F`);
  if (grados.toLowerCase() === "c")
    return console.info(`${((nro - 32) * 5) / 9}°C`);
}

export const Ejercicios_Yon = {
  TextoRecortado,
  ArrayTextoSeparado,
  RepiteTexto,
  InvirtePalabras,
  ContarPalabras,
  FrasePolindromo,
  EliminaCaracteres,
  NroAleatorio,
  EsNroCapicua,
  NroFactorial
};
