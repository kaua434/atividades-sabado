function calcularPorcentagem(objeto) {
    const { numero, porcentagem } = objeto;
    return numero * (porcentagem / 100);
  }
  
  const objeto = { numero: 500, porcentagem: 20 };
const resultado = calcularPorcentagem(objeto);
console.log(resultado);