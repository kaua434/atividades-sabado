function saoIguais(valor1, valor2) {
    return valor1 === valor2 && typeof valor1 === typeof valor2;
  }
  const resultado = saoIguais(5, "5");
console.log(resultado);

const resultado2 = saoIguais(true, 1);
console.log(resultado);

const resultado3 = saoIguais(null, undefined);
console.log(resultado);