function speakText(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Web Speech API is not supported in this browser.");
    }
  }

  document.querySelector("#speak-input").addEventListener("click", () => {
    const inputText = document.querySelector("#input-text").value;
    speakText(inputText);
  });

  document.querySelector("#speak-output").addEventListener("click", () => {
    const outputText = document.querySelector("#output-text").value;
    speakText(outputText);
  });