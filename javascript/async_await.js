// Callback (Depth is bad, Length is bad)
function findAndSaveUserCallback(Users) {
  Users.findOne({}, (err, user) => { // 첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = 'zero';
    user.save((err) => { // 두 번째 콜백
      if (err) {
        return console.log(err);
      }
      Users.findOne({ gender: 'm'}, (err, user) => { // 세 번째 콜백
        // 생략
      });
    });
  });
}

// Promise (Depth is Good, but Length...)
function findAndSaveUserPromise(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm'});
    })
    .then((user) => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}

// Async Await Cool!!
async function findAndSaveUser(users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
  } catch (error) {
    console.error(error);
  }
}

// ES2018 Gorgeous!!
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();