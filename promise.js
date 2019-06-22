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
    return new Promise((resolve, reject) => {
       resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    })
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.log(error);   // 실패(reject)인 경우 실행
  });

// Immediately running Promise(Promise.[resolve/reject]()
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
// Run all Promise
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);  // ['성공1', '성공2']
  })
  .catch((error) => {
    console.log(error);
  });