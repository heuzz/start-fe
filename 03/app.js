// console.log("03");
// var foo = 42;
// foo = 'bar';

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);

// function byValue(count) {
//  count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count);

// function byReference(count) {
//   count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count);

// var isman = true;
// if (isMan) {
//   console.log('난 남자');
// } else {
//   console.log('난 여자인가?');
// }
  
// var gender = isMan ? '남자' : '여자';

// for (var count = 0; count < 5; count++) {
//   console.log(count);
// }
// var obj = { a: 1, b: 2 };

// for (var prop in obj) {
//   console.log(prop, obj[prop]);
// }

// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1');

// parseInt('12');
// parseInt('09', 10);
// parseFloat('10.33');

// function test() {
//   console.log('test()');
// }
  
// var id = setTimeout(test, 1000); //1초후 1번실행
  
// //var id = setInterval(test, 1000); //1초마다 계속 실행
  
// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }

// //함수또한
// test2();
// function test2() {
//   console.log('test');
// }

// function a (){
//     console.log('a');
//     function b(){
//         console.log('b');
//     }
// } 

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); 

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var matchReg = /abc/; // 찾을 문자열
// var result = text.match(matchReg);

// console.log(result);
// var count = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// var result = 0;
// for (var i = 0; i < count.length; i++){
//     result = result + count[i];
// }
// result = result / count.length;
// console.log(result);

// for (var x = 1; x <= 9; x++){
//     for (var y = 1; y <= 9; y++){
//         console.log(x +' * ' + y +' = '+x*y);
//     }
// }

// function multiplication(){
//     for (var x = 1; x <= 9; x++){
//         for (var y = 1; y <= 9; y++){
//             console.log(x +' * ' + y +' = '+x*y);
//         }
//     }
// }
// multiplication();

// var todos = ['운동'];
// var todo = '게임';

// function create(todos, todo) {
//     todos.push(todo)
//     console.log('create : ' + todos)
// }

// function read(todos, todo) {
//     todos.forEach(function(todo){
//         console.log('read : ' + todo);
//     })
// }

// function update(todos, updateTodo) {
//     var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo
//     });
//     console.log(updateIndex)
// }

// function delete2(todos, deleteTodo) {
//     var deleteIndex = todos.findIndex(function(todo) {
//       return todo === deleteTodo;
//     });
//     todos.splice(deleteIndex, 1);
//     console.log(todos); 
// }

// create(todos, todo);
// read(todos, todo);
// update(todos, todo);
// delete2(todos, todo);
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("숫자를 입력해 주 세요.", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

sumInput();