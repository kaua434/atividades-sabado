function contagemRegressiva(data) {
    const segundos = Math.floor((data - new Date()) / 1000);
    let dias = Math.floor(segundos / (3600 * 24));
    let horas = Math.floor((segundos / 3600) % 24);
    let minutos = Math.floor((segundos / 60) % 60);
    let segundosRestantes = Math.floor(segundos % 60);
  
    return {
      dias,
      horas,
      minutos,
      segundos: segundosRestantes
    };
  }

  const data = '2024-01-01T00:00:00';
const resultado = contagemRegressiva(new Date(data));

console.log(resultado);
