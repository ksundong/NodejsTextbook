var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();  // Node
oldObject.sayJS();  // JS
console.log(oldObject.ES6); // Fantastic

// in ES6
const newObject = {
  sayJS() {             // : 과 function을 붙이지 않아도 됨.
    console.log('JS');
  },
  sayNode,              // 속성명과 변수명이 겹치는 경우 한 번만 쓸 수 있음.
  [es + 6]: 'Fantastic',// 속성명을 동적으로 생성할 수 있음.
};
newObject.sayNode();  // Node
newObject.sayJS();  // JS
console.log(newObject.ES6); // Fantastic

// 코딩시 편의를 위함을 알 수 있다.