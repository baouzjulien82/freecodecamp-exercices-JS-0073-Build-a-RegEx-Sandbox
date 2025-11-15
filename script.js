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
  console.log(`/${regexPattern.value}/${isFlag}`);
});
