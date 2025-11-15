// variables
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g'); 

// fonction getFlags

const getFlags = () => {
let isFlag = "";
if(caseInsensitiveFlag.checked) {
  isFlag += "i";
};
if(globalFlag.checked) {
  isFlag += "g";
};
return isFlag;
};

// addEvent Test

testButton.addEventListener('click', () => {
  let isFlag = getFlags();
  let pattern = regexPattern.value;

  try {
    let regex = new RegExp(pattern, isFlag);
    if (regex.test(stringToTest.textContent)) {
      console.log('ok');
      stringToTest.innerHTML = `<span class="highlight">${stringToTest.textContent}</span>`
    } else {
      console.log('pas ok');
    }
  } catch (e) {
    console.log(`Erreur dans le motif : ${e.message}`);
  }
});

