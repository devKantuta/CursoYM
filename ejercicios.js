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

export const Ejercicios_Yon = {
  TextoRecortado,
  ArrayTextoSeparado,
  RepiteTexto,
  InvirtePalabras,
  ContarPalabras,
  FrasePolindromo,
  EliminaCaracteres,
};
