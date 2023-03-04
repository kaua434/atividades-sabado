function converterSegundos(segundos) {

    let number = parseInt(prompt('Digite os segundos: '))

    let horas = Math.floor(segundos / 3600);

    let minutos = Math.floor((segundos % 3600) / 60);

    let segundosRestantes = segundos % 60;
    
    return [horas, minutos, segundosRestantes];
  }

  let totalSegundos = 12345;
let [horas, minutos, segundosRestantes] = converterSegundos(totalSegundos);
console.log(`Tempo total: ${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos`);

  
