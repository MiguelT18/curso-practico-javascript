function calcularPromedioAritmetico(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (primerElemento, segundoElemento) {
    return primerElemento - segundoElemento;
  });
  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularPromedioAritmetico([
      elemento1,
      elemento2,
    ]);

    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }
  return mediana;
}

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// const lista1 = [200, 100, 500, 400, 300, 600];
// lista1.sort();
// console.log(lista1);
