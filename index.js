function findEvenOdd(N){
    const evenNum = [];
    const oddNum = []
    for (let i =0; i < N.length; i++){
      const number = N[i];
      if ( number % 2 === 0){
          evenNum.push(number);
      }else{
          oddNum.push(number);
      }
    }
    console.log("even numbers", evenNum);
    console.log("odd numbers", oddNumNum);
}
const  numbers =[ 3, 7, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18, ]
findEvenOdd(numbers);