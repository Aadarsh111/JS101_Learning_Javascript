 let a=3;
 let b=4;
 let c=5;

// if((a>b) && (a>c))
// {
//   console.log("a is greater");
// }
// else if((b>c) && (b>a))
// {
//   console.log("b is greater");
// }
// else 
// {
//   console.log("c is greater");
// }

((a>b) && (a>c)) ? console.log("a is greater") : ((b>c) && (b>a)) ? console.log("b is greater") : console.log("c is greater");