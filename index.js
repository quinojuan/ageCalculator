let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

const calculateAge = () => {
  let birthDate = new Date(userInput.value);
  console.log({ birthDate });

  let d1 = birthDate.getDate();
  console.log({ d1 });
  let m1 = birthDate.getMonth() + 1;
  console.log({ m1 });
  let y1 = birthDate.getFullYear();
  console.log({ y1 });

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--; // esto es porque no llega al año entonces le resto 1
    m3 = 12 + m2 - m1; // total de meses menos la diferencia
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1; // obtengo el total de dias del mes de nacimiento y le resto la diferencia
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
};
const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
