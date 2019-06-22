const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

promise
  .then((message) => {
    console.log(message); // 성공(resolve)인 경우 실행
  })
  .catch((error) => {
    console.log(error);   // 실패(reject)인 경우 실행
  });