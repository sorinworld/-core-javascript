//if..else
let question = prompt('자바스크립트의 ‘공식’ 이름은 무엇일까요?');

if(question == 'ECMAScript'){
  console.log('정답');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
}


let num = prompt('숫자를 하나 입력하세요');
 if(num > 0){
  console.log(1);
 } else if(num < 0){
  console.log(-1);
 } else {
  console.log(0);
 }


 // if -> ?
 //let result = (a + b < 4) ? '미만' : '이상';


 //if..else -> ?
let message = (login == '직원') ? 'Hi' :
  (login == '임원') ? 'Welcome' :
  (login == '') ? 'Log in' :
  '';

  

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didYouWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


//if 문(Statement)
if(didYouWatchMovie.includes('yes')){
  console.log('그거 재밌더라');
} else if(goingToWatchMovie === 'yes'){
  console.log('너무 설렌다');
} else {
  console.log('난 그거 별로');
}

//조건부 연산자
let movieMessage = 
(didYouWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie == 'yes') ? '너무 설렌다' :
'난 그거 별로';