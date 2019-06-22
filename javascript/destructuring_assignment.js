// in ES5
var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
console.log('getCandy: ' + getCandy());
console.log('count: ' + count);
// in ES6
const candyMachine2 = {
  status: {
    name: 'node',
    count2: 5,
  },
  getCandy2() {
    this.status.count2--;
    return this.status.count2;
  }
};

const { getCandy2, status: { count2 } } = candyMachine2;
console.log('getCandy2: ' + getCandy2());
console.log('count2: ' + count2);
// node에선 Error 발생
// 객체의 속성을 같은 이름의 변수에 대입하는 코드

// 배열도 비구조화 할 수 있음
// in ES5
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];
// in ES6
const array2 = ['nodejs', {}, 10, true];
const [node2, obj2, , bool2] = array2;
// 비구조화 할당 문법도 코드 줄 수를 줄여주므로 유용함