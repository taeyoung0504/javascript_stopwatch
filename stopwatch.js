

const hours =  document.querySelector('#hrs');
const mins =  document.querySelector('#ms');
const secs =  document.querySelector('#sc');
const start = document.querySelector("#start");
const stops = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let date = new Date();
let hour =0; // 시
let min =0; // 분
let sec = 0; // 초


/*ㄴ
start.addEventListener("click",() => {
    //입력 받은 생일(년,월,일) Date 객체 지정.
    alert('asd');
});
*/

start.onclick = function(){ //시작 버튼 누를 때
    a=setInterval(add,1000); // 1초마다 add 함수 실행
}


function add(){
    sec ++;
    secs.innerHTML = (sec>9)? `: ${sec}`:`: 0${sec}`;
    if (sec > 59) {
        sec = 0;
        min++;
        mins.innerHTML = (min>9)? `: ${min}`:`: 0${min}`;
    
    if (min > 59) {
        min = 0;
        hour++;
        hours.innerHTML = (hour>9)? `: ${hour}`:`: 0${hour}`;
    
    if(hour > 23){
        hour = 0;
        }
    }
}
}

stops.onclick = function(){ // 멈춤 버튼 누를 때 
    clearInterval(a); //setInterval의 반복 중단
}
reset.onclick = function() {
    secs.innerHTML = ": 00";
    mins.innerHTML = ": 00";
    hours.innerHTML = " 00 ";
    sec=0;
    min=0;
    hour=0;
    clearInterval(a); //초기화와 동시에 시간 증가가 멈춤.
}   