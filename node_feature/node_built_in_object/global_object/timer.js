const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초 마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);

// 실행순서 예측
// setImmediate는 setTimeout(callback, 0)보다 먼저 실행되나
// 항상 먼저 실행되는 것이 아니므로 setTimeout(callback, 0)를 사용하지 않는 것을 권장.