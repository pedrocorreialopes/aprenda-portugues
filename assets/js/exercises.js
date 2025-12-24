document.querySelectorAll(".check-btn").forEach(button => {
  button.addEventListener("click", () => {
    const exercise = button.closest(".exercise");
    const correct = exercise.dataset.correct;
    const selected = exercise.querySelector("input:checked");
    const feedback = exercise.querySelector(".feedback");

    if (!selected) {
      feedback.textContent = "Selecione uma alternativa.";
      feedback.className = "feedback error";
      return;
    }

    if (selected.value === correct) {
      feedback.textContent =
        "Resposta correta. A palavra 'sede' foi usada em sentido figurado, indicando desejo ou interesse, e não sede física.";
      feedback.className = "feedback success";
    } else {
      feedback.textContent =
        "Resposta incorreta. No contexto, 'sede' não se refere à necessidade física, mas a um desejo simbólico.";
      feedback.className = "feedback error";
    }
  });
});
document.querySelectorAll(".check-btn").forEach(button => {
  button.addEventListener("click", () => {
    const exercise = button.closest(".exercise");
    const correct = exercise.dataset.correct.toLowerCase();
    const feedback = exercise.querySelector(".feedback");
    let userAnswer = "";

    const checked = exercise.querySelector("input[type=radio]:checked");
    const textInput = exercise.querySelector("input[type=text]");

    if (checked) userAnswer = checked.value.toLowerCase();
    if (textInput) userAnswer = textInput.value.trim().toLowerCase();

    if (!userAnswer) {
      feedback.textContent = "Informe uma resposta.";
      feedback.className = "feedback error";
      return;
    }

    if (userAnswer === correct) {
      feedback.textContent = "Resposta correta. O conceito foi aplicado adequadamente.";
      feedback.className = "feedback success";
    } else {
      feedback.textContent = "Resposta incorreta. Revise o conceito apresentado acima.";
      feedback.className = "feedback error";
    }

    button.disabled = true;
  });
});
if (userAnswer === correct) {
  feedback.innerHTML =
    "Resposta correta. A separação adequada é: <strong>" + correct + "</strong>.";
  feedback.className = "feedback success";
} else {
  feedback.innerHTML =
    "Resposta incorreta. A forma correta é: <strong>" + correct + "</strong>.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. A acentuação segue a regra correspondente ao caso apresentado.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Revise a regra de acentuação aplicada a esse tipo de palavra.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. A grafia segue a regra ortográfica apresentada neste tópico.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Revise a regra ortográfica correspondente antes de tentar novamente.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. A classificação semântica foi identificada corretamente com base no sentido da palavra no contexto.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Observe o contexto e a definição do conceito antes de responder.";
  feedback.className = "feedback error";
}
