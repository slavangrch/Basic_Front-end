const body = document.querySelector('body');
let isValid = 1;
let errorFields = [];
let answers = [];
const answerDiv = document.createElement('div');
const task1 = document.getElementById('task1');

function submit() {
    clearInfo();
    check('name', 'ПІБ', /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/);
    check('faculty', 'Факультет', /^[А-ЯІЇЄ]{1,4}$/);
    check('telephoneNumber', 'Телефон', /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/);
    check('birthData', 'Дата народження', /^\d{2}.\d{2}.\d{4}$/, validateDate);
    check('address', 'Адреса', /^м\. \d{6}$/);

    if (isValid) {
        answers.forEach(answer => answerDiv.appendChild(answer));
        task1.appendChild(answerDiv);
    } else {
        errorFields.forEach(errorField => {
            const field = document.getElementById(errorField);
            field.style.border = '1px red solid';
        });
    }
}
function clearInfo() {
    while (answerDiv.firstChild) answerDiv.removeChild(answerDiv.firstChild);
    if (task1.querySelector('.answerDiv')) task1.removeChild(answerDiv);
    errorFields.forEach(errorField => {
        const field = document.getElementById(errorField);
        field.style.border = '1px gray solid';
    });
    isValid = 1;
    errorFields = [];
    answers = [];
}

function check(type, text, regex, additionalCheck = () => true) {
    const valueFromElement = document.getElementById(type).value;
    if (regex.test(valueFromElement) && additionalCheck(valueFromElement)) {
        const answer = document.createElement('h4');
        answer.innerHTML = `${text}: ` + valueFromElement;
        answers.push(answer);
    } else {
        isValid *= 0;
        errorFields.push(type);
    }
}

function validateDate(value) {
    const arrD = value.split('.');
    arrD[1] -= 1;
    const d = new Date(arrD[2], arrD[1], arrD[0]);
    if (new Date(Date.now()) < d) return false;
    return (d.getFullYear() === Number(arrD[2])) && (d.getDate() === Number(arrD[0]));
  }


const VARIANT = 1;
 
for (let r = 0; r < 6; r++) {
  const rowElement = document.createElement('tr');
  for (let d = 0; d < 6; d++) {
  const index = String(d + 1 + (r * 6));
  const dataElement = document.createElement('td');
  dataElement.innerHTML = index;
  dataElement.id = index;
  rowElement.appendChild(dataElement);
  body.appendChild(rowElement);
  }
}  
      
function onMouseClickCell(element) {
  element.style.background = document.getElementById('current_color').value;
}
 
function onDoubleClickCell() {
  const startColumn = VARIANT;
  for (let j = startColumn; j <= 36; j += 36) {
    for (let i = 0; i < 6; i++) {
      const currentElement = document.getElementById(String(j + i));
      currentElement.style.background = document.getElementById('current_color').value;
    }
  }
}
 
function onMouseOverRandomBg(element) {
    element.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ')';
}
 
const elementByVariant = document.getElementById(String(VARIANT));
 
elementByVariant.onmouseover = () => {
  onMouseOverRandomBg(elementByVariant);
};

elementByVariant.onmouseup = () => {
    onMouseClickCell(elementByVariant);
};
   
elementByVariant.ondblclick = () => {
    onDoubleClickCell();
};
  