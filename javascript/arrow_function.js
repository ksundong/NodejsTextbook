function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

// add는 모두 같은 기능을 하는 함수
// not 또한 마찬가지임.
// 변수에 대입할 경우 나중에 재사용 가능함.

function not1(x) {
  return !x;
}

const not2 = x => !x;

// return 식을 줄일 수 있음.

// ES5 this bind
var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function() {
    var that = this;  // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) { // 배열에 담긴 요소를 friend로 지정
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();