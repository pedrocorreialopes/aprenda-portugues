function checkAnswer(button, isCorrect) {
  const exercise = button.closest('.exercise');
  const feedback = exercise.querySelector('.feedback');

  // Remove estilos anteriores
  feedback.classList.remove('correct', 'incorrect');

  if (isCorrect) {
    feedback.textContent = 'Resposta correta.';
    feedback.classList.add('correct');
  } else {
    feedback.textContent = 'Resposta incorreta.';
    feedback.classList.add('incorrect');
  }
}
