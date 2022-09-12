// function roastChicken (){
//     let pieces = 0;
//     return function(){
//         pieces++;
//         return pieces;
//     }
// } 

// const murgi = roastChicken();
// const legPieces = roastChicken();
// console.log(murgi())
// console.log(murgi())
// console.log(legPieces())
// console.log(murgi())
// console.log(murgi())

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12