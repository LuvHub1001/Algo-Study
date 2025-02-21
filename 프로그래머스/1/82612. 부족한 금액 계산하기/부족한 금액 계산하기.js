function solution(price, money, count) {
  let temp = price;

  for (let i = 1; i <= count; i++) price += temp * i;
  price = price - temp;

  if (price > money) return price - money;
  else return 0;
}
