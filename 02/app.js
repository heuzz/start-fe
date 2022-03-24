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
    name: 'hsg',
    age: 25,
    github: 'heuzz',
    isMan: true,
    sayHello: function(){
        console.log("hello");
    },
  };

me.sayHello();

for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var todos = ['운동'];
var todo = '게임';
todos.push(todo);

console.log(todos);

todos.forEach(function(todo){
  console.log(todo);
});

var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);