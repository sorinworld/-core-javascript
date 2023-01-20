/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
  console.log(typeof null); //object
// 2. 값이 할당되지 않은 상태
  console.log(typeof undefined); //undefined
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
  let message = "hi";
  let nickname = 'tiger';
  let message2 = `hi my name is ${nickname}` // hi my name is tiger
  let message3 = `hi my name is ${'안녕' / 3}` // hi my name is NaN
  console.log(message3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
  let number = 100.123;
  console.log('number :', typeof 100); //number : number
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
  console.log(12913n + 123n); //13036n
  console.log(typeof 12913n); //bigInt
// 6. 참(true, yes) 또는 거짓(false, no)
  console.log(typeof true); //Boolean
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
  console.log(typeof {}); //object
// 8. 고유한 식별자(unique identifier)
  //console.log(typeof symbol('uid'));

  console.log(typeof Math); //object

  const func = function(){

  }
  console.log(func);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
  /* key value */
  const user = {
    name: 'tiger',
    age: 27,
    fish: function(){
      return '뻐끔뻐끔'
    },
    alert: (aa) => {
      return aa
    }
  }

// Array
// let list = new Array()
// collection
let list = [10,100,1000,1,2,3]
  console.log(list.length);
  //alert(list[1]);

// function
  function sum(a,b){
    a + b
  }
  //console.log(sum(10,30));

  function fishBreadCase(data){
    console.log(`${data}맛 붕어빵`);
  }
  fishBreadCase('민트');


  // this


