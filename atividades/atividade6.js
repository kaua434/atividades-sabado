function arredonda(numero) {
    return Math.round(numero * 100) / 100;
  }

  const resultado = arredonda(3.14159);
console.log(resultado); // Output: 3.14
