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
    const hasMatch = regex.test(inputText);

    testResult.textContent = hasMatch ? "ok" : "pas ok";
    testResult.style.backgroundColor = hasMatch ? "lightgreen" : "#f88";

    stringToTest.innerHTML = hasMatch
      ? inputText.replace(regex, m => `<span class="highlight">${m}</span>`)
      : inputText;
  } catch (e) {
    testResult.textContent = `Erreur : ${e.message}`;
    testResult.style.backgroundColor = "#fdd835";
  }
});
