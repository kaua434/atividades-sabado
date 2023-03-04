function calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim) {
    const minutosPorHora = 60;
    const minutosInicio = horaInicio * minutosPorHora + minutoInicio;
    const minutosFim = horaFim * minutosPorHora + minutoFim;
    let duracao = minutosFim - minutosInicio;
    
    if (duracao < 0) {
      duracao += 24 * minutosPorHora;
    }

    return duracao;
  }

  let horaInicio = 14;
  let minutoInicio = 30;
  let horaFim = 16;
  let minutoFim = 45;
  let duracao = calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim);
  console.log(`A duração do jogo foi de ${duracao} minutos.`);  