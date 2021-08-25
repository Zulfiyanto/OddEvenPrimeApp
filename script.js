const Odd = () => {
  let input = document.getElementById("input").value;
  let result = [];
  for (let i = 1; i <= input; i++) {
    i % 2 === 1 && result.push(i);
  }
  display(result);
};

const Even = () => {
  let input = document.getElementById("input").value;
  let result = [];
  for (let i = 1; i <= input; i++) {
    i % 2 === 0 && result.push(i);
  }
  display(result);
};

const Prime = () => {
  let input = document.getElementById("input").value;
  let result = [];

  for (let i = 1; i <= input; i++) {
    if (i < 2) continue;
    let number = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        number = i;
        break;
      }
    }
    if (number) {
      continue;
    } else {
      result.push(i);
    }
  }
  display(result);
};

const display = (n) => {
  let html = "";
  for (let i of n) {
    html += `<div class="box">
        <h3>${i}</h3>
        </div>`;
  }
  document.getElementById("result").innerHTML = html;
};
