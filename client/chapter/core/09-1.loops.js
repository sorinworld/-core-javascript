

//While Loop

/* let i = 0;

while (i < 10) {
  console.log(++i);
}
*/

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

let i = 0;
while(i < frontEndDev.length){
  let value = frontEndDev[i];
  console.log(value);
  i++;
}

console.log(i); //7


/* 
let i = frontEndDev.length;
while( i >= 0){
  console.log(i, frontEndDev[i] );
  i--
}
 */


// 전개 연산자  전개 구문 spread oparator

// let copyArray = [...frontEndDev];




// let copyArray = frontEndDev.slice();


// while(copyArray.length){
//   console.log(copyArray.pop());
// }



/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환


