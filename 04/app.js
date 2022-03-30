// const elemnt1 = document.getElementById('wrap');
// console.log(elemnt1);
// const elemnt2 = document.querySelector('wrap');
// console.log(elemnt2);
// const elemnt3 = document.querySelectorAll('div');
// console.log(elemnt3);

// const div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";

// document.body.appendChild(div);

// document.querySelector('#wrap').innerHTML = 111;

// const el = document.getElementById('div');
// el.remove();

// window.addEventListener('load', function(){
//   alert("load1");
// });
// window.addEventListener('load', function(){
//   alert("load2");
// });

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
