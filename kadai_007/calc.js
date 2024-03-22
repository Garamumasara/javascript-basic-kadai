//変数numに0~50までのランダムな整数を代入
let num = Math.floor(Math.random() * 51);

//変数numの値を出力する
console.log(num);

//ifの条件
if (num % 15 === 0) {
  console.log(`3と5の倍数です`);
} else if (num % 3 === 0) {
  console.log(`3の倍数です`);
} else if (num % 5 === 0) {
  console.log(`5の倍数です`);
} else {
  console.log (num);
}