// Internet 주소를 조작하는 모듈
// 기존 Node 방식 url
// protocol//auth             @hostname:port/p/a/t/h?query=string#hash
// protocol//username:password@hostname:port/p/a/t/h search      #hash
// WHATWG 방식 url
const url = require('url');

// WHATWG 방식
// search 부분을 searchParams라는 객체로 반환하므로 유용함.
const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-----------------------------------');
// Node 방식
// 주소가 host 부분 없이 pathname 부분만 오는 경우 반드시 Node 방식 사용
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));