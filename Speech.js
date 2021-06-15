// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


  const rate = 1;
  speech.rate = rate;

  const volume = 1;
  // Set volume property of the SpeechSynthesisUtterance instance
  speech.volume = volume;

  const pitch = 1;
 // Set pitch property of the SpeechSynthesisUtterance instance
  speech.pitch = pitch;


document.querySelector("#start").addEventListener("click", () => {
  // Set the text property with the value of the textarea
  speech.text = document.querySelector("textarea").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});
