var name = 'FE'
//이름을 적는다. 
/* 주석 테스트~~~ 
동적
호출
콘텐츠
*/
console.log(name);

var age = 20;

var isMan = 'true';
var isMan1 = true;
console.log(isMan);
console.log(isMan1);

function log(str) {
    console.log(str);
  }

log("hello");

//object
var img = {};
img.width = 100;
img.hight = 200;

console.log(img);

//배열
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//연산자
console.log(1 + 1);
console.log(name + "hello");

var me = {
    age: 11,
    name: 'heuzz',
    isMan: true,
    sayHello: function(){
        console.log("hello");
    },
  };

me.sayHello();