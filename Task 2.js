// Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ в консоли. Затем написать минимум 5 тестов к этой задаче.
function handshakes(n) {
  if (n > 1 && Number.isInteger(n / 1)) {
    return (n * n - n) / 2;
  } else {
    return "Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы";
  }
}

function handshakes2(n) {
  if (n > 1 && Number.isInteger(n / 1)) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += n - i;
    }
    return sum;
  } else {
    return "Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы";
  }
}
console.log(handshakes(10));
console.log(handshakes2(10));

module.exports = {handshakes, handshakes2};
