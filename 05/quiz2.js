var save;
var board = document.getElementById("board");
board.style="border:gray solid 5px; width:400px; display:grid; grid-template-columns:100px 100px 100px 100px; grid-gap:0px";

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        // TODO : 여기에 필요한 코드를 작성해주세요.
        const span = document.createElement('span');
        if((i+j)%2==0){
            span.className="black";
            span.style = "display:inline-block; width: 100px; height: 100px; background-color: black; margin:0%";
        }
        else{
            span.className="white";
            span.style = "display:inline-block; width: 100px; height: 100px; background-color: white; margin:0%";
        }
        board.appendChild(span);
    } 
}

board.addEventListener("click",function(event){
        if(event.target.tagName=="SPAN"){
            if(save!=null){
                save.style.background=save.className;
            }
            save=event.target;
            event.target.style.background='red';
        }
    })