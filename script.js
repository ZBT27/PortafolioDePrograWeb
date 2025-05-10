document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const totalQuestions = 10;
  let totalScore = 0;
  let scores = [];

  for (let i = 1; i <= totalQuestions; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    const score = answer ? parseInt(answer.value) : 0;
    scores.push(score);
    totalScore += score;
  }

  let mensajeFinal = `Tu calificación es: ${totalScore} de ${totalQuestions}. `;
  mensajeFinal += totalScore === 10
    ? "¡Eres un verdadero fan de The Smiths! 🌹"
    : totalScore >= 7
      ? "Casi casi... pero aún no eres 100% fan. 😉"
      : "Eres un poser, lo sentimos. 😬";

  document.getElementById('result').textContent = mensajeFinal;

  const ctx = document.getElementById('chart').getContext('2d');
  if (window.chart) window.chart.destroy();

  window.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({ length: totalQuestions }, (_, i) => `P${i + 1}`),
      datasets: [{
        label: 'Puntaje por pregunta',
        data: scores,
        backgroundColor: scores.map(s => s === 1 ? '#28a745' : '#dc3545')
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1
        }
      }
    }
  });
});

