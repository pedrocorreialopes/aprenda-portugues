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
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. A palavra exerce essa função de acordo com sua classe gramatical na frase.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Analise a função da palavra no contexto da frase antes de responder.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. O exercício envolve flexão nominal, indicando gênero, número ou grau.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Analise o tipo de flexão nominal exigido na frase.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. A forma verbal foi identificada conforme o modo, tempo, pessoa ou estrutura verbal.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Analise o modo, o tempo e o contexto em que o verbo foi empregado.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. O adjetivo concorda em gênero e número com o substantivo, que é o núcleo do sintagma nominal.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Identifique o substantivo (núcleo) e ajuste as palavras que devem concordar com ele.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. O verbo concorda com o núcleo do sujeito, respeitando número e pessoa.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Identifique o núcleo do sujeito e ajuste o verbo conforme número e pessoa.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. Identificou-se corretamente a regência, o termo regente e a preposição exigida.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Verifique se o termo exige complemento com ou sem preposição.";
  feedback.className = "feedback error";
}
if (userAnswer === correct) {
  feedback.textContent =
    "Resposta correta. O termo anterior exige a preposição 'a' e o termo seguinte admite artigo feminino, ocorrendo crase.";
  feedback.className = "feedback success";
} else {
  feedback.textContent =
    "Resposta incorreta. Verifique se há exigência de preposição e se o termo seguinte admite artigo feminino.";
  feedback.className = "feedback error";
}
feedback.textContent =
  "Resposta correta. Há palavra atrativa, o que exige próclise segundo a norma culta.";
feedback.textContent =
  "Resposta correta. A vírgula não pode separar o sujeito do verbo, pois isso quebra a estrutura sintática da frase.";
