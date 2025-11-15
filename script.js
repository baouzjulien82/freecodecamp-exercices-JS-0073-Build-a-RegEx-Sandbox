// variables
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g'); 

// fonction getFlags
const getFlags = () =>
  (caseInsensitiveFlag.checked ? "i" : "") + (globalFlag.checked ? "g" : "");

testButton.addEventListener("click", () => {
  const flags = getFlags();
  const pattern = regexPattern.value;
  const inputText = stringToTest.textContent;

  try {
    const regex = new RegExp(pattern, flags);
    const matches = inputText.match(regex); // récupère toutes les correspondances

    if (matches) {
      // Surlignage dans le texte
      const highlighted = inputText.replace(regex, m => `<span class="highlight">${m}</span>`);
      stringToTest.innerHTML = highlighted;

      // Affichage des occurrences trouvées
      testResult.textContent = `${matches.join(", ")}`;
      testResult.style.backgroundColor = "lightgreen";
    } else {
      stringToTest.innerHTML = inputText;
      testResult.textContent = "no match";
      testResult.style.backgroundColor = "#f88";
    }
  } catch (e) {
    testResult.textContent = `Erreur : ${e.message}`;
    testResult.style.backgroundColor = "#fdd835";
  }
});

