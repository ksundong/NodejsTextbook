// const는 재 할당이 불가능하다.
// JavaScript에서는 한 번 초기화 한 변수에 다른 값을 대입하는 경우가 의외로 적다.
// 따라서 기본적으로 변수 선언시 const를 사용하고, 다른 값을 대입해야하는 상황이 생겼을 때, let을 사용한다.
const a = 0;
a = 1;
let b = 0;
b = 1;
// var는 함수스코프이고 const는 블록 스코프이므로 블록 내에서만 재사용 가능하다.
// 이 덕분에 호이스팅 같은 문제도 해결되고 코드 관리도 쉬워졌다.
if (true) {
  var x = 3;
}
console.log(x); // 3

if (true) {
  const y = 3;
}
console.log(y);